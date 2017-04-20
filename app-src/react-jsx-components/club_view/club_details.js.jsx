import React, {PropTypes} from 'react'
import {Link} from 'react-router';

export class ClubDetails extends React.Component {

  render(){
    if(this.props.selectedClub) {
      return (
      <div className="six wide column">
        <Link to="/dashboard/clubs/club_map">Back</Link>
        You have selected {this.props.selectedClub.name}
      </div>)
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
  selectedClub: PropTypes.any
}