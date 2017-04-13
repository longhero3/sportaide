import React from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ClubMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {lat: -37.863406, lng: 145.032180},
      zoom: 11,
      mapStyle: {
        height: (window.innerHeight
          || document.documentElement.clientHeight
          || document.body.clientHeight) - 20 + "px"
      }
    }
  }

  render() {

    return (
      <div>
        <NavBar />
        <div className="map-overlay ui stackable grid" style={ this.state.mapStyle }>
          <div className="google-map twelve wide column">
            <GoogleMapReact
              defaultCenter={this.state.center}
              defaultZoom={this.state.zoom}
              bootstrapURLKeys={{ key: "AIzaSyAgYzJwB6ihmfL635-dcwEFz7siTI9ke6A"}}>
              <AnyReactComponent
                lat={-37.853406}
                lng={145.142180}
                text={'Kreyser asdfasdfasdfgasdkfa sdfasd fajklsjkdf jkasdfjk  Avrora'}/>
            </GoogleMapReact>
          </div>
          <div className="four wide column">Club info section</div>
        </div>
        <Footer />
      </div>
    );
  }
}
