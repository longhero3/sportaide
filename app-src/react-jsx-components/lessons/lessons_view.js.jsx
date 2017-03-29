import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export class LessonsView extends React.Component{

  componentDidMount(){
    store.dispatch(loadCourses());
  }

  render(){
    return(
      <div>
        <NavBar />
        <div className="ui container courses-container">
          <div className="ui two column stackable grid">
            <div className="four wide column">
              <div className="course-navigation">
                <ul>
                <li><a href="/dashboard/lessons/recommended_courses">Current Course</a></li>
                <li><a href="/dashboard/lessons/recommended_courses">Recommended for you</a></li>
                <li><a href="/dashboard/lessons/recommended_courses">Recents</a></li>
                <li><a href="/dashboard/lessons/recommended_courses">Search</a></li>
                </ul>
              </div>
            </div>
            <div className="twelve wide column">
              <div className="ui one course-list">
              {this.props.courses.map(course =>
                <CourseBlock
                key={course.id}
                course={course}
                />
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      );
  }

}

LessonsView.propTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}