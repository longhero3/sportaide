var React = require('react');

export class NewsfeedsView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div>
        <NavBar />
        <div className="ui container">
          <div className="ui grid">

          </div>
        </div>
        <h1> This is the Newsfeed View</h1>
        <Footer/>
      </div>
      );
  }

}