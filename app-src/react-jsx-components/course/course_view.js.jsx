import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

export class CourseView extends React.Component{

  componentDidMount(){
    $('.accordion').accordion()
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
                  <Link to="/dashboard/newsfeeds" className="section">Home</Link>
                  <i className="right angle icon divider"></i>
                  <Link to="/dashboard/lessons" className="section">Lessons</Link>
                  <i className="right angle icon divider"></i>
                  <div className="active section">{"Course 101"}</div>
                </div>
                <h1 className="default-title"> Footy Integrity 101</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="ui container course-container">
          <div className="ui two column stackable grid">
            <div className="five wide column">
              <CourseNav/>
            </div>
            <div className="eleven wide column">
              <CourseTabs/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      );
  }

}

//CourseView.propTypes = {
//  courses: PropTypes.array.isRequired
//}