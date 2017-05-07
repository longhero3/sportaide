import { connect } from 'react-redux';

const mapTopCourseToDashboard = (state) => ({
  courses: state.ProgressReducer.courses,
  forecasts: state.WeatherDetailsReducer.details,
})

const VisibleDashboard = connect(mapTopCourseToDashboard)(Dashboard)

export default VisibleDashboard