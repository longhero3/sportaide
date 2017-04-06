import {connect} from 'react-redux'

const mapCourseNavState = (state) => ({
  course: state.CourseDetailsReducer.course,
  isFetching: state.CourseDetailsReducer.isFetching
})

const VisibleCourseNav = connect(mapCourseNavState)(CourseNav)

export default VisibleCourseNav