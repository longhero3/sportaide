import {connect} from 'react-redux'

const mapCourseNavState = (state) => ({
  course: state.CourseDetailsReducer.course,
  isFetching: state.CourseDetailsReducer.isFetching,
  chapterIndex: state.CourseDetailsReducer.chapterIndex,
  lessonIndex: state.CourseDetailsReducer.lessonIndex
})

const VisibleCourseNav = connect(mapCourseNavState)(CourseNav)

export default VisibleCourseNav