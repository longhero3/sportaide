/*
 * Marker example
 */

import React, {PropTypes, Component} from 'react';
import cx from 'classnames';

import controllable from 'react-controllables';

import shouldPureComponentUpdate from 'react-pure-render/function';
import PureComponent from 'react-pure-render/component';

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

  // no optimizations at all
  render() {
    let scale = this.props.hover || this.props.showBalloon ? K_SCALE_HOVER : this.props.scale;
    scale = this.props.hoveredAtTable ? K_SCALE_TABLE_HOVER : scale;

    const markerHolderStyle = getMarkerHolderStyle(this.props.size, this.props.origin);
    const markerStyle = getMarkerStyle(this.props.size, this.props.origin);

    const zIndexStyle = {
      zIndex: Math.round(scale * 10000) - (this.props.showBalloon ? 20 : 0) + (this.props.hover ? K_HINT_HTML_DEFAULT_Z_INDEX : 0) // balloon
    };

    const textStyleDef = getMarkerTextStyle();
    const textStyle = calcMarkerTextStyle(scale, textStyleDef);

    const showHint = this.props.hoverState || this.props.showBalloonState; // || this.props.hoveredAtTable;

    // baloon position calc
    const mapWidth = document.getElementById('actual-map').offsetWidth;
    const mapHeight = document.getElementById('actual-map').offsetHeight;
    const markerDim = getElementPosition(document.getElementById('actual-map'));

    const hintBaloonHorizontalPosStyle = getHintBaloonHorizontalPosStyle(markerDim.x, this.props.size.width, this.props.origin.x, mapWidth);
    const hintBaloonVerticalPosClass = getHintBaloonVerticalPosClass(markerDim.y, mapHeight);

    const hintBalloonBottomOffsetClass = getHintBottomOffsetClass(this.props.size.width, this.props.origin.x);

    // set baloon position at first and then animate (it must be some lib for react animations)
    const noTransClass = this.props.hover === true && this.props.hoverState !== true ? 'hint--notrans' : '';
    const noTransBalloonClass = this.props.showBalloon === true && this.props.showBalloonState !== true ? 'hint--notrans' : '';

    const imageClass = this.props.image ? '' : this.props.imageClass;
    const imageStyle = this.props.image ? {
      backgroundImage: `url(${this.props.image})`
    } : null;

    const styleMarkerMarker = calcMarkerMarkerStyle(scale, zIndexStyle, markerStyle, imageStyle);

    // css hints library https://github.com/istarkov/html-hint
    return (
      <div
        style={markerHolderStyle}
        className={'map-marker hint hint--html hint--balloon'}>
        <div
          style={styleMarkerMarker}
          className={'map-marker__marker map-marker__marker--ap'}>
          {this.props.withText ?
            <div style={textStyle}>
            {this.props.marker.id}
            </div>
            :
            <div/>}
        </div>
        <div
          className={cx('hint__content map-marker-hint', this.props.showBalloon ? '' : 'noevents')}
          onMouseEnter={this.onMouseEnterContent.bind(this)}
          onMouseLeave={this.onMouseLeaveContent.bind(this)}>
          <div
            onClick={this._onCloseClick}
            className={cx('map-marker-hint__close-button', this.props.showBalloon ? 'map-marker-hint__close-button--visible' : '')}>
            close
          </div>

          <div className="map-marker-hint__title">
            <strong>{this.props.marker.name}</strong>
          </div>
          <div className="map-marker-hint__address">
            {this.props.marker.address}
          </div>

          <div className={cx('map-marker-hint__content', this.props.showBalloon ? 'map-marker-hint__content--visible' : '')}>
            {this.props.marker.description}
          </div>

          <div>
            <a className={cx('map-marker-hint__ap-link', this.props.showBalloon ? 'map-marker-hint__ap-link--hidden' : '')}>Click to view more info</a>
          </div>

        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    const K_TRANS_DELAY = 30;

    if (prevProps.hover !== this.props.hover) {
      setTimeout(() => this._onHoverStateChange(this.props.hover), K_TRANS_DELAY);
    }

    if (prevProps.showBalloon !== this.props.showBalloon) {
      setTimeout(() => this._onShowBalloonStateChange(this.props.showBalloon), K_TRANS_DELAY);
    }
  }
}

MapMarker = controllable(MapMarker, ['hoverState', 'showBalloonState'])

MapMarker.propTypes = {
  hover: PropTypes.bool,
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
  lat: PropTypes.any
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