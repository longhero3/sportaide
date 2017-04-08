import React from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ClubMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {lat: 59.95, lng: 30.33},
      zoom: 11
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <GoogleMapReact
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          bootstrapURLKeys={{ key: "AIzaSyAgYzJwB6ihmfL635-dcwEFz7siTI9ke6A"}}>
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}/>
        </GoogleMapReact>
        <Footer />
      </div>
    );
  }
}
