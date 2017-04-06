const CourseDetailsReducer = (state = {course: {}, isFetching: true, currentLesson: {}}, action) => {
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
        currentLesson: action.lesson
      })

    default:
      return state;
  }
}

export default CourseDetailsReducer