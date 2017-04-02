const CoursesReducer = (state = {courses: [], isFetching: true}, action) => {
  switch(action.type) {
    case LOAD_COURSES_SUCCESS:
      return Object.assign({}, state, {
        courses: action.courses,
        isFetching: false
      })

    case SEARCH_COURSES:
      return Object.assign({}, state, {
        courses: action.courses,
        isFetching: false
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