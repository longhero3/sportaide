const CoursesReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_COURSES_SUCCESS:
      return action.courses
    default:
      return state;
  }
}

export default CoursesReducer