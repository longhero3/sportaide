import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

export class ProgressCourseRow extends React.Component{

  render(){
    var completedDiv = <td><a className="ui green mini basic label">Completed</a></td>
    if(this.props.course.completed == false) {
      completedDiv = <td><a className="ui blue mini basic label">In Progress</a></td>
    }
    return (
      <tr>
        <td>{this.props.course.id}</td>
        <td><Link to={"/dashboard/lessons/" + this.props.course.id}>{this.props.course.course_name}</Link></td>
        <td>{this.props.course.start_date}</td>
        <td>{this.props.course.progress}%</td>
        {completedDiv}
      </tr>
    );
  }
}