class CourseApi{
  static getAllCourses(){
    return fetch('/courses.json').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default CourseApi;