var React = require('react');
import { Router, Route, Link, browserHistory, Redirect, IndexRoute, IndexRedirect } from 'react-router'
import { Provider } from 'react-redux';

export class MainApp extends React.Component {
  render(){
    return(
      <main className="app__main">
        {this.props.children}
      </main>
      );
  }
}

export class MainView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div>
      <NavBar/>

      <Footer/>
      </div>
    );
  }

}
