import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';

let Footer = ({dispatch}) => (
  <nav className='footer'>
    <div className="ui container">
      <div className="ui two column grid">
        <div className="eight wide column">
          <div className='menu-section'>
            
            <a className="ui button" href='/'>
              Home
            </a>
            <a className="ui button" href='/dashboard/lessons'>
              Lessons
            </a>
            <a className="ui button" href='/dashboard/clubs/club_map'>
              Map
            </a>
          </div>
        </div>
        <div className="eight wide column">
          <div className="general-search-bar">
            <div className="ui icon input fluid">
              <input type="text" placeholder="Search..." onKeyUp={(event) => {
                if(event.keyCode == 13) {
                  browserHistory.push('/dashboard/lessons')
                  dispatch(requestSearchCourses())
                  return dispatch(searchCourses(event.target.value))}
                }}/>
              <i className="search icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  );

Footer = connect()(Footer)

export default Footer
