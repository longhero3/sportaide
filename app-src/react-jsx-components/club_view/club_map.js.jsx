import React, {PropTypes} from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ClubMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {lat: -37.851221, lng: 144.726537},
      zoom: 11,
      mapStyle: {
        height: (window.innerHeight
          || document.documentElement.clientHeight
          || document.body.clientHeight) - 20 + "px"
      },
      map: null,
      goldStar: {
        path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
        fillColor: 'yellow',
        fillOpacity: 0.8,
        scale: 1,
        strokeColor: 'gold',
        strokeWeight: 14
      }
    }
  }

  componentDidMount(){
    this.state.map = new google.maps.Map(document.getElementById('google-club-map'), {
      zoom: 11,
      center: this.state.center
    });
    store.dispatch(loadClubs())
    var marker = new google.maps.Marker({
      position: this.state.center,
      map: this.state.map
    });
  }

  componentDidUpdate(prev, next){
    this.props.markers.forEach((club) => {
      var latLng = new google.maps.LatLng(club.lat,club.lng);
      var marker = new google.maps.Marker({
        position: latLng,
        animation: google.maps.Animation.DROP,
        map: this.state.map
      })
      var infoWindow = new google.maps.InfoWindow({
        content: club.description
      });

      marker.addListener('click', function() {
        infoWindow.open(this.state.map, marker);
      }.bind(this));

      return marker;
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="map-overlay ui stackable grid" style={ this.state.mapStyle }>
          <div className="google-map twelve wide column" id="google-club-map">
          </div>
          <div className="four wide column">Club inf section</div>
        </div>
        <Footer />
      </div>
    );
  }
}

ClubMap.propTypes = {
  onCenterChange: PropTypes.func, // @controllable generated fn
  onZoomChange: PropTypes.func, // @controllable generated fn
  onBoundsChange: PropTypes.func,
  onMarkerHover: PropTypes.func,
  onChildClick: PropTypes.func,
  center: PropTypes.any,
  zoom: PropTypes.number,
  markers: PropTypes.any,
  visibleRowFirst: PropTypes.number,
  visibleRowLast: PropTypes.number,
  maxVisibleRows: PropTypes.number,
  hoveredRowIndex: PropTypes.number,
  openBalloonIndex: PropTypes.number,
  isFetching: PropTypes.bool
}
