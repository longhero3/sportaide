import React from 'react'

export class CourseNav extends React.Component {
  render(){
    return (
      <div className="chapter-navigation">
        <div className="search-navigation"></div>
        <div className="chapter-wrapper">
          <div className="chapter-content">
            <div className="ui styled accordion">
              <div className="title active">
                <i className="dropdown icon"></i>
              Level 1
              </div>
              <div className="content active">
                <div className="accordion transition visible" style={{display: "block !important"}}>
                  <div className="title">
                  Level 1A
                  </div>
                  <div className="title">
                  Level 1B
                  </div>
                  <div className="title">
                  Level 1C
                  </div>
                </div>
              </div>
              <div className="title">
                <i className="dropdown icon"></i>
              Level 2
              </div>
              <div className="content">
                <p>Welcome to level 2</p>
                <div className="accordion">
                  <div className="active title">
                  Level 2A
                  </div>
                  <div className="title">
                  Level 2B
                  </div>
                  <div className="title">
                  Level 2C
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