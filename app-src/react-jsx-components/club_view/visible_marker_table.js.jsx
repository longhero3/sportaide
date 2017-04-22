import {connect} from 'react-redux'

const mapMarkerTableState = (state) => (
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
    filteredClubs: state.ClubsReducer.get('filteredClubs'),
    weatherClass: state.WeatherReducer.weatherClass,
    weatherTemp: state.WeatherReducer.temp,
    weatherText: state.WeatherReducer.text,
    subLocation: state.WeatherReducer.subLocation,
    tmr: state.WeatherReducer.tmr,
    otherDay: state.WeatherReducer.otherDay
  }
  )

const VisibleMarkerTable = connect(mapMarkerTableState)(MarkerTable)

export default VisibleMarkerTable