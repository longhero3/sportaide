import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

export class CourseView extends React.Component{

  componentDidMount(){
    if(this.props.params.course_id) {
      store.dispatch(loadCourse(this.props.params.course_id))
    }
  }

  render(){

    return(
      <div>
        <NavBar />
        <div className="course-title-banner">
          <div className="ui container">
            <div className="ui two column stackable grid">
              <div className="ten wide column">
                <div className="ui breadcrumb">
                  <a href="/" className="section">Home</a>
                  <i className="right angle icon divider"></i>
                  <Link to="/dashboard/lessons" className="section">Lessons</Link>
                  <i className="right angle icon divider"></i>
                  <div className="active section">{this.props.course.name}</div>
                </div>
                <h1 className="default-title"> {this.props.currentLesson.title}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="ui container course-container">
          <div className="ui two column stackable grid">
            <div className="five wide column">
              <VisibleCourseNav />
            </div>
            <div className="eleven wide column">
              <VisibleCourseTabs />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      );
  }
}

CourseView.propTypes = {
  course: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  currentLesson: PropTypes.object
}