import fetch from 'isomorphic-fetch'

const RECEIVE_COURSE_SUCCESS = 'RECEIVE_COURSE_SUCCESS'
const REQUEST_COURSE = 'REQUEST_COURSE'
const SELECT_LESSON = 'SELECT_LESSON'


export function requestCourse(course) {
  return {type: LOAD_COURSES_SUCCESS, course};
}

export function receiveCourse(course) {
  return {type: RECEIVE_COURSE_SUCCESS, course};
}

export function selectLesson(lesson) {
  CourseApi.trackProgress(lesson.id)
  return {type: SELECT_LESSON, lesson};
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