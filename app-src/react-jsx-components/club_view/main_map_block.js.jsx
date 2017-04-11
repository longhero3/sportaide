import React, {PropTypes, Component} from 'react';
import controllable from 'react-controllables';
import PureComponent from 'react-pure-render/component';

import GoogleMap from 'google-map-react';

import {List} from 'immutable';

const K_MARGIN_TOP = 30;
const K_MARGIN_RIGHT = 30;
const K_MARGIN_BOTTOM = 30;
const K_MARGIN_LEFT = 30;

const K_HOVER_DISTANCE = 30;

export class MainMapBlock extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      center: {lat: -37.33, lng: 144.96},
      zoom: 11,
      mapStyle: {
        height: (window.innerHeight
          || document.documentElement.clientHeight
          || document.body.clientHeight) - 20 + "px"
      }
    }
  }

  componentDidMount(){
    store.dispatch(loadClubs())
  }

  onBoundsChange(center, zoom, bounds, marginBounds) {
    if (this.props.onBoundsChange) {
      this.props.onBoundsChange({center, zoom, bounds, marginBounds});
    } else {
      this.props.onCenterChange(center);
      this.props.onZoomChange(zoom);
    }
  }

  onChildClick(key, childProps) {
    const markerId = childProps.marker.get('id');
    const index = this.props.markers.findIndex(m => m.get('id') === markerId);
    if (this.props.onChildClick) {
      this.props.onChildClick(index);
    }
  }

  onChildMouseEnter(key, childProps) {
    const markerId = childProps.marker.get('id');
    const index = this.props.markers.findIndex(m => m.get('id') === markerId);
    if (this.props.onMarkerHover) {
      this.props.onMarkerHover(index);
    }
  }

  onChildMouseLeave() {
    if (this.props.onMarkerHover) {
      this.props.onMarkerHover(-1);
    }
  }

  onBalloonCloseClick() {
    if (this.props.onChildClick) {
      this.props.onChildClick(-1);
    }
  }

  distanceToMouse() {
    return customDistanceToMouse();
  };

  render() {
    if(this.props.isFetching == true) {
      return (
        <div>
          <NavBar />
          <div className="ui container">
            <div className="ui active centered inline loader"></div>
          </div>
          <Footer />
        </div>)
    } else {

//      const {rowFrom, rowTo} = getRealFromTo(this.props.visibleRowFirst, this.props.visibleRowLast, this.props.maxVisibleRows, this.props.markers.size);
      const rowFrom = 0
      const rowTo = 20
      const Markers = this.props.markers &&
        this.props.markers.filter((m, index) => index >= rowFrom && index <= rowTo)
        .map((marker, index) => (
          <MapMarker
            // required props
            key={marker.id}
            lat={marker.lat}
            lng={marker.lng}
            showBalloon={index + rowFrom === this.props.openBalloonIndex}
            onCloseClick={this.onBalloonCloseClick}
            hoveredAtTable={index + rowFrom === this.props.hoveredRowIndex}
            scale={getScale(index + rowFrom, this.props.visibleRowFirst, this.props.visibleRowLast, K_SCALE_NORMAL)}
            {...markerDescriptions[marker.type]}
            marker={marker} />
        ));

      return (
        <div>
          <NavBar />
          <div className="map-overlay ui stackable grid" style={ this.state.mapStyle }>
            <div className="google-map twelve wide column">
              <GoogleMap
                bootstrapURLKeys={{ key: "AIzaSyAgYzJwB6ihmfL635-dcwEFz7siTI9ke6A"}}
                center={this.props.center.toJS()}
                zoom={this.props.zoom}
                onChildClick={this.onChildClick.bind(this)}
                onChildMouseEnter={this.onChildMouseEnter.bind(this)}
                onChildMouseLeave={this.onChildMouseLeave.bind(this)}
                margin={[K_MARGIN_TOP, K_MARGIN_RIGHT, K_MARGIN_BOTTOM, K_MARGIN_LEFT]}
                hoverDistance={K_HOVER_DISTANCE}
                distanceToMouse={this.distanceToMouse.bind(this)}
                >
                {Markers}
              </GoogleMap>
            </div>
            <div className="four wide column">Club info section</div>
          </div>
          <Footer />
        </div>
      );
    }
  }
}

MainMapBlock = controllable(MainMapBlock, ['center', 'zoom', 'markers'])

MainMapBlock.propTypes = {
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

MainMapBlock.defaultProps = {
  center: new List([-37.851221000000002, 144.72653700000001]),
  zoom: 10,
  visibleRowFirst: -1,
  visibleRowLast: -1,
  hoveredRowIndex: -1
}
