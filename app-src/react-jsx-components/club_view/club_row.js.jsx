import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

export class ClubRow extends React.Component {

  handleSelectClub(){
    store.dispatch(requestFetcher())
    browserHistory.push('/dashboard/clubs/club_map/' + this.props.club.id)
  }

  handleHover(){
    store.dispatch(setHoveredClub(this.props.club))
  }

  handleHoverOut(){
    store.dispatch(setHoverOut())
  }

  render(){
    var validClub = <div></div>
    if (this.props.club.indoor_outdoor == "indoor" || this.props.weatherClass == "sunny" || this.props.weatherClass == "cloudy" ) {
      validClub = <i className="checkmark icon green able-club-tick"></i>
    }
    return(
    <div className="club-row" onClick={this.handleSelectClub.bind(this)} onMouseOver={this.handleHover.bind(this)} onMouseOut={this.handleHoverOut.bind(this)}>
      <div className="fourteen wide column no-padding">
        <div className="club-row-name">{this.props.club.name}</div>
        <div className="club-row-address">{this.props.club.address}, {this.props.club.postcode}</div>
      </div>
      <div className="two wide column no-padding">
        {validClub}
      </div>
    </div>)
  }
}