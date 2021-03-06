import React, {PropTypes} from 'react'

export class MarkerTable extends React.Component {



  handleSearchClub(event){
    if(event.keyCode == 13) {
      store.dispatch(loadWeatherOnLocation(event.target.value))
      store.dispatch(requestSearchClub())
      return store.dispatch(searchClubs(event.target.value));
    }
  }

  getLocation() {
    store.dispatch(getLocation())
  }

  clubList(){
    if(this.props.isSearchingClubs == true){
      return <div className="ui active centered inline loader"></div>;
    } else {
      if(this.props.filteredClubs.length == 0) {
        return <div className="ui centered grid no-clubs-message"><br/>No Clubs Found Yet.</div>;
      } else {
        return <div className="club-list">
          {this.props.filteredClubs.map((club) => {
          return (<ClubRow club={club} weatherClass={this.props.weatherClass} key={"club_" + club.id}/>);
          })}
          </div>;
      }
    }
  }

  render(){
    return (
      <div className="six wide column no-padding">
        <div className={"weather-container-"+ this.props.weatherClass}>
          <div className={this.props.weatherClass}/>
          <div className="weather-panel">
            <div className="today-weather">
              <div className="location">{this.props.subLocation}</div>
              <div className="temperature">{this.props.weatherTemp}&deg;C</div>
              <div className="weather-text">{this.props.weatherText}</div>
            </div>
            <div className="forecasts">
              <div className="tomorrow">
                <div className="label">{this.props.tmr.text}</div>
                  {this.props.tmr.low}&deg; - {this.props.tmr.high}&deg;
              </div>
              <div className="day-after"><div className="label">{this.props.otherDay.text}</div>
                  {this.props.otherDay.low}&deg; - {this.props.otherDay.high}&deg;</div>
            </div>
          </div>
          <div className="input-effect-wrapper ui icon input">
            <i className="search icon"></i>
            <input className="input-effect search-club" onKeyUp={this.handleSearchClub.bind(this)} placeholder="Search by postcodes, sports, club names ..."/>
            <span className="input-focus-border" />
          </div>
          {this.clubList()}
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
  isSearchingClubs: PropTypes.bool,
  filteredClubs: PropTypes.any,
  weatherClass: PropTypes.any,
  weatherTemp: PropTypes.any,
  weatherText: PropTypes.any,
  subLocation: PropTypes.any,
  tmr: PropTypes.any,
  otherDay: PropTypes.any
}

MarkerTable.defaultProps = defaultWeatherState()