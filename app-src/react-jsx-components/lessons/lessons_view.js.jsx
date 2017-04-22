import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export class LessonsView extends React.Component{

  componentDidMount(){

    if(this.props.params.keywords){
      store.dispatch(searchCourses(this.props.params.keywords))
    } else {
      store.dispatch(loadCourses())
    }
  }

  render(){
    var courseContent = null;
    if(this.props.isFetching == true) {
      courseContent = <div className="ui course-list"><div className="ui active centered inline text loader">Looking for courses ...</div></div>
    } else {
      var searchDiv = <div></div>
      if(this.props.isSearch == true){
        searchDiv = <div className="search-message">You searched for <b>{this.props.keywords}</b>. {this.props.resultsFound} matches</div>
      }
      courseContent = <div className="ui course-list">{searchDiv}{this.props.courses.map(course => <CourseBlock key={course.id} course={course}/>)}</div>;
    }

    return(
      <div>
        <NavBar />
        <div className="ui container courses-container">
          <div className="ui two column stackable grid">
            <div className="four wide column">
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
  isFetching: PropTypes.bool.isRequired,
  keywords: PropTypes.string.isRequired,
  resultsFound: PropTypes.number.isRequired
}