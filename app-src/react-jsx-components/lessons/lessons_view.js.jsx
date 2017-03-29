var React = require('react');
import { connect } from 'react-redux'

export class LessonsView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      courses: []
    }
  }

  componentsDidMount(){
    store.dispatch(loadCourses());
    var newCourses = store.getState().CoursesReducer.courses
    this.setState({courses: newCourses})
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
              <div className="course-list"></div>
              {}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      );
  }

}

LessonsView = connect()(LessonsView)