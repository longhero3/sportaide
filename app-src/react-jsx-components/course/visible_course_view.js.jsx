import {connect} from 'react-redux'

const mapCourseState = (state) => ({
  course: state.CourseDetailsReducer.course,
  isFetching: state.CourseDetailsReducer.isFetching,
  currentLesson: state.CourseDetailsReducer.currentLesson
})

const VisibleCourseView = connect(mapCourseState)(CourseView)

export default VisibleCourseView