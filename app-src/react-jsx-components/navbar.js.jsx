import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';

export class NavBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      className: ''
    }
  }

  componentDidMount(){
  }

  render(){
    return(
    <div>
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