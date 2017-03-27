var React = require('react');

export class NewsfeedNave extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div>
        <NavBar />
        <h1> This is the Newsfeed View</h1>
        <Footer/>
      </div>
      );
  }

}