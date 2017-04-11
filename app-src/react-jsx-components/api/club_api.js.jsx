class ClubApi{
  static getAllClubs(){
    return fetch('/clubs.json').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default ClubApi;