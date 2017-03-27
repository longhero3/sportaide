import React from 'react'
import { connect } from 'react-redux'

let Footer = ({dispatch}) => (
  <nav className='footer'>
    <div className='menu-section'>
      <button className="ui button" href='' onClick={() => dispatch(ToggleMenu())}>
        <i className="icon align justify"></i>
        Menu
      </button>
    </div>
  </nav>
  );

Footer = connect()(Footer)

export default Footer