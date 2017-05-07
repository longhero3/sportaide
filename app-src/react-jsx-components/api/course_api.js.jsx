
const requestOptions = {
  credentials: 'same-origin'
}

class CourseApi{
  static getAllCourses(){
    return fetch('/courses.json', requestOptions).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static searchCourses(keywords){
    return fetch('/courses/search_courses.json?text=' + keywords, requestOptions).then(response => {
      return response.json();
    }).catch(error => {
    return error;
    });
  }

  static getCourseById(courseId){
    return fetch(`/courses/${courseId}.json`, requestOptions).then(response => {
      return response.json();
  }).catch(error => {
    return error;
  });
  }

  static getTopViewedCourses(keywords){
    return fetch('/courses/top_viewed_courses.json', requestOptions).then(response => {
      return response.json();
  }).catch(error => {
    return error;
  });
  }

  static trackProgress(lessonId){
    return fetch(`/lessons/track_user_lesson.json?lesson_id=${lessonId}`, requestOptions).then(response => {
      return response.json();
  }).catch(error => {
    return error;
  });
  }
}

export default CourseApi;