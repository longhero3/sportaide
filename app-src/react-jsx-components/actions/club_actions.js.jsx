import fetch from 'isomorphic-fetch'

const LOAD_CLUB_SUCCESS = 'LOAD_CLUB_SUCCESS'
const REQUEST_LOAD_CLUB = 'REQUEST_LOAD_CLUB'


export function loadClubsSuccess(clubs) {
  return {type: LOAD_CLUB_SUCCESS, clubs};
}


export function requestLoadClub() {
  return {type: REQUEST_LOAD_CLUB}
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