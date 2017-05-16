import React, {PropTypes} from 'react'
import {Link} from 'react-router';

export class ClubDetails extends React.Component {

  render(){

    if(this.props.selectedClub) {
      var validClub = <i className="remove icon red"></i>
      if (this.props.selectedClub.indoor_outdoor == "indoor" || this.props.weatherClass == "sunny" || this.props.weatherClass == "cloudy" ) {
        validClub = <i className="checkmark icon green"></i>
      }

      return (
        <div className="six wide column no-padding">
          <div className={"weather-container-"+ this.props.weatherClass}>
            <div className={this.props.weatherClass}/>
            <div className="weather-panel">
              <div className="today-weather">
                <div className="location">{this.props.selectedClub.suburb}</div>
                <div className="temperature">{this.props.weatherTemp}&deg;C</div>
                <div className="weather-text">{this.props.weatherText}</div>
              </div>
              <div className="forecasts">
                <div className="tomorrow">
                  <div className="label">{this.props.tmr.text}</div>
                  {this.props.tmr.low}&deg; - {this.props.tmr.high}&deg;
                </div>
                <div className="day-after"><div className="label">{this.props.otherDay.text}</div>
                  {this.props.otherDay.low}&deg; - {this.props.otherDay.high}&deg;
                </div>
              </div>
            </div>

            <div className="club-details-wrapper">
              <div className="ui stackable grid">
                <div className="two wide column">
                  <Link to="/dashboard/clubs/club_map"><i className="angle left icon back-to-map-icon"/></Link>
                </div>
                <div className="fourteen wide column">
                  <div className="club-name">
                    {this.props.selectedClub.name}
                  </div>
                  <div className="club-name-separator"></div>
                  <div className="club-details-content">
                    <b className="title">Address:</b>{this.props.selectedClub.address}<br/>
                    <b className="title">Suburb:</b>{this.props.selectedClub.suburb} {this.props.selectedClub.postcode}<br/>
                    <b className="title">Description:</b>{this.props.selectedClub.description}<br/>
                    <b className="title">Available sports:</b>{this.props.selectedClub.business_category}<br/>
                    <b className="title">Weather condition:</b>{validClub}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="six wide column">
          <div className="ui active centered inline loader"></div>
        </div>)
    }

  }
}


ClubDetails.propTypes = {
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
  isFetching: PropTypes.bool,
  selectedClub: PropTypes.any,
  weatherClass: PropTypes.any,
  weatherTemp: PropTypes.any,
  weatherText: PropTypes.any,
  tmr: PropTypes.any,
  otherDay: PropTypes.any
}

ClubDetails.defaultProps = defaultWeatherState()