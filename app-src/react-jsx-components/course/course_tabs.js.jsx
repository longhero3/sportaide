import React from 'react'

export class CourseTabs extends React.Component{
  componentDidMount(){
    $('.tab-menu .item').tab()
  }
  render(){
    return (
      <div className="ui segment">
        <div className="ui pointing secondary menu tab-menu">
          <a className="item active" data-tab="first">Overview</a>
          <a className="item" data-tab="second">Video</a>
          <a className="item" data-tab="third">Transcript</a>
        </div>
        <div className="ui tab active" data-tab="first">
        </div>
        <div className="ui tab segment" data-tab="second">
          <div className="ui top attached tabular menu">
            <a className="item active" data-tab="second/a">2A</a>
            <a className="item" data-tab="second/b">2B</a>
            <a className="item" data-tab="second/c">2C</a>
          </div>
          <div className="ui bottom attached tab segment active" data-tab="second/a">2A</div>
          <div className="ui bottom attached tab segment" data-tab="second/b">2B</div>
          <div className="ui bottom attached tab segment" data-tab="second/c">2C</div>
        </div>
        <div className="ui tab segment" data-tab="third">
          <div className="ui top attached tabular menu">
            <a className="item active" data-tab="third/a">3A</a>
            <a className="item" data-tab="third/b">3B</a>
            <a className="item" data-tab="third/c">3C</a>
          </div>
          <div className="ui bottom attached tab segment active" data-tab="third/a">3A</div>
          <div className="ui bottom attached tab segment" data-tab="third/b">3B</div>
          <div className="ui bottom attached tab segment" data-tab="third/c">3C</div>
        </div>
      </div>
    );
  }
}