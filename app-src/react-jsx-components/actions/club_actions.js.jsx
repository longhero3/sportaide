import fetch from 'isomorphic-fetch'

const LOAD_CLUB_SUCCESS = 'LOAD_CLUB_SUCCESS'
const REQUEST_LOAD_CLUB = 'REQUEST_LOAD_CLUB'
const REQUEST_SEARCH_CLUB = 'REQUEST_SEARCH_CLUB'
const SEARCH_CLUB_SUCCESS = 'SEARCH_CLUB_SUCCESS'
const SELECT_CLUB = 'SELECT_CLUB'
const SELECT_CLUB_BY_ID = 'SELECT_CLUB_BY_ID'
const SET_MAP = 'SET_MAP'
const REQUEST_FETCHER = "REQUEST_FETCHER"
const GET_LOCATION = "GET_LOCATION"
const CANCEL_FETCHING= "CANCEL_FETCHING"
const HOVERED_CLUB_SELECTED = "HOVERED_CLUB_SELECTED"
const HOVER_OUT = "HOVER_OUT"

export function loadClubsSuccess(clubs) {
  return {type: LOAD_CLUB_SUCCESS, clubs};
}


export function requestLoadClub() {
  return {type: REQUEST_LOAD_CLUB}
}

export function setHoveredClub(club){
  return {type: HOVERED_CLUB_SELECTED, club}
}

export function setHoverOut(){
  return {type: HOVER_OUT}
}

export function cancelFetching(){
  return {type: CANCEL_FETCHING}
}

export function requestSearchClub() {
  return {type: REQUEST_SEARCH_CLUB}
}

export function searchClubSuccess(clubs){
  return {type: SEARCH_CLUB_SUCCESS, clubs}
}

export function selectClub(club) {
  return {type: SELECT_CLUB, club}
}

export function selectClubByID(club) {
  return {type: SELECT_CLUB_BY_ID, club}
}

export function setMap(map) {
  return {type: SET_MAP, map}
}

export function requestFetcher(){
  return {type: REQUEST_FETCHER}
}

export function getLocation(){
  return {type: GET_LOCATION}
}

export function loadClubs() {
  return function(dispatch) {
    return ClubApi.getAllClubs().then(clubs => {
      dispatch(loadClubsSuccess(clubs));
  }).catch(error => {
    throw(error);
});
};
}

export function searchClubs(term) {
  return function(dispatch) {
    return ClubApi.searchClubs(term).then(clubs => {
      dispatch(searchClubSuccess(clubs));
  }).catch(error => {
    throw(error);
});
};
}

export function getClub(id) {
  return function(dispatch) {
    return ClubApi.getClub(id).then(club => {
      dispatch(selectClubByID(club));
  }).catch(error => {
    throw(error);
});
};
}