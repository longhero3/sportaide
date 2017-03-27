var React = require('react');

export class LessonsView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div>
        <NavBar />
        <h1> This is the Lesson View</h1>
        <Footer/>
      </div>
      );
  }

}