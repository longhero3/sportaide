import fetch from 'isomorphic-fetch'

const LOAD_PROGRESS_SUCCESS = 'LOAD_PROGRESS_SUCCESS'


export function loadProgressSuccess(courses) {
  return {type: LOAD_PROGRESS_SUCCESS, courses};
}

export function loadProgress() {
  return function(dispatch) {
    return CourseApi.getTopViewedCourses().then(courses => {
      dispatch(loadProgressSuccess(courses));
  }).catch(error => {
      throw(error);
  });
};
}