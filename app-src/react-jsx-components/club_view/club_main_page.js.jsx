import React from 'react'

export class ClubMainPage extends React.Component {
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