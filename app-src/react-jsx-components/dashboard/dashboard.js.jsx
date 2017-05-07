import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

export class Dashboard extends React.Component{

  componentDidMount(){
    store.dispatch(loadProgress())
  }

  render(){
    return (
      <div>
        <NavBar/>
        <div className="mainWrap ui container">
          <div className="ui equal width left aligned padded grid stackable">
      <div className="stretched row">
      <div className="sixteen wide tablet ten wide computer column">
      <div className="ui segments">
      <div className="ui segment no-padding-bottom">
      <h5 className="ui left floated header">
      Recent Courses
    </h5>
    <div className="clearfix" />
      </div>
    <div className="ui segment left aligned">
      <table className="ui very basic center aligned  celled table">
      <thead>
      <tr>
      <th>#</th>
    <th>Course Name</th>
    <th>Start Date</th>
    <th>Progress</th>
    <th>Status</th>
    </tr>
    </thead>
    <tbody>
    {this.props.courses.map(function(course){
      return (<ProgressCourseRow course={course} key={"viewed_course" + course.id}/>);
    })}
    </tbody>
    </table>
    <div className="ui inverted dimmer">
      <div className="ui text loader">Loading</div>
    </div>
    </div>
    </div>
    </div>
    <div className="sixteen wide tablet six wide computer column">
      <div className="ui segment">
      <h2 className="ui   center aligned header">
      <div className="content">
      Melbourne
      <div className="sub header">Thursday, 29 November</div>
    </div>
    </h2>
    <h3 className="ui center aligned header">14 °</h3>
    <div className="ui divider" />
      <div className="ui five column centered grid">
      <div className="column center aligned">
      <p>Wed</p>
    <p><i className="wi wi-day-cloudy" /></p>
    <p>12°</p>
    </div>
    <div className="column center aligned">
      <p>Thu</p>
    <p><i className="wi wi-day-sleet" /></p>
    <p>10°</p>
    </div>
    <div className="column center aligned">
      <p>Fri</p>
    <p><i className="wi wi-day-cloudy-gusts" /></p>
    <p>8°</p>
    </div>
    <div className="column center aligned">
      <p>Sat</p>
    <p><i className="wi wi-day-sprinkle" /></p>
    <p>-5°</p>
    </div>
    <div className="column center aligned">
      <p>Sun</p>
    <p><i className="wi wi-day-lightning" /></p>
    <p>14°</p>
    </div>
    </div>
</div>
</div>
</div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

Dashboard.propTypes = {
  courses: PropTypes.any
}

const mapTopCourseToDashboard = (state) => ({
  courses: state.ProgressReducer.courses
})

Dashboard = connect(mapTopCourseToDashboard)(Dashboard)