import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export class LessonsView extends React.Component{

  componentDidMount(){
    if(this.props.params.keywords){
      store.dispatch(searchCourses(this.props.params.keywords))
    } else {
      store.dispatch(loadCourses());
    }
  }

  courseContent(){
    if(this.props.isFetching == true) {
      return(
        <div className="ui active centered inline loader"></div>
        );
    } else {
      {this.props.courses.map(course =>
      <CourseBlock
      key={course.id}
      course={course}
      />
      )}
    }
  }

  render(){
    var courseContent = null;
    if(this.props.isFetching == true) {
      courseContent = <div className="ui course-list"><div className="ui active centered inline text loader">Looking for courses ...</div></div>
    } else {
      courseContent = <div className="ui course-list">{this.props.courses.map(course => <CourseBlock key={course.id} course={course}/>)}</div>;
    }

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
              {courseContent}
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
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}