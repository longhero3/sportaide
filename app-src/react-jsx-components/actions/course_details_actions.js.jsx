import fetch from 'isomorphic-fetch'

const RECEIVE_COURSE_SUCCESS = 'RECEIVE_COURSE_SUCCESS'
const REQUEST_COURSE = 'REQUEST_COURSE'
const SELECT_LESSON = 'SELECT_LESSON'
const NEXT_LESSON = 'NEXT_LESSON'


export function requestCourse(course) {
  return {type: LOAD_COURSES_SUCCESS, course};
}

export function receiveCourse(course) {
  return {type: RECEIVE_COURSE_SUCCESS, course};
}

export function selectLesson(lesson, chapterIndex, lessonIndex) {
  return {type: SELECT_LESSON, lesson, chapterIndex, lessonIndex};
}

export function nextLesson(){
  return {type: NEXT_LESSON}
}

export function loadCourse(courseID) {
  return function(dispatch) {
    return CourseApi.getCourseById(courseID).then(course => {
      dispatch(receiveCourse(course));
  }).catch(error => {
    throw(error);
});
};
}