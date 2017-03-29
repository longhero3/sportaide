var React = require('react');
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';

export class CourseBlock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      course: props.course
    }
  }

  goToCoursePage() {
    console.log('go here')
    browserHistory.push('/dashboard/lessons/' + this.state.course.id);
  }

  render(){
    return(
      <div className="course-block" onClick={this.goToCoursePage.bind(this)}>
        <div className="offering-content">
          <div>
            <img src={this.state.course.thumbnail} className="offering-image" width="100" height="100"/>
          </div>
          <div className="offering-info">
            <div className="course-offering-name">
              <h2>{this.state.course.name}</h2>
            </div>
            <div className="course-offering-author">
              <span>{this.state.course.author}</span>
            </div>
          </div>
        </div>
      </div>
      );
  }

}