import {connect} from 'react-redux'

const mapCourseState = (state) => ({
  course: state.CourseDetailsReducer.course,
  isFetching: state.CourseDetailsReducer.isFetching
})

const VisibleCourseView = connect(mapCourseState)(CourseView)

export default VisibleCourseView