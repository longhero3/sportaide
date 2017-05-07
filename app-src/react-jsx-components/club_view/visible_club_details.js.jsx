import {connect} from 'react-redux'

const mapClubDetailsState = (state) => (
{
  isFetching: state.ClubsReducer.get('isFetching'),
  center: state.ClubsReducer.get('mapInfo').get('center'),
  zoom: state.ClubsReducer.get('mapInfo').get('zoom'),
  markers: state.ClubsReducer.get('dataFiltered'),
  visibleRowFirst: state.ClubsReducer.get('tableRowsInfo').get('visibleRowFirst'),
  visibleRowLast: state.ClubsReducer.get('tableRowsInfo').get('visibleRowLast'),
  maxVisibleRows: state.ClubsReducer.get('tableRowsInfo').get('maxVisibleRows'),
  hoveredRowIndex: state.ClubsReducer.get('tableRowsInfo').get('hoveredRowIndex'),
  openBalloonIndex: state.ClubsReducer.get('openBalloonIndex'),
  selectedClub: state.ClubsReducer.get('selectedMarker'),
  weatherClass: state.WeatherReducer.weatherClass,
  weatherTemp: state.WeatherReducer.weatherTemp,
  weatherText: state.WeatherReducer.weatherText,
  tmr: state.WeatherReducer.tmr,
  otherDay: state.WeatherReducer.otherDay
}
  )

const VisibleClubDetails = connect(mapClubDetailsState)(ClubDetails)

export default VisibleClubDetails