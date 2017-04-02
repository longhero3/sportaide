const CoursesReducer = (state = {courses: [], isFetching: true, isSearch: false, resultsFound: 0, keywords: "empty"}, action) => {
  switch(action.type) {
    case LOAD_COURSES_SUCCESS:
      return Object.assign({}, state, {
        courses: action.courses.courses,
        isFetching: false
      })

    case SEARCH_COURSES_SUCCESS:
      return Object.assign({}, state, {
        courses: action.courses.courses,
        isFetching: false,
        isSearch: true,
        resultsFound: action.courses.results_found,
        keywords: action.courses.keywords
      })

    case REQUEST_SEARCH_COURSE:
      return Object.assign({}, state, {
        isFetching: true
      })
    default:
      return state;
  }
}

export default CoursesReducer