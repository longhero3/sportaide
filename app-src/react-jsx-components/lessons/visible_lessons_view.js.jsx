import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  courses: state.CoursesReducer
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