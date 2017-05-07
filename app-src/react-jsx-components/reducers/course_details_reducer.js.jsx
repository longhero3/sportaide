const CourseDetailsReducer = (state = {course: {}, isFetching: true, currentLesson: {}, chapterIndex: 0, lessonIndex:0}, action) => {
  switch(action.type) {
    case RECEIVE_COURSE_SUCCESS:
      return Object.assign({}, state, {
        course: action.course,
        isFetching: false,
        currentLesson: action.course.chapters[0].lessons[0]
      })

    case REQUEST_COURSE:
      return Object.assign({}, state, {
        isFetching: true
      })

    case SELECT_LESSON:
      return Object.assign({}, state, {
        currentLesson: action.lesson,
        lessonIndex: action.lessonIndex,
        chapterIndex: action.chapterIndex
      })

    case NEXT_LESSON:
      CourseApi.trackProgress(state.currentLesson.id)
      if (state.course.chapters[state.chapterIndex].lessons[state.lessonIndex + 1]) {
        return Object.assign({}, state, {
          currentLesson: state.course.chapters[state.chapterIndex].lessons[state.lessonIndex + 1],
          lessonIndex: state.lessonIndex + 1
        })
      } else {
        if(state.course.chapters[state.chapterIndex + 1]) {
          return Object.assign({}, state, {
            currentLesson: state.course.chapters[state.chapterIndex + 1].lessons[0],
            lessonIndex: 0,
            chapterIndex: state.chapterIndex + 1
          })
        } else {
          return Object.assign({}, state, {
            currentLesson: state.course.chapters[0].lessons[0],
            lessonIndex: 0,
            chapterIndex: 0
          })
        }
      }

    default:
      return state;
  }
}

export default CourseDetailsReducer