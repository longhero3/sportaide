import React from 'react'

export class CourseNav extends React.Component {
  render(){
    return (
      <div className="chapter-navigation">
        <div className="search-navigation">
          <div className="ui icon input fluid">
            <i className="search icon"></i>
            <input type="text" placeholder="Search for specific chapter..."/>
          </div>
        </div>
        <div className="chapter-wrapper">
          <div className="chapter-content">
            <div className="ui styled accordion">
              <div className="title active">
                <i className="dropdown icon"></i>
              Module 1: Footy Basic Rules
              </div>
              <div className="content active">
                <div className="accordion transition visible" style={{display: "block !important"}}>
                  <div className="title">
                  Lesson 1: The Oval
                  </div>
                  <div className="title">
                  Lesson 2: Running
                  </div>
                  <div className="title">
                  Lesson 3: Catching Ball
                  </div>
                  <div className="title">
                  Lesson 4: Marking
                  </div>
                  <div className="title">
                  Lesson 5: Tackling
                  </div>
                </div>
              </div>
              <div className="title">
                <i className="dropdown icon"></i>
              Module 2: Preparation
              </div>
              <div className="content">
                <div className="accordion">
                  <div className="active title">
                  Lesson 1: Free kicks
                  </div>
                  <div className="title">
                  Lesson 2: Shepherding
                  </div>
                  <div className="title">
                  Level 3: Warming up
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}