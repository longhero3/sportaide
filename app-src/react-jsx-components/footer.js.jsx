import React from 'react'
import { connect } from 'react-redux'

let Footer = ({dispatch}) => (
  <nav className='footer'>
    <div className="ui two column grid">
      <div className="six wide column">
        <div className='menu-section'>
          <button className="ui button" href='' onClick={() => dispatch(ToggleMenu())}>
            <i className="icon align justify"></i>
            Menu
          </button>
        </div>
      </div>
      <div className="ten wide column">
        <div className="ui one column grid">
          <div className="fourteen wide column general-search-bar">
            <div className="ui icon input fluid">
              <input type="text" placeholder="Search..." onKeyUp={(event) => {
                if(event.keyCode == 13) {
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