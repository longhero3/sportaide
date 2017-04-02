import fetch from 'isomorphic-fetch'

const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS'
const SEARCH_COURSES = 'SEARCH_COURSE'
const REQUEST_SEARCH_COURSE = 'REQUEST_SEARCH_COURSE'


export function loadCoursesSuccess(courses) {
  return {type: LOAD_COURSES_SUCCESS, courses};
}

export function requestSearchCourses() {
  return {type: REQUEST_SEARCH_COURSE}
}

export function loadCourses() {
  return function(dispatch) {
    return CourseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
  }).catch(error => {
      throw(error);
  });
};
}

export function searchCourses(keywords) {
  return function(dispatch) {
    return CourseApi.searchCourses(keywords).then(courses => {
      dispatch(loadCoursesSuccess(courses));
  }).catch(error => {
    throw(error);
});
};
}

