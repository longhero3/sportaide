class CourseApi{
  static getAllCourses(){
    return fetch('/courses.json').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static searchCourses(keywords){
    return fetch('/courses/search_courses.json?text=' + keywords).then(response => {
      return response.json();
    }).catch(error => {
    return error;
    });
  }
}

export default CourseApi;