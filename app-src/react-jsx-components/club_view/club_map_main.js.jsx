import {connect} from 'react-redux'

const clubMapState = (state) => ({
  isFetching: state.ClubsReducer.get('isFetching'),
  center: state.ClubsReducer.get('mapInfo').get('center'),
  zoom: state.ClubsReducer.get('mapInfo').get('zoom'),
  markers: state.ClubsReducer.get('dataFiltered'),
  visibleRowFirst: state.ClubsReducer.get('tableRowsInfo').get('visibleRowFirst'),
  visibleRowLast: state.ClubsReducer.get('tableRowsInfo').get('visibleRowLast'),
  maxVisibleRows: state.ClubsReducer.get('tableRowsInfo').get('maxVisibleRows'),
  hoveredRowIndex: state.ClubsReducer.get('tableRowsInfo').get('hoveredRowIndex'),
  openBalloonIndex: state.ClubsReducer.get('openBalloonIndex'),
  selectedMarker: state.ClubsReducer.get('selectedMarker')
})

const ClubMapMain = connect(clubMapState)(MainMapBlock)
export default ClubMapMain;