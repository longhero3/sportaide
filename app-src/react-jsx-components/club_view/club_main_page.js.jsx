import React from 'react'

export class ClubMainPage extends React.Component {
  componentDidMount(){
    if(this.props.params.postcode) {
      store.dispatch(searchClubs(this.props.params.postcode))
    }
  }

  render(){
    return (
      <div>
      <NavBar />
      <div className="map-overlay ui stackable grid no-margin-left-right">
        <ClubMapMain/>
        <VisibleMarkerTable/>
      </div>
      <Footer />
  </div>
)
}
}