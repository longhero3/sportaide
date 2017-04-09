import React from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ClubMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {lat: -37.33, lng: 144.96},
      zoom: 11,
      mapStyle: {
        height: window.innerHeight
          || document.documentElement.clientHeight
          || document.body.clientHeight + "px"
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
                lat={-37.82}
                lng={144.96}
                text={'Kreyser Avrora'}/>
            </GoogleMapReact>
          </div>
          <div className="four wide column">Club info section</div>
        </div>
        <Footer />
      </div>
    );
  }
}
