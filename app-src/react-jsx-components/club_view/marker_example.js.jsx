/*
 * Marker example
 */

import React, {PropTypes, Component} from 'react';
import cx from 'classnames';

import controllable from 'react-controllables';

import shouldPureComponentUpdate from 'react-pure-render/function';
import PureComponent from 'react-pure-render/component';
import { browserHistory } from 'react-router';

import {connect} from 'react-redux';

const K_HINT_HTML_DEFAULT_Z_INDEX = 1000000;
const K_SCALE_HOVER = 1;
const K_SCALE_TABLE_HOVER = 1;
const K_SCALE_NORMAL = 0.65;
const K_MIN_CONTRAST = 0.4;


function calcMarkerMarkerStyle(scale, zIndexStyle, markerStyle, imageStyle) {
  const contrast = K_MIN_CONTRAST + (1 - K_MIN_CONTRAST) * Math.min(scale / K_SCALE_NORMAL, 1);

  return {
    transform: `scale(${scale} , ${scale})`,
    WebkitTransform: `scale(${scale} , ${scale})`,
    filter: `contrast(${contrast})`,
    WebkitFilter: `contrast(${contrast})`,
    markerStyle,
    zIndexStyle,
    imageStyle
  };
}

function calcMarkerTextStyle(scale, markerTextStyle) {
  const K_MAX_COLOR_VALUE = 0;
  const K_MIN_COLOR_VALUE = 8;
  const colorV = Math.ceil(K_MIN_COLOR_VALUE + (K_MAX_COLOR_VALUE - K_MIN_COLOR_VALUE) * Math.min(scale / K_SCALE_NORMAL, 1));
  const colorHex = colorV.toString(16);
  const colorHTML = `#${colorHex}${colorHex}${colorHex}`;

  return {
    markerTextStyle,
    color: colorHTML
  };
}


export default class MapMarker extends PureComponent {

  constructor(props) {
    super(props);
    this.alive = true;
  }

  onShowBalloonStateChange(...args) {
    if (!this.alive) return;
    this.props.onShowBalloonStateChange(...args);
  }

  onHoverStateChange(...args) {
    if (!this.alive) return;
    this.props.onHoverStateChange(...args);
  }

  onMouseEnterContent() {
//    this.props.onMouseAllow(false); // disable mouse move hovers
  }

  onMouseLeaveContent(){
//    this.props.onMouseAllow(true); // enable mouse move hovers
  }

  onCloseClick() {
    if (this.props.onCloseClick) {
      this.props.onCloseClick();
    }
  }

  componentWillUnmount() {
    // if (this.props.onCloseClick) {
    //   this.props.onCloseClick();
    // }
    this.alive = false;
  }

  selectMarker(){
    store.dispatch(requestFetcher())
    browserHistory.push('/dashboard/clubs/club_map/' + this.props.marker.id)
  }

  // no optimizations at all
  render() {
    var selectedClass = ""
    if(this.props.isSelected == true) {
      selectedClass = "selected"
    }

    if(this.props.hoveredClub) {
      if(this.props.hoveredClub.id == this.props.marker.id) {
        selectedClass = "selected"
      }
    }

    return (
      <div className={"marker-content " + selectedClass} data-hint={this.props.marker.name} onClick={this.selectMarker.bind(this)}>
        <i className={"pointing down icon club-icon " + selectedClass}></i>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    const K_TRANS_DELAY = 30;

    if (prevProps.$hover !== this.props.$hover) {
      setTimeout(() => this.onHoverStateChange(this.props.$hover), K_TRANS_DELAY);
    }

    if (prevProps.showBalloon !== this.props.showBalloon) {
      setTimeout(() => this.onShowBalloonStateChange(this.props.showBalloon), K_TRANS_DELAY);
    }
  }
}

MapMarker = controllable(MapMarker, ['hoverState', 'showBalloonState'])

MapMarker.propTypes = {
  $hover: PropTypes.bool,
  onMouseAllow: PropTypes.func,

  marker: PropTypes.any,
  hoveredAtTable: PropTypes.bool,
  scale: PropTypes.number,
  showBalloon: PropTypes.bool,
  onCloseClick: PropTypes.func,
  showBalloonState: PropTypes.bool,
  onShowBalloonStateChange: PropTypes.func,

  // animation helpers
  hoverState: PropTypes.bool,
  onHoverStateChange: PropTypes.func,

  size: PropTypes.any,
  origin: PropTypes.any,
  imageClass: PropTypes.string,
  image: PropTypes.string,
  withText: PropTypes.bool,
  hintType: PropTypes.string,
  lng: PropTypes.any,
  lat: PropTypes.any,
  hoveredClub: PropTypes.any
};

MapMarker.defaultProps = {
  scale: K_SCALE_NORMAL,
  hoverState: false,
  showBalloonState: false,
  withText: false,
  size: {width: 100, height: 60},
  origin: {x: 15 / 62, y: 1},
  imageClass: 'map-marker__marker--big',
  hintType: 'hint--info'
};


const mapMarkerState = (state) => ({
  hoveredClub: state.ClubsReducer.get('hoveredClub')
})

MapMarker = connect(mapMarkerState)(MapMarker)