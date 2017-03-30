import fetch from 'isomorphic-fetch'

const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS'

export function loadCoursesSuccess(courses) {
  return {type: LOAD_COURSES_SUCCESS, courses};
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