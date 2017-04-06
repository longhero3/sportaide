import {connect} from 'react-redux'

const mapCourseTabsState = (state) =>({
  course: state.CourseDetailsReducer.course,
  lesson: state.CourseDetailsReducer.currentLesson,
  isFetching: state.CourseDetailsReducer.isFetching
})

const VisibleCourseTabs = connect(mapCourseTabsState)(CourseTabs)

