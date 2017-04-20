import React from 'react'

export class ClubDetailsPage extends React.Component {
  componentDidMount(){
    setTimeout(function(){ store.dispatch(getClub(this.props.params.club_id))}.bind(this), 10);
  }

  componentDidUpdate(prev,state) {
    setTimeout(function(){ store.dispatch(getClub(this.props.params.club_id))}.bind(this), 10);
  }

  render(){
    return (
      <div>
        <NavBar />
        <div className="map-overlay ui stackable grid">
          <ClubMapMain/>
          <VisibleClubDetails/>
        </div>
        <Footer/>
      </div>
    )
  }
}