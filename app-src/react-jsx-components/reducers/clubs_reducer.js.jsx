import immutable, {Map, List} from 'immutable';

const K_LAST_VISIBLE_ROW_AT_SERVER_RENDERING = 5;

function ptInSect(x, a, b) {
  return (x - a) * (x - b) <= 0;
}

function ptInRect(pt, rect) {
  return ptInSect(pt.lat, rect.get(0), rect.get(2)) && ptInSect(pt.lng, rect.get(1), rect.get(3));
}

// use rbush https://github.com/mourner/rbush if you have really big amount of points
function calcFilteredAndSortedMarkers(data, mapInfo) {
  const marginBounds = mapInfo && mapInfo.get('marginBounds');

  if (!data || !marginBounds) {
    return new List();
  }

  return data
    .filter(m => ptInRect(m, marginBounds));
}

function defaultMapState() {
  return immutable.fromJS({
    data: [],
    dataFiltered: [],

    mapInfo: {
      center: [-37.851221000000002, 144.72653700000001],
      // set for server rendering for popular screen res
      bounds: [60.325132160343145, 29.13415407031249, 59.546382183279206, 31.54015992968749],
      marginBounds: [-36.2843135300829, 143.21655153124999, -38.58811868963835, 145.45776246874999],
      zoom: 10
    },

    openBalloonIndex: -1,

    hoverMarkerIndex: -1,

    tableRowsInfo: {
      hoveredRowIndex: -1,
      visibleRowFirst: 0,
      visibleRowLast: K_LAST_VISIBLE_ROW_AT_SERVER_RENDERING,
      maxVisibleRows: K_LAST_VISIBLE_ROW_AT_SERVER_RENDERING
    },
    clubs: [],
    isFetching: true,
    selectedMarker: null,
    filteredClubs: [],
    isSearchingClubs: false,
    map: null,
    hoveredClub: null
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

function getActualLocation(map){
  var infoWindow = new google.maps.InfoWindow;
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
      return pos;
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}


const ClubsReducer = (state = defaultMapState(), action) => {
  switch(action.type) {
    case LOAD_CLUB_SUCCESS:
      return state.set('data', action.clubs.clubs).set('dataFiltered', action.clubs.clubs)
                  .set('isFetching', false)

    case REQUEST_SEARCH_COURSE:
      return state.set('isFetching', true)

    case SELECT_CLUB:
      return state.set('selectedMarker', action.club)

    case SELECT_CLUB_BY_ID:
      return state.set('selectedMarker', action.club).set('isFetching', false).mergeDeep({mapInfo: {zoom: 13}});

    case REQUEST_SEARCH_CLUB:
      return state.set('isSearchingClubs', true)

    case SEARCH_CLUB_SUCCESS:
      return state.set('isSearchingClubs', false)
            .set('filteredClubs', action.clubs.clubs)
            .set('dataFiltered', action.clubs.clubs)
            .mergeDeep({mapInfo: {center: [parseFloat(action.clubs.center.lat), parseFloat(action.clubs.center.lng)], zoom: 13}})

    case SET_MAP:
      return state.set('map', action.map)

    case REQUEST_FETCHER:
      return state.set('isFetching', true)

    case CANCEL_FETCHING:
      return state.set('isFetching', false).set('selectedMarker', null)

    case GET_LOCATION:
      var location = getActualLocation(state.get('map').map_)
      return state.set("currentLocation", location)

    case HOVERED_CLUB_SELECTED:
      return state.set('hoveredClub', action.club)
             .mergeDeep({mapInfo: {center: [parseFloat(action.club.lat), parseFloat(action.club.lng)]}})

    case HOVER_OUT:
      return state.set('hoveredClub', null)
    default:
      return state;
  }
}

export default ClubsReducer;