import React from 'react'
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router';

let Footer = ({dispatch}) => (
  <nav className='ui fixed menu'>
    <div className="ui container">
      <a className="item dashboard-logo" href='/'>
        <div className="dashboard-logo-image"></div>
      </a>
      <Link className="item bold" to='/dashboard/lessons'>
        Courses
      </Link>
      <Link className="item bold" to='/dashboard/clubs/club_map'>
        Club Map
      </Link>
      <div className="right menu">
        <div className="item">
          <div className="ui icon transparent input">
            <input type="text" placeholder="Search for courses..." onKeyUp={(event) => {
              if(event.keyCode == 13) {
                browserHistory.push('/dashboard/lessons')
                dispatch(requestSearchCourses())
                return dispatch(searchCourses(event.target.value))}
              }}/>
            <i className="search link icon"></i>
          </div>
        </div>
        <div className="item"></div>
      </div>
    </div>
  </nav>
  );

Footer = connect()(Footer)

export default Footer
