import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';

export class NavBar extends React.Component{
//  <p>
//  Show:
//    {" "}
//    <NavLink filter="">
//    Dashboard
//    </NavLink>
//    {", "}
//    <NavLink filter="newsfeeds">
//    Newsfeeds
//    </NavLink>
//    {", "}
//    <NavLink filter="lessons">
//    Lessons
//    </NavLink>
//  </p>

  constructor(props){
    super(props)
    this.state = {
      className: ''
    }
  }

  componentDidMount(){
    store.subscribe( function(){
      var newState = store.getState()
      this.setState({className: newState.NavReducer.className})
      }.bind(this)
    )
  }

  render(){
    return(
    <div>
      <nav id="c-menu--slide-left" className={"c-menu c-menu--slide-left " + this.state.className }>
        <div className="nav-content">
          <div className="close-section">
            <button className="ui icon button" onClick={ () => this.props.dispatch(ToggleMenu())}>
              <i className="angle left icon"></i>
            </button>
          </div>
          <div className="menu-header">Sportaide Menu</div>
          <ul className="c-menu__items">
            <li className="c-menu__item"><a href="/" className="c-menu__link" onClick={ () => this.props.dispatch(ToggleMenu()) }>Home</a></li>
            <li className="c-menu__item"><Link to="/dashboard/clubs/club_map" className="c-menu__link" onClick={ () => this.props.dispatch(ToggleMenu())}>Club Map</Link></li>
            <li className="c-menu__item"><Link to="/dashboard/lessons" className="c-menu__link" onClick={ () => this.props.dispatch(ToggleMenu())}>Lessons</Link></li>
          </ul>
        </div>
      </nav>
      <div id="c-mask" className={ "c-mask " + this.state.className} onClick={ () => this.props.dispatch(ToggleMenu())}></div>
    </div>
  );
  }
}


//const mapDispatchToProps = (dispatch) => {
//    return {
//      onToggleNav: () => {
//      dispatch(ToggleMenu())
//    }
//  }
//}

NavBar = connect()(NavBar)