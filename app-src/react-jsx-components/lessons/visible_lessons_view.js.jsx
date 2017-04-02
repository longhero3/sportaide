import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  courses: state.CoursesReducer.courses,
  isFetching: state.CoursesReducer.isFetching,
  isSearch: state.CoursesReducer.isSearch,
  keywords: state.CoursesReducer.keywords,
  resultsFound: state.CoursesReducer.resultsFound
})

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => {
    dispatch(loadCourses())
  }
}
}

const VisibleLessonsView = connect(mapStateToProps)(LessonsView)
export default VisibleLessonsView