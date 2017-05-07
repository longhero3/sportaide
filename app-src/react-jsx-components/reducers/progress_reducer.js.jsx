const ProgressReducer = (state = {courses: []}, action) => {
  switch(action.type) {
    case LOAD_PROGRESS_SUCCESS:
      return Object.assign({}, state, {
        courses: action.courses.courses
      })

    default:
      return state;
  }
}

export default ProgressReducer