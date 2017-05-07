import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

export class Dashboard extends React.Component{

  componentDidMount(){
    store.dispatch(loadProgress())
    store.dispatch(loadWeatherDetails())
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
      <div className="sub header">{this.props.forecasts[0].fulltext}</div>
    </div>
    </h2>
    <h3 className="ui center aligned header">{this.props.forecasts[0].low} ° - {this.props.forecasts[0].high} °</h3>
    <div className="ui divider" />
      <div className="ui five column centered grid">
      {this.props.forecasts.map(function(forecast, index){
        return (<div className="column center aligned" key={"forecast_" + index}>
                  <p>{forecast.text}</p>
                  <p><i className={"wi wi-" + forecast.classname}/></p>
                  <p>{forecast.low}°-{forecast.high}°</p>
                </div>);
      })}

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
  courses: PropTypes.any,
  forecasts: PropTypes.any
}

Dashboard.defaultProps = {
  forecasts: defaultWeatherDetailsState().details
}