class ClubApi{
  static getAllClubs(){
    return fetch('/clubs.json').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static searchClubs(keywords){
    return fetch('/clubs/search_clubs.json?text=' + keywords).then(response => {
      return response.json();
  }).catch(error => {
    return error;
  });
  }

  static getClub(id){
    return fetch(`/clubs/${id}.json`).then(response => {
      return response.json();
  }).catch(error => {
    return error;
  });
  }
}

export default ClubApi;