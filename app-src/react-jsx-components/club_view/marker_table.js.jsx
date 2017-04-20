import React, {PropTypes} from 'react'

export class MarkerTable extends React.Component {



  handleSearchClub(event){
    if(event.keyCode == 13) {
      store.dispatch(requestSearchClub())
      return store.dispatch(searchClubs(event.target.value));
    }
  }
  render(){
    return (
      <div className="six wide column no-padding">
        <div className={"weather-container-"+ this.props.weatherClass}>
          <div className={this.props.weatherClass}/>
          <div className="weather-panel">
            <div className="temperature">{this.props.weatherTemp}&deg;C</div>
            <div className="weather-text">{this.props.weatherText}</div>
          </div>
          <div className="input-effect-wrapper">
            <input className="input-effect search-club" onKeyUp={this.handleSearchClub.bind(this)} placeholder="Search for club ..."/>
            <span className="input-focus-border" />
          </div>

          <div className="club-list">
            {this.props.filteredClubs.map((club) => {
            return (<ClubRow club={club} weatherClass={this.props.weatherClass} key={"club_" + club.id}/>);
            })}
          </div>
        </div>
      </div>
    )
  }
}

MarkerTable.propTypes = {
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
  filteredClubs: PropTypes.any,
  weatherClass: PropTypes.any,
  weatherTemp: PropTypes.any,
  weatherText: PropTypes.any
}