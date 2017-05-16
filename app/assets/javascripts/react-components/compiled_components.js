'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var requestOptions = {
  credentials: 'same-origin'
};

var CourseApi = function () {
  function CourseApi() {
    _classCallCheck(this, CourseApi);
  }

  _createClass(CourseApi, null, [{
    key: 'getAllCourses',
    value: function getAllCourses() {
      return fetch('/courses.json', requestOptions).then(function (response) {
        return response.json();
      }).catch(function (error) {
        return error;
      });
    }
  }, {
    key: 'searchCourses',
    value: function searchCourses(keywords) {
      return fetch('/courses/search_courses.json?text=' + keywords, requestOptions).then(function (response) {
        return response.json();
      }).catch(function (error) {
        return error;
      });
    }
  }, {
    key: 'getCourseById',
    value: function getCourseById(courseId) {
      return fetch('/courses/' + courseId + '.json', requestOptions).then(function (response) {
        return response.json();
      }).catch(function (error) {
        return error;
      });
    }
  }, {
    key: 'getTopViewedCourses',
    value: function getTopViewedCourses(keywords) {
      return fetch('/courses/top_viewed_courses.json', requestOptions).then(function (response) {
        return response.json();
      }).catch(function (error) {
        return error;
      });
    }
  }, {
    key: 'trackProgress',
    value: function trackProgress(lessonId) {
      return fetch('/lessons/track_user_lesson.json?lesson_id=' + lessonId, requestOptions).then(function (response) {
        return response.json();
      }).catch(function (error) {
        return error;
      });
    }
  }]);

  return CourseApi;
}();

exports.default = CourseApi;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClubApi = function () {
  function ClubApi() {
    _classCallCheck(this, ClubApi);
  }

  _createClass(ClubApi, null, [{
    key: 'getAllClubs',
    value: function getAllClubs() {
      return fetch('/clubs.json').then(function (response) {
        return response.json();
      }).catch(function (error) {
        return error;
      });
    }
  }, {
    key: 'searchClubs',
    value: function searchClubs(keywords) {
      return fetch('/clubs/search_clubs.json?text=' + keywords).then(function (response) {
        return response.json();
      }).catch(function (error) {
        return error;
      });
    }
  }, {
    key: 'getClub',
    value: function getClub(id) {
      return fetch('/clubs/' + id + '.json').then(function (response) {
        return response.json();
      }).catch(function (error) {
        return error;
      });
    }
  }]);

  return ClubApi;
}();

exports.default = ClubApi;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WeatherApi = function () {
  function WeatherApi() {
    _classCallCheck(this, WeatherApi);
  }

  _createClass(WeatherApi, null, [{
    key: 'getWeatherInfo',
    value: function getWeatherInfo() {
      return fetch('/weather.json').then(function (response) {
        return response.json();
      }).catch(function (error) {
        return error;
      });
    }
  }, {
    key: 'getWeatherDetailsInfo',
    value: function getWeatherDetailsInfo() {
      return fetch('/weather/details_weather.json').then(function (response) {
        return response.json();
      }).catch(function (error) {
        return error;
      });
    }
  }, {
    key: 'searchWeather',
    value: function searchWeather(location) {
      return fetch('/weather/search_weather.json?location=' + location).then(function (response) {
        return response.json();
      }).catch(function (error) {
        return error;
      });
    }
  }]);

  return WeatherApi;
}();

exports.default = WeatherApi;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ToggleMenu = exports.ToggleMenu = function ToggleMenu() {
  return {
    type: 'TOGGLE_MENU'
  };
};

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestCourse = requestCourse;
exports.receiveCourse = receiveCourse;
exports.selectLesson = selectLesson;
exports.nextLesson = nextLesson;
exports.loadCourse = loadCourse;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RECEIVE_COURSE_SUCCESS = 'RECEIVE_COURSE_SUCCESS';
var REQUEST_COURSE = 'REQUEST_COURSE';
var SELECT_LESSON = 'SELECT_LESSON';
var NEXT_LESSON = 'NEXT_LESSON';

function requestCourse(course) {
  return { type: LOAD_COURSES_SUCCESS, course: course };
}

function receiveCourse(course) {
  return { type: RECEIVE_COURSE_SUCCESS, course: course };
}

function selectLesson(lesson, chapterIndex, lessonIndex) {
  return { type: SELECT_LESSON, lesson: lesson, chapterIndex: chapterIndex, lessonIndex: lessonIndex };
}

function nextLesson() {
  return { type: NEXT_LESSON };
}

function loadCourse(courseID) {
  return function (dispatch) {
    return CourseApi.getCourseById(courseID).then(function (course) {
      dispatch(receiveCourse(course));
    }).catch(function (error) {
      throw error;
    });
  };
}

;'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadCoursesSuccess = loadCoursesSuccess;
exports.searchCoursesSuccess = searchCoursesSuccess;
exports.requestSearchCourses = requestSearchCourses;
exports.loadCourses = loadCourses;
exports.searchCourses = searchCourses;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';
var SEARCH_COURSES_SUCCESS = 'SEARCH_COURSES_SUCCESS';
var REQUEST_SEARCH_COURSE = 'REQUEST_SEARCH_COURSE';

function loadCoursesSuccess(courses) {
  return { type: LOAD_COURSES_SUCCESS, courses: courses };
}

function searchCoursesSuccess(courses) {
  return { type: SEARCH_COURSES_SUCCESS, courses: courses };
}

function requestSearchCourses() {
  return { type: REQUEST_SEARCH_COURSE };
}

function loadCourses() {
  return function (dispatch) {
    return CourseApi.getAllCourses().then(function (courses) {
      dispatch(loadCoursesSuccess(courses));
    }).catch(function (error) {
      throw error;
    });
  };
}

function searchCourses(keywords) {
  return function (dispatch) {
    return CourseApi.searchCourses(keywords).then(function (courses) {
      dispatch(searchCoursesSuccess(courses));
    }).catch(function (error) {
      throw error;
    });
  };
}

;'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadClubsSuccess = loadClubsSuccess;
exports.requestLoadClub = requestLoadClub;
exports.setHoveredClub = setHoveredClub;
exports.setHoverOut = setHoverOut;
exports.cancelFetching = cancelFetching;
exports.requestSearchClub = requestSearchClub;
exports.searchClubSuccess = searchClubSuccess;
exports.selectClub = selectClub;
exports.selectClubByID = selectClubByID;
exports.setMap = setMap;
exports.requestFetcher = requestFetcher;
exports.getLocation = getLocation;
exports.loadClubs = loadClubs;
exports.searchClubs = searchClubs;
exports.getClub = getClub;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOAD_CLUB_SUCCESS = 'LOAD_CLUB_SUCCESS';
var REQUEST_LOAD_CLUB = 'REQUEST_LOAD_CLUB';
var REQUEST_SEARCH_CLUB = 'REQUEST_SEARCH_CLUB';
var SEARCH_CLUB_SUCCESS = 'SEARCH_CLUB_SUCCESS';
var SELECT_CLUB = 'SELECT_CLUB';
var SELECT_CLUB_BY_ID = 'SELECT_CLUB_BY_ID';
var SET_MAP = 'SET_MAP';
var REQUEST_FETCHER = "REQUEST_FETCHER";
var GET_LOCATION = "GET_LOCATION";
var CANCEL_FETCHING = "CANCEL_FETCHING";
var HOVERED_CLUB_SELECTED = "HOVERED_CLUB_SELECTED";
var HOVER_OUT = "HOVER_OUT";

function loadClubsSuccess(clubs) {
  return { type: LOAD_CLUB_SUCCESS, clubs: clubs };
}

function requestLoadClub() {
  return { type: REQUEST_LOAD_CLUB };
}

function setHoveredClub(club) {
  return { type: HOVERED_CLUB_SELECTED, club: club };
}

function setHoverOut() {
  return { type: HOVER_OUT };
}

function cancelFetching() {
  return { type: CANCEL_FETCHING };
}

function requestSearchClub() {
  return { type: REQUEST_SEARCH_CLUB };
}

function searchClubSuccess(clubs) {
  return { type: SEARCH_CLUB_SUCCESS, clubs: clubs };
}

function selectClub(club) {
  return { type: SELECT_CLUB, club: club };
}

function selectClubByID(club) {
  return { type: SELECT_CLUB_BY_ID, club: club };
}

function setMap(map) {
  return { type: SET_MAP, map: map };
}

function requestFetcher() {
  return { type: REQUEST_FETCHER };
}

function getLocation() {
  return { type: GET_LOCATION };
}

function loadClubs() {
  return function (dispatch) {
    return ClubApi.getAllClubs().then(function (clubs) {
      dispatch(loadClubsSuccess(clubs));
    }).catch(function (error) {
      throw error;
    });
  };
}

function searchClubs(term) {
  return function (dispatch) {
    return ClubApi.searchClubs(term).then(function (clubs) {
      dispatch(searchClubSuccess(clubs));
    }).catch(function (error) {
      throw error;
    });
  };
}

function getClub(id) {
  return function (dispatch) {
    return ClubApi.getClub(id).then(function (club) {
      dispatch(selectClubByID(club));
    }).catch(function (error) {
      throw error;
    });
  };
}

;'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadWeatherSuccess = loadWeatherSuccess;
exports.loadWeatherFailure = loadWeatherFailure;
exports.loadWeatherInfo = loadWeatherInfo;
exports.loadWeatherOnLocation = loadWeatherOnLocation;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOAD_WEATHER_DATA_SUCCESS = 'LOAD_WEATHER_DATA_SUCCESS';
var LOAD_WEATHER_DATA_FAILURE = 'LOAD_WEATHER_DATA_FAILURE';

function loadWeatherSuccess(weather) {
  return { type: LOAD_WEATHER_DATA_SUCCESS, weather: weather };
}

function loadWeatherFailure() {
  return { type: LOAD_WEATHER_DATA_FAILURE };
}

function loadWeatherInfo() {
  return function (dispatch) {
    return WeatherApi.getWeatherInfo().then(function (weather) {
      dispatch(loadWeatherSuccess(weather));
    }).catch(function (error) {
      dispatch(loadWeatherFailure());
    });
  };
}

function loadWeatherOnLocation(location) {
  return function (dispatch) {
    return WeatherApi.searchWeather(location).then(function (weather) {
      dispatch(loadWeatherSuccess(weather));
    }).catch(function (error) {
      dispatch(loadWeatherFailure());
    });
  };
}

;'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadWeatherDetailsSuccess = loadWeatherDetailsSuccess;
exports.loadWeatherDetailsFailure = loadWeatherDetailsFailure;
exports.loadWeatherDetails = loadWeatherDetails;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOAD_WEATHER_DETAILS_SUCCESS = 'LOAD_WEATHER_DATA_SUCCESS';
var LOAD_WEATHER_DETAILS_FAILURE = 'LOAD_WEATHER_DATA_FAILURE';

function loadWeatherDetailsSuccess(weather) {
  return { type: LOAD_WEATHER_DETAILS_SUCCESS, weather: weather };
}

function loadWeatherDetailsFailure() {
  return { type: LOAD_WEATHER_DETAILS_FAILURE };
}

function loadWeatherDetails() {
  return function (dispatch) {
    return WeatherApi.getWeatherDetailsInfo().then(function (weather) {
      dispatch(loadWeatherDetailsSuccess(weather));
    }).catch(function (error) {
      dispatch(loadWeatherDetailsFailure());
    });
  };
}

;'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadProgressSuccess = loadProgressSuccess;
exports.loadProgress = loadProgress;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOAD_PROGRESS_SUCCESS = 'LOAD_PROGRESS_SUCCESS';

function loadProgressSuccess(courses) {
  return { type: LOAD_PROGRESS_SUCCESS, courses: courses };
}

function loadProgress() {
  return function (dispatch) {
    return CourseApi.getTopViewedCourses().then(function (courses) {
      dispatch(loadProgressSuccess(courses));
    }).catch(function (error) {
      throw error;
    });
  };
}

;'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CourseBlock = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var CourseBlock = exports.CourseBlock = function (_React$Component) {
  _inherits(CourseBlock, _React$Component);

  function CourseBlock(props) {
    _classCallCheck(this, CourseBlock);

    var _this = _possibleConstructorReturn(this, (CourseBlock.__proto__ || Object.getPrototypeOf(CourseBlock)).call(this, props));

    _this.state = {
      course: props.course
    };
    return _this;
  }

  _createClass(CourseBlock, [{
    key: 'goToCoursePage',
    value: function goToCoursePage() {
      _reactRouter.browserHistory.push('/dashboard/lessons/' + this.state.course.id);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'course-block', onClick: this.goToCoursePage.bind(this) },
        React.createElement(
          'div',
          { className: 'offering-content' },
          React.createElement(
            'div',
            null,
            React.createElement('img', { src: this.state.course.thumbnail, className: 'offering-image', width: '100', height: '100' })
          ),
          React.createElement(
            'div',
            { className: 'offering-info' },
            React.createElement(
              'div',
              { className: 'course-offering-name' },
              React.createElement(
                'h2',
                null,
                this.state.course.name
              )
            ),
            React.createElement(
              'div',
              { className: 'course-offering-author' },
              React.createElement(
                'span',
                null,
                this.state.course.author
              )
            )
          )
        )
      );
    }
  }]);

  return CourseBlock;
}(React.Component);

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LessonsView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LessonsView = exports.LessonsView = function (_React$Component) {
  _inherits(LessonsView, _React$Component);

  function LessonsView() {
    _classCallCheck(this, LessonsView);

    return _possibleConstructorReturn(this, (LessonsView.__proto__ || Object.getPrototypeOf(LessonsView)).apply(this, arguments));
  }

  _createClass(LessonsView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      if (this.props.params.keywords) {
        store.dispatch(searchCourses(this.props.params.keywords));
      } else {
        store.dispatch(loadCourses());
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var courseContent = null;
      if (this.props.isFetching == true) {
        courseContent = _react2.default.createElement(
          'div',
          { className: 'ui course-list' },
          _react2.default.createElement(
            'div',
            { className: 'ui active centered inline text loader' },
            'Looking for courses ...'
          )
        );
      } else {
        var searchDiv = _react2.default.createElement('div', null);
        if (this.props.isSearch == true) {
          searchDiv = _react2.default.createElement(
            'div',
            { className: 'search-message' },
            'You searched for ',
            _react2.default.createElement(
              'b',
              null,
              this.props.keywords
            ),
            '. ',
            this.props.resultsFound,
            ' matches'
          );
        }
        courseContent = _react2.default.createElement(
          'div',
          { className: 'ui course-list' },
          searchDiv,
          this.props.courses.map(function (course) {
            return _react2.default.createElement(CourseBlock, { key: course.id, course: course });
          })
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(NavBar, null),
        _react2.default.createElement(
          'div',
          { className: 'ui container courses-container' },
          _react2.default.createElement(
            'div',
            { className: 'ui stackable grid' },
            _react2.default.createElement(
              'div',
              { className: 'sixteen wide column' },
              courseContent
            )
          )
        ),
        _react2.default.createElement(Footer, null)
      );
    }
  }]);

  return LessonsView;
}(_react2.default.Component);

LessonsView.propTypes = {
  courses: _react.PropTypes.array.isRequired,
  dispatch: _react.PropTypes.func.isRequired,
  isFetching: _react.PropTypes.bool.isRequired,
  keywords: _react.PropTypes.string.isRequired,
  resultsFound: _react.PropTypes.number.isRequired
};

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var mapStateToProps = function mapStateToProps(state) {
  return {
    courses: state.CoursesReducer.courses,
    isFetching: state.CoursesReducer.isFetching,
    isSearch: state.CoursesReducer.isSearch,
    keywords: state.CoursesReducer.keywords,
    resultsFound: state.CoursesReducer.resultsFound
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLoad: function onLoad() {
      dispatch(loadCourses());
    }
  };
};

var VisibleLessonsView = (0, _reactRedux.connect)(mapStateToProps)(LessonsView);
exports.default = VisibleLessonsView;

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var NewsfeedsView = exports.NewsfeedsView = function (_React$Component) {
  _inherits(NewsfeedsView, _React$Component);

  function NewsfeedsView(props) {
    _classCallCheck(this, NewsfeedsView);

    var _this = _possibleConstructorReturn(this, (NewsfeedsView.__proto__ || Object.getPrototypeOf(NewsfeedsView)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(NewsfeedsView, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(NavBar, null),
        React.createElement(
          "div",
          { className: "ui container" },
          React.createElement("div", { className: "ui grid" })
        ),
        React.createElement(
          "h1",
          null,
          " This is the Newsfeed View"
        ),
        React.createElement(Footer, null)
      );
    }
  }]);

  return NewsfeedsView;
}(React.Component);

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CourseNav = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CourseNav = exports.CourseNav = function (_React$Component) {
  _inherits(CourseNav, _React$Component);

  function CourseNav() {
    _classCallCheck(this, CourseNav);

    return _possibleConstructorReturn(this, (CourseNav.__proto__ || Object.getPrototypeOf(CourseNav)).apply(this, arguments));
  }

  _createClass(CourseNav, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prev, next) {
      $('.accordion').accordion({
        animateChildren: false,
        closeNested: false
      });
    }
  }, {
    key: 'activeClassName',
    value: function activeClassName(chapterIndex, lessonIndex) {
      var tempClass = "";
      if (chapterIndex == this.props.chapterIndex && lessonIndex == this.props.lessonIndex) {
        tempClass = " active";
      }
      return tempClass;
    }
  }, {
    key: 'markedLesson',
    value: function markedLesson(lesson) {
      if (lesson.completed == true) {
        return _react2.default.createElement('i', { className: 'checkmark icon green float-right' });
      } else {
        return _react2.default.createElement('div', null);
      }
    }
  }, {
    key: 'chapterAccordion',
    value: function chapterAccordion(chapter) {
      return _react2.default.createElement(
        'div',
        { className: 'title active', key: "chapter_" + chapter.id },
        _react2.default.createElement('i', { className: 'dropdown icon' }),
        chapter.title
      );
    }
  }, {
    key: 'lessonsAccordion',
    value: function lessonsAccordion(chapter, chapterIndex) {
      return _react2.default.createElement(
        'div',
        { className: 'content active' },
        _react2.default.createElement(
          'div',
          { className: 'accordion' },
          chapter.lessons.map(function (lesson, index) {
            return _react2.default.createElement(
              'div',
              { className: "title" + this.activeClassName(chapterIndex, index), key: "lesson_" + index, onClick: function onClick() {
                  return store.dispatch(selectLesson(lesson, chapterIndex, index));
                } },
              lesson.title,
              this.markedLesson(lesson)
            );
          }.bind(this))
        )
      );
    }
  }, {
    key: 'activeChapterAccordion',
    value: function activeChapterAccordion(chapter) {
      return _react2.default.createElement(
        'div',
        { className: 'title active', key: "chapter_" + chapter.id },
        _react2.default.createElement('i', { className: 'dropdown icon' }),
        chapter.title
      );
    }
  }, {
    key: 'activeLessonsAccordion',
    value: function activeLessonsAccordion(chapter, chapterIndex) {
      return _react2.default.createElement(
        'div',
        { className: 'content active' },
        _react2.default.createElement(
          'div',
          { className: 'accordion transition visible', style: { display: "block !important" } },
          chapter.lessons.map(function (lesson, index) {
            return _react2.default.createElement(
              'div',
              { className: "title" + this.activeClassName(chapterIndex, index), key: "lesson_" + index, onClick: function onClick() {
                  return store.dispatch(selectLesson(lesson, chapterIndex, index));
                } },
              lesson.title,
              this.markedLesson(lesson)
            );
          }.bind(this))
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isFetching == true) {
        return _react2.default.createElement(
          'div',
          { className: 'chapter-navigation' },
          _react2.default.createElement('div', { className: 'ui active centered inline loader' })
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'chapter-navigation' },
          _react2.default.createElement(
            'div',
            { className: 'chapter-wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'chapter-content' },
              _react2.default.createElement(
                'div',
                { className: 'ui styled accordion' },
                this.props.course.chapters.map(function (chapter, index) {
                  var tempChapter = null;
                  var tempLesson = null;
                  if (index == 0) {
                    tempChapter = this.activeChapterAccordion(chapter);
                    tempLesson = this.activeLessonsAccordion(chapter, index);
                  } else {
                    tempChapter = this.chapterAccordion(chapter);
                    tempLesson = this.lessonsAccordion(chapter, index);
                  }
                  return [tempChapter, tempLesson];
                }.bind(this))
              )
            )
          )
        );
      }
    }
  }]);

  return CourseNav;
}(_react2.default.Component);

CourseNav.propsTypes = {
  course: _react.PropTypes.object.isRequired,
  isFetching: _react.PropTypes.bool.isRequired,
  chapterIndex: _react.PropTypes.any,
  lessonIndex: _react.PropTypes.any
};

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var mapCourseNavState = function mapCourseNavState(state) {
  return {
    course: state.CourseDetailsReducer.course,
    isFetching: state.CourseDetailsReducer.isFetching,
    chapterIndex: state.CourseDetailsReducer.chapterIndex,
    lessonIndex: state.CourseDetailsReducer.lessonIndex
  };
};

var VisibleCourseNav = (0, _reactRedux.connect)(mapCourseNavState)(CourseNav);

exports.default = VisibleCourseNav;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CourseTabs = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CourseTabs = exports.CourseTabs = function (_React$Component) {
  _inherits(CourseTabs, _React$Component);

  //  componentDidMount(){
  //    $('.tab-menu .item').tab()
  //  }

  function CourseTabs(props) {
    _classCallCheck(this, CourseTabs);

    var _this = _possibleConstructorReturn(this, (CourseTabs.__proto__ || Object.getPrototypeOf(CourseTabs)).call(this, props));

    _this.state = {
      binded: false
    };
    return _this;
  }

  _createClass(CourseTabs, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prev, next) {
      $('.tab-menu .item').tab();
      if (this.state.binded == false) {
        this.state.binded = true;
        $(".not").on("click", function () {
          var a, b, c, d, e, f, g, h, i, j, k;
          d = $(this).attr("data-size");
          e = $(this).attr("data-message");
          c = $(this).attr("data-type");
          f = $(this).attr("data-icon");
          g = $(this).attr("data-title");
          h = $(this).attr("data-image");
          i = $(this).attr("data-sound");
          a = $(this).attr("data-show-animation");
          b = $(this).attr("data-hide-animation");
          j = $(this).attr("data-position");
          k = $(this).attr("data-delay");
          Lobibox.notify(c, {
            size: d,
            rounded: false,
            delayIndicator: true,
            msg: e,
            icon: f,
            title: g,
            showClass: a,
            hideClass: b,
            sound: i,
            img: h,
            delay: 1500
          });
        });
      }
    }
  }, {
    key: 'createMarkup',
    value: function createMarkup(content) {
      return { __html: content };
    }
  }, {
    key: 'createQuizMarkup',
    value: function createQuizMarkup() {
      if (this.props.lesson.quiz) {
        return { __html: '' + this.props.lesson.quiz.content };
      } else {
        return { __html: '<p>There is no quiz for this lesson.</p>' };
      }
    }
  }, {
    key: 'nextLesson',
    value: function (_nextLesson) {
      function nextLesson() {
        return _nextLesson.apply(this, arguments);
      }

      nextLesson.toString = function () {
        return _nextLesson.toString();
      };

      return nextLesson;
    }(function () {
      store.dispatch(nextLesson());
      $('html,body').animate({ scrollTop: 0 }, 400);
    })
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isFetching == true) {
        return _react2.default.createElement(
          'div',
          { className: 'ui segment' },
          _react2.default.createElement('div', { className: 'ui active centered inline loader' })
        );
      } else {

        if (this.props.lesson.lesson_type == "normal") {
          return _react2.default.createElement(
            'div',
            { className: 'ui segment' },
            _react2.default.createElement(
              'div',
              { className: 'ui pointing secondary menu tab-menu' },
              _react2.default.createElement(
                'a',
                { className: 'item active', 'data-tab': 'first' },
                'Content'
              ),
              _react2.default.createElement(
                'a',
                { className: 'item', 'data-tab': 'third' },
                'Overview'
              ),
              _react2.default.createElement(
                'a',
                { className: 'item', 'data-tab': 'fourth' },
                'Quiz'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'ui tab active', 'data-tab': 'first' },
              _react2.default.createElement(
                'div',
                { className: 'ui one column stackable grid segment' },
                _react2.default.createElement(
                  'div',
                  { className: 'fluid column' },
                  _react2.default.createElement('iframe', { className: 'video-iframe', src: this.props.lesson.preferred_url, frameBorder: '0', allowFullScreen: 'allowfullscreen' })
                )
              ),
              _react2.default.createElement('div', { className: 'transcript-content', dangerouslySetInnerHTML: this.createMarkup(this.props.lesson.transcript) }),
              _react2.default.createElement(
                'button',
                { className: 'ui right labeled icon green button not next-lesson-btn', 'data-animation': true, 'data-type': 'success', 'data-title': 'Hoorays!', 'data-size': 'normal', 'data-message': 'Moving to the next lesson', onClick: this.nextLesson.bind(this) },
                'Next Lesson',
                _react2.default.createElement('i', { className: 'right chevron icon' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'ui tab', 'data-tab': 'second' },
              _react2.default.createElement(
                'div',
                { className: 'ui one column stackable grid' },
                _react2.default.createElement(
                  'div',
                  { className: 'fluid column' },
                  _react2.default.createElement('iframe', { className: 'video-iframe', src: this.props.lesson.preferred_url, frameborder: '0', allowfullscreen: 'allowfullscreen' })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'ui tab', 'data-tab': 'third' },
              _react2.default.createElement(
                'div',
                { className: 'overview-content' },
                _react2.default.createElement(
                  'div',
                  { className: 'ui three column stackable grid' },
                  _react2.default.createElement(
                    'div',
                    { className: 'three wide column' },
                    _react2.default.createElement(
                      'div',
                      { className: 'author-thumb' },
                      _react2.default.createElement(
                        'h5',
                        null,
                        'Author'
                      ),
                      _react2.default.createElement(
                        'a',
                        { href: '' },
                        _react2.default.createElement('img', { src: this.props.course.author_image, alt: 'Image and video hosting by TinyPic' }),
                        _react2.default.createElement(
                          'cite',
                          { className: 'author-name' },
                          this.props.course.author
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'ten wide column course-description' },
                    _react2.default.createElement(
                      'h6',
                      null,
                      ' Released'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'release-date' },
                      this.props.course.release_date
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'overview-description' },
                      this.props.course.overview
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'three wide column' },
                    _react2.default.createElement(
                      'div',
                      { className: 'course-info-stat-cont duration' },
                      _react2.default.createElement(
                        'span',
                        { className: 'course-info-stat' },
                        this.props.course.duration + "m"
                      ),
                      _react2.default.createElement(
                        'h6',
                        null,
                        'Duration'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'course-info-stat-cont viewers' },
                      _react2.default.createElement(
                        'span',
                        { className: 'course-info-stat' },
                        this.props.course.view
                      ),
                      _react2.default.createElement(
                        'h6',
                        null,
                        'Views'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'ui tab', 'data-tab': 'fourth' },
              _react2.default.createElement('div', { dangerouslySetInnerHTML: this.createQuizMarkup() })
            )
          );
        } else {
          return _react2.default.createElement(
            'div',
            { className: 'ui segment' },
            _react2.default.createElement(
              'div',
              { className: 'ui pointing secondary menu tab-menu' },
              _react2.default.createElement(
                'a',
                { className: 'item active', 'data-tab': 'fourth' },
                'Quiz'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'ui tab active', 'data-tab': 'fourth' },
              _react2.default.createElement(
                'button',
                { className: 'ui right labeled icon green button not next-lesson-btn', 'data-animation': true, 'data-type': 'success', 'data-title': 'Hoorays!', 'data-size': 'normal', 'data-message': 'Moving to the next lesson', onClick: this.nextLesson.bind(this) },
                'Next Lesson',
                _react2.default.createElement('i', { className: 'right chevron icon' })
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement('div', { dangerouslySetInnerHTML: this.createQuizMarkup() })
            )
          );
        }
      }
    }
  }]);

  return CourseTabs;
}(_react2.default.Component);

CourseTabs.propTypes = {
  course: _react.PropTypes.object.isRequired,
  lesson: _react.PropTypes.object.isRequired,
  isFetching: _react.PropTypes.bool.isRequired
};

'use strict';

var _reactRedux = require('react-redux');

var mapCourseTabsState = function mapCourseTabsState(state) {
  return {
    course: state.CourseDetailsReducer.course,
    lesson: state.CourseDetailsReducer.currentLesson,
    isFetching: state.CourseDetailsReducer.isFetching
  };
};

var VisibleCourseTabs = (0, _reactRedux.connect)(mapCourseTabsState)(CourseTabs);

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CourseView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CourseView = exports.CourseView = function (_React$Component) {
  _inherits(CourseView, _React$Component);

  function CourseView() {
    _classCallCheck(this, CourseView);

    return _possibleConstructorReturn(this, (CourseView.__proto__ || Object.getPrototypeOf(CourseView)).apply(this, arguments));
  }

  _createClass(CourseView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.params.course_id) {
        store.dispatch(loadCourse(this.props.params.course_id));
      }
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(NavBar, null),
        _react2.default.createElement(
          'div',
          { className: 'course-title-banner' },
          _react2.default.createElement(
            'div',
            { className: 'ui container' },
            _react2.default.createElement(
              'div',
              { className: 'ui two column stackable grid' },
              _react2.default.createElement(
                'div',
                { className: 'ten wide column' },
                _react2.default.createElement(
                  'div',
                  { className: 'ui breadcrumb' },
                  _react2.default.createElement(
                    'a',
                    { href: '/', className: 'section' },
                    'Home'
                  ),
                  _react2.default.createElement('i', { className: 'right angle icon divider' }),
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/dashboard/lessons', className: 'section' },
                    'Lessons'
                  ),
                  _react2.default.createElement('i', { className: 'right angle icon divider' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'active section' },
                    this.props.course.name
                  )
                ),
                _react2.default.createElement(
                  'h1',
                  { className: 'default-title' },
                  ' ',
                  this.props.course.name
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'ui container course-container' },
          _react2.default.createElement(
            'div',
            { className: 'ui two column stackable grid' },
            _react2.default.createElement(
              'div',
              { className: 'five wide column' },
              _react2.default.createElement(VisibleCourseNav, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'eleven wide column' },
              _react2.default.createElement(VisibleCourseTabs, null)
            )
          )
        ),
        _react2.default.createElement(Footer, null)
      );
    }
  }]);

  return CourseView;
}(_react2.default.Component);

CourseView.propTypes = {
  course: _react.PropTypes.object.isRequired,
  isFetching: _react.PropTypes.bool.isRequired
};

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var mapCourseState = function mapCourseState(state) {
  return {
    course: state.CourseDetailsReducer.course,
    isFetching: state.CourseDetailsReducer.isFetching
  };
};

var VisibleCourseView = (0, _reactRedux.connect)(mapCourseState)(CourseView);

exports.default = VisibleCourseView;

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _googleMapReact = require('google-map-react');

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnyReactComponent = function AnyReactComponent(_ref) {
  var text = _ref.text;
  return _react2.default.createElement(
    'div',
    null,
    text
  );
};

var ClubMap = function (_React$Component) {
  _inherits(ClubMap, _React$Component);

  function ClubMap(props) {
    _classCallCheck(this, ClubMap);

    var _this = _possibleConstructorReturn(this, (ClubMap.__proto__ || Object.getPrototypeOf(ClubMap)).call(this, props));

    _this.state = {
      center: { lat: -37.851221, lng: 144.726537 },
      zoom: 11,
      mapStyle: {
        height: (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - 20 + "px"
      },
      map: null,
      goldStar: {
        path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
        fillColor: 'yellow',
        fillOpacity: 0.8,
        scale: 1,
        strokeColor: 'gold',
        strokeWeight: 14
      }
    };
    return _this;
  }

  _createClass(ClubMap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.state.map = new google.maps.Map(document.getElementById('google-club-map'), {
        zoom: 11,
        center: this.state.center
      });
      store.dispatch(loadClubs());
      var marker = new google.maps.Marker({
        position: this.state.center,
        map: this.state.map
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prev, next) {
      var _this2 = this;

      this.props.markers.forEach(function (club) {
        var latLng = new google.maps.LatLng(club.lat, club.lng);
        var marker = new google.maps.Marker({
          position: latLng,
          animation: google.maps.Animation.DROP,
          map: _this2.state.map
        });
        var infoWindow = new google.maps.InfoWindow({
          content: club.description
        });

        marker.addListener('click', function () {
          infoWindow.open(this.state.map, marker);
        }.bind(_this2));

        return marker;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(NavBar, null),
        _react2.default.createElement(
          'div',
          { className: 'map-overlay ui stackable grid', style: this.state.mapStyle },
          _react2.default.createElement('div', { className: 'google-map twelve wide column', id: 'google-club-map' }),
          _react2.default.createElement(
            'div',
            { className: 'four wide column' },
            'Club inf section'
          )
        ),
        _react2.default.createElement(Footer, null)
      );
    }
  }]);

  return ClubMap;
}(_react2.default.Component);

ClubMap.propTypes = {
  onCenterChange: _react.PropTypes.func, // @controllable generated fn
  onZoomChange: _react.PropTypes.func, // @controllable generated fn
  onBoundsChange: _react.PropTypes.func,
  onMarkerHover: _react.PropTypes.func,
  onChildClick: _react.PropTypes.func,
  center: _react.PropTypes.any,
  zoom: _react.PropTypes.number,
  markers: _react.PropTypes.any,
  visibleRowFirst: _react.PropTypes.number,
  visibleRowLast: _react.PropTypes.number,
  maxVisibleRows: _react.PropTypes.number,
  hoveredRowIndex: _react.PropTypes.number,
  openBalloonIndex: _react.PropTypes.number,
  isFetching: _react.PropTypes.bool
};

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHintBaloonVerticalPosClass = getHintBaloonVerticalPosClass;
exports.getHintBaloonHorizontalPosStyle = getHintBaloonHorizontalPosStyle;
exports.getHintBottomOffsetClass = getHintBottomOffsetClass;
function getHintBaloonVerticalPosClass(y /*, mapHeight*/) {
  var K_MAX_BALLOON_HEIGHT = 240;
  return y > K_MAX_BALLOON_HEIGHT ? 'hint--top' : 'hint--bottom';
}

function getElementPosition(el) {
  // yay readability
  for (var lx = 0, ly = 0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent) {}
  return { x: lx, y: ly };
}

function getHintBaloonHorizontalPosStyle(x, markerWidth, markerOffset, mapWidth) {
  var K_BALLOON_WIDTH_BASE = 250;
  // offset from map side
  var K_BALLOON_MAP_OFFSET = 10;
  // balloon with not more than map width
  var K_BALLOON_WIDTH = Math.min(K_BALLOON_WIDTH_BASE, mapWidth - 2 * K_BALLOON_MAP_OFFSET);
  // default ballon offset from arrow center i want
  var K_BALLOON_DEFAULT_OFFSET = K_BALLOON_WIDTH * 0.15;
  // from corner
  var offset = -K_BALLOON_DEFAULT_OFFSET + markerWidth * 0.5;
  // overflow in px (marker assymetric)
  var leftX = x + offset - markerWidth * markerOffset;
  var rightX = leftX + K_BALLOON_WIDTH;
  // recalc if overflow
  var mapOffset = offset + Math.min(0, mapWidth - K_BALLOON_MAP_OFFSET - rightX) + Math.max(0, K_BALLOON_MAP_OFFSET - leftX);

  var K_BALLOON_WIDTH_STYLE = {
    width: K_BALLOON_WIDTH + 'px',
    left: mapOffset + 'px',
    marginLeft: '0px'
  };
  return K_BALLOON_WIDTH_STYLE;
}

function getHintBottomOffsetClass(markerWidth, markerOffset) {
  var K_HINT_ARROW_WIDTH = 12;
  var offset = Math.round(-(markerWidth / 2 + K_HINT_ARROW_WIDTH / 2 - markerOffset * markerWidth));
  // classes generated at sass/markers/map_marker.sass
  return 'map-marker--hint-bottom-delta-' + offset;
}

;"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScale = getScale;
exports.getRealFromTo = getRealFromTo;
// import {K_SCALE_NORMAL} from 'components/markers/map_marker.jsx';
// import invariant from 'fixed-data-table-ice/internal/invariant.js';

// {l: 10, scale: 0.3}, {l: 5, scale: 0.4} - означает
// 10 элементов размера 0.3, потом 5 размера 0.4, потом те что видны в табличке обычного размера
// потом снова потом 5 размера 0.4, и 10 элементов размера 0.3
// если поставить пусто то на карте будут видны тока те что на экране
var K_SCALE_SMALL = 0.3;
var K_SCALE_MEDIUM = 0.45;
var K_BEFORE_AFTER_SCALES = [{ l: 15, scale: K_SCALE_SMALL }, { l: 10, scale: K_SCALE_MEDIUM }];
var K_SCALES_SUM = K_BEFORE_AFTER_SCALES.reduce(function (sum, el) {
  return el.l + sum;
}, 0);

function getScale(rowIndex, rowFrom, rowTo, K_SCALE_NORMAL) {
  if (rowIndex >= rowFrom && rowIndex <= rowTo) {
    return K_SCALE_NORMAL;
  }

  if (K_BEFORE_AFTER_SCALES.length) {
    if (rowIndex < rowFrom) {
      var deltaS = rowFrom;
      for (var index = K_BEFORE_AFTER_SCALES.length - 1; index >= 0; --index) {
        deltaS -= K_BEFORE_AFTER_SCALES[index].l;
        if (rowIndex >= deltaS) {
          return K_BEFORE_AFTER_SCALES[index].scale;
        }
      }

      // yes, the code can be here (dirty calculus)
      return K_BEFORE_AFTER_SCALES[0].scale;
    }

    if (rowIndex > rowTo) {
      var _deltaS = rowTo;
      for (var _index = K_BEFORE_AFTER_SCALES.length - 1; _index >= 0; --_index) {
        _deltaS += K_BEFORE_AFTER_SCALES[_index].l;
        if (rowIndex <= _deltaS) {
          return K_BEFORE_AFTER_SCALES[_index].scale;
        }
      }

      // yes, the code can be here (dirty calculus)
      return K_BEFORE_AFTER_SCALES[0].scale;
    }
  }
  return K_SCALE_NORMAL;
}

// this calculations is not precise (dirty)
function _getRealFromTo(rowFrom, rowTo, maxVisibleRows, totalSize) {
  var addFrom = rowFrom + maxVisibleRows + K_SCALES_SUM > totalSize - 1 ? rowFrom + maxVisibleRows + K_SCALES_SUM - (totalSize - 1) : 0;

  var dadd = K_SCALES_SUM - rowFrom;
  var addTo = dadd >= 0 ? dadd : 0;

  return {
    rowFrom: Math.max(0, rowFrom - K_SCALES_SUM - addFrom),
    rowTo: Math.min(totalSize - 1, rowFrom + maxVisibleRows + K_SCALES_SUM + addTo)
  };
}

function getRealFromTo(rowFrom, rowTo, maxVisibleRows, totalSize) {
  var current = _getRealFromTo(rowFrom, rowTo, maxVisibleRows, totalSize);

  var result = {
    rowFrom: current.rowFrom,
    rowTo: current.rowTo
  };

  return result;
}

;"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customDistanceToMouse = customDistanceToMouse;
function customDistanceToMouse(pt, mousePos, markerProps) {
  var K_SCALE_NORMAL = 0.65;

  var K_MARKER_HEIGHT = 60;
  // marker is more tall at top, so calc distance to some point at marker top
  var K_MARKER_WEIGHT_PT = K_MARKER_HEIGHT * 0.7;
  // distance to markers depends on scale so hover on big markers is more probable
  var scale = markerProps.scale;
  var x = pt.x;
  var y = pt.y - K_MARKER_WEIGHT_PT * scale;

  var scaleNormalized = Math.min(scale / K_SCALE_NORMAL, 1);
  var K_MIN_DIST_MIN_KOEF = 0.6;

  var distKoef = 1 + scaleNormalized * (K_MIN_DIST_MIN_KOEF - 1);
  return distKoef * Math.sqrt((x - mousePos.x) * (x - mousePos.x) + (y - mousePos.y) * (y - mousePos.y));
}

;'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMarkerHolderStyle = getMarkerHolderStyle;
exports.getMarkerStyle = getMarkerStyle;
exports.getMarkerTextStyle = getMarkerTextStyle;
function getMarkerHolderStyle(size, origin) {
  var left = -size.width * origin.x;
  var top = -size.height * origin.y;
  return {
    position: 'absolute',
    width: size.width,
    height: size.height,
    left: left,
    top: top,
    cursor: 'pointer'
  };
}

function getMarkerStyle(size, origin) {
  var sizeOriginX = size.width * origin.x;
  var sizeOriginY = size.height * origin.y;

  return {
    position: 'absolute',
    width: size.width,
    height: size.height,
    left: 0,
    top: 0,
    willChange: 'transform', // it looks like this setting make firefox random marker movements smaller
    backgroundSize: size.width + 'px ' + size.height + 'px',
    backgroundRepeat: 'no-repeat',
    // transition: 'transform 0.25s ease',
    transition: 'transform 0.25s cubic-bezier(0.485, 1.650, 0.545, 0.835)',
    WebkitTransition: '-webkit-transform 0.25s cubic-bezier(0.485, 1.650, 0.545, 0.835)',
    transformOrigin: sizeOriginX + 'px ' + sizeOriginY + 'px',
    WebkitTransformOrigin: sizeOriginX + 'px ' + sizeOriginY + 'px'
  };
}

var textStyle_ = {
  width: '100%',
  textAlign: 'center',
  marginTop: 10,
  fontWeight: 'bold',
  fontSize: '18px',
  color: 'black'
};

function getMarkerTextStyle() {
  return textStyle_;
}

;'use strict';

/*
 * marker visual parameters
 * image param is more prior than imageClass if both defined
 */

var markerDescriptions = [{
  size: { width: 62, height: 60 },
  origin: { x: 15 / 62, y: 1 },
  withText: true,
  // image: require('icons/map_icons/map_icon_text_red.svg')
  imageClass: 'map_icon_text_red'
}, {
  size: { width: 62, height: 60 },
  origin: { x: 15 / 62, y: 1 },
  withText: true,
  // image: require('icons/map_icons/map_icon_text_indigo.svg')
  imageClass: 'map_icon_text_indigo'
}, {
  size: { width: 44, height: 62 },
  origin: { x: 0.37, y: 1 },
  imageClass: 'map-marker__marker--as'
}, {
  size: { width: 44, height: 62 },
  origin: { x: 0.37, y: 1 },
  imageClass: 'map-marker__marker--ap'
}, {
  size: { width: 61, height: 65 },
  origin: { x: 24 / 61, y: 63 / 65 },
  imageClass: 'map_icon_flag_orange',
  hintType: 'hint--error'
}, {
  size: { width: 49, height: 64 },
  origin: { x: 0.5, y: 1 },
  imageClass: 'map_icon_std'
}, {
  size: { width: 49, height: 64 },
  origin: { x: 0.5, y: 1 },
  imageClass: 'map_icon_std_orange'
}];

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactControllables = require('react-controllables');

var _reactControllables2 = _interopRequireDefault(_reactControllables);

var _function = require('react-pure-render/function');

var _function2 = _interopRequireDefault(_function);

var _component = require('react-pure-render/component');

var _component2 = _interopRequireDefault(_component);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Marker example
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var K_HINT_HTML_DEFAULT_Z_INDEX = 1000000;
var K_SCALE_HOVER = 1;
var K_SCALE_TABLE_HOVER = 1;
var K_SCALE_NORMAL = 0.65;
var K_MIN_CONTRAST = 0.4;

function calcMarkerMarkerStyle(scale, zIndexStyle, markerStyle, imageStyle) {
  var contrast = K_MIN_CONTRAST + (1 - K_MIN_CONTRAST) * Math.min(scale / K_SCALE_NORMAL, 1);

  return {
    transform: 'scale(' + scale + ' , ' + scale + ')',
    WebkitTransform: 'scale(' + scale + ' , ' + scale + ')',
    filter: 'contrast(' + contrast + ')',
    WebkitFilter: 'contrast(' + contrast + ')',
    markerStyle: markerStyle,
    zIndexStyle: zIndexStyle,
    imageStyle: imageStyle
  };
}

function calcMarkerTextStyle(scale, markerTextStyle) {
  var K_MAX_COLOR_VALUE = 0;
  var K_MIN_COLOR_VALUE = 8;
  var colorV = Math.ceil(K_MIN_COLOR_VALUE + (K_MAX_COLOR_VALUE - K_MIN_COLOR_VALUE) * Math.min(scale / K_SCALE_NORMAL, 1));
  var colorHex = colorV.toString(16);
  var colorHTML = '#' + colorHex + colorHex + colorHex;

  return {
    markerTextStyle: markerTextStyle,
    color: colorHTML
  };
}

var MapMarker = function (_PureComponent) {
  _inherits(MapMarker, _PureComponent);

  function MapMarker(props) {
    _classCallCheck(this, MapMarker);

    var _this = _possibleConstructorReturn(this, (MapMarker.__proto__ || Object.getPrototypeOf(MapMarker)).call(this, props));

    _this.alive = true;
    return _this;
  }

  _createClass(MapMarker, [{
    key: 'onShowBalloonStateChange',
    value: function onShowBalloonStateChange() {
      var _props;

      if (!this.alive) return;
      (_props = this.props).onShowBalloonStateChange.apply(_props, arguments);
    }
  }, {
    key: 'onHoverStateChange',
    value: function onHoverStateChange() {
      var _props2;

      if (!this.alive) return;
      (_props2 = this.props).onHoverStateChange.apply(_props2, arguments);
    }
  }, {
    key: 'onMouseEnterContent',
    value: function onMouseEnterContent() {
      //    this.props.onMouseAllow(false); // disable mouse move hovers
    }
  }, {
    key: 'onMouseLeaveContent',
    value: function onMouseLeaveContent() {
      //    this.props.onMouseAllow(true); // enable mouse move hovers
    }
  }, {
    key: 'onCloseClick',
    value: function onCloseClick() {
      if (this.props.onCloseClick) {
        this.props.onCloseClick();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // if (this.props.onCloseClick) {
      //   this.props.onCloseClick();
      // }
      this.alive = false;
    }
  }, {
    key: 'selectMarker',
    value: function selectMarker() {
      store.dispatch(requestFetcher());
      _reactRouter.browserHistory.push('/dashboard/clubs/club_map/' + this.props.marker.id);
    }

    // no optimizations at all

  }, {
    key: 'render',
    value: function render() {
      var selectedClass = "";
      if (this.props.isSelected == true) {
        selectedClass = "selected";
      }

      if (this.props.hoveredClub) {
        if (this.props.hoveredClub.id == this.props.marker.id) {
          selectedClass = "selected";
        }
      }

      return _react2.default.createElement(
        'div',
        { className: "marker-content " + selectedClass, 'data-hint': this.props.marker.name, onClick: this.selectMarker.bind(this) },
        _react2.default.createElement('i', { className: "map pin icon club-icon " + selectedClass })
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var K_TRANS_DELAY = 30;

      if (prevProps.$hover !== this.props.$hover) {
        setTimeout(function () {
          return _this2.onHoverStateChange(_this2.props.$hover);
        }, K_TRANS_DELAY);
      }

      if (prevProps.showBalloon !== this.props.showBalloon) {
        setTimeout(function () {
          return _this2.onShowBalloonStateChange(_this2.props.showBalloon);
        }, K_TRANS_DELAY);
      }
    }
  }]);

  return MapMarker;
}(_component2.default);

exports.default = MapMarker;


MapMarker = (0, _reactControllables2.default)(MapMarker, ['hoverState', 'showBalloonState']);

MapMarker.propTypes = {
  $hover: _react.PropTypes.bool,
  onMouseAllow: _react.PropTypes.func,

  marker: _react.PropTypes.any,
  hoveredAtTable: _react.PropTypes.bool,
  scale: _react.PropTypes.number,
  showBalloon: _react.PropTypes.bool,
  onCloseClick: _react.PropTypes.func,
  showBalloonState: _react.PropTypes.bool,
  onShowBalloonStateChange: _react.PropTypes.func,

  // animation helpers
  hoverState: _react.PropTypes.bool,
  onHoverStateChange: _react.PropTypes.func,

  size: _react.PropTypes.any,
  origin: _react.PropTypes.any,
  imageClass: _react.PropTypes.string,
  image: _react.PropTypes.string,
  withText: _react.PropTypes.bool,
  hintType: _react.PropTypes.string,
  lng: _react.PropTypes.any,
  lat: _react.PropTypes.any,
  hoveredClub: _react.PropTypes.any
};

MapMarker.defaultProps = {
  scale: K_SCALE_NORMAL,
  hoverState: false,
  showBalloonState: false,
  withText: false,
  size: { width: 100, height: 60 },
  origin: { x: 15 / 62, y: 1 },
  imageClass: 'map-marker__marker--big',
  hintType: 'hint--info'
};

var mapMarkerState = function mapMarkerState(state) {
  return {
    hoveredClub: state.ClubsReducer.get('hoveredClub')
  };
};

MapMarker = (0, _reactRedux.connect)(mapMarkerState)(MapMarker);

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainMapBlock = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactControllables = require('react-controllables');

var _reactControllables2 = _interopRequireDefault(_reactControllables);

var _component = require('react-pure-render/component');

var _component2 = _interopRequireDefault(_component);

var _googleMapReact = require('google-map-react');

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

var _immutable = require('immutable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var K_MARGIN_TOP = 30;
var K_MARGIN_RIGHT = 30;
var K_MARGIN_BOTTOM = 30;
var K_MARGIN_LEFT = 30;

var K_HOVER_DISTANCE = 30;

var MainMapBlock = exports.MainMapBlock = function (_PureComponent) {
  _inherits(MainMapBlock, _PureComponent);

  function MainMapBlock(props) {
    _classCallCheck(this, MainMapBlock);

    var _this = _possibleConstructorReturn(this, (MainMapBlock.__proto__ || Object.getPrototypeOf(MainMapBlock)).call(this, props));

    _this.state = {
      center: { lat: -37.33, lng: 144.96 },
      zoom: 11,
      mapStyle: {
        height: (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - 20 + "px"
      }
    };
    return _this;
  }

  _createClass(MainMapBlock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      store.dispatch(cancelFetching());
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prev, next) {
      store.dispatch(setMap(this.refs.google_map));
    }
  }, {
    key: 'onBoundsChange',
    value: function onBoundsChange(center, zoom, bounds, marginBounds) {
      if (this.props.onBoundsChange) {
        this.props.onBoundsChange({ center: center, zoom: zoom, bounds: bounds, marginBounds: marginBounds });
      } else {
        this.props.onCenterChange(center);
        this.props.onZoomChange(zoom);
      }
    }
  }, {
    key: 'onChildClick',
    value: function onChildClick(key, childProps) {
      var markerId = childProps.marker.id;
      var index = this.props.markers.findIndex(function (m) {
        return m.id === markerId;
      });
      if (this.props.onChildClick) {
        this.props.onChildClick(index);
      }
    }
  }, {
    key: 'onChildMouseEnter',
    value: function onChildMouseEnter(key, childProps) {
      var markerId = childProps.marker.id;
      var index = this.props.markers.findIndex(function (m) {
        return m.id === markerId;
      });
      if (this.props.onMarkerHover) {
        this.props.onMarkerHover(index);
      }
    }
  }, {
    key: 'onChildMouseLeave',
    value: function onChildMouseLeave() {
      if (this.props.onMarkerHover) {
        this.props.onMarkerHover(-1);
      }
    }
  }, {
    key: 'onBalloonCloseClick',
    value: function onBalloonCloseClick() {
      if (this.props.onChildClick) {
        this.props.onChildClick(-1);
      }
    }
  }, {
    key: 'distanceToMouse',
    value: function distanceToMouse() {
      return customDistanceToMouse();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.isFetching == true) {
        return _react2.default.createElement(
          'div',
          { className: 'ui container' },
          _react2.default.createElement('div', { className: 'ui active centered inline loader' })
        );
      } else {
        //      const {rowFrom, rowTo} = getRealFromTo(this.props.visibleRowFirst, this.props.visibleRowLast, this.props.maxVisibleRows, this.props.markers.size);
        var rowFrom = 0;
        var rowTo = 20;
        var selectedId = -1;
        if (this.props.selectedMarker) {
          selectedId = this.props.selectedMarker.id;
        }
        var Markers = this.props.markers && this.props.markers.map(function (marker, index) {
          return _react2.default.createElement(MapMarker, _extends({
            key: marker.id,
            lat: marker.lat,
            lng: marker.lng,
            scale: getScale(index + rowFrom, _this2.props.visibleRowFirst, _this2.props.visibleRowLast, K_SCALE_NORMAL)
          }, markerDescriptions[marker.type], {
            marker: marker,
            isSelected: selectedId === marker.id
          }));
        });

        return _react2.default.createElement(
          'div',
          { className: 'google-map ten wide column no-padding', id: 'actual-map', style: this.state.mapStyle },
          _react2.default.createElement(
            _googleMapReact2.default,
            { ref: 'google_map',
              bootstrapURLKeys: { key: "AIzaSyAB6t6xXm61ML-tLF8f_5PBIYQtrFIEVQs" },
              center: this.props.center.toJS(),
              zoom: this.props.zoom,
              onChange: this.onBoundsChange.bind(this),
              onChildClick: this.onChildClick.bind(this),
              onChildMouseEnter: this.onChildMouseEnter.bind(this),
              onChildMouseLeave: this.onChildMouseLeave.bind(this),
              margin: [K_MARGIN_TOP, K_MARGIN_RIGHT, K_MARGIN_BOTTOM, K_MARGIN_LEFT],
              hoverDistance: K_HOVER_DISTANCE
            },
            Markers
          )
        );
      }
    }
  }]);

  return MainMapBlock;
}(_component2.default);

exports.MainMapBlock = MainMapBlock = (0, _reactControllables2.default)(MainMapBlock, ['center', 'zoom', 'markers']);

MainMapBlock.propTypes = {
  onCenterChange: _react.PropTypes.func, // @controllable generated fn
  onZoomChange: _react.PropTypes.func, // @controllable generated fn
  onBoundsChange: _react.PropTypes.func,
  onMarkerHover: _react.PropTypes.func,
  onChildClick: _react.PropTypes.func,
  center: _react.PropTypes.any,
  zoom: _react.PropTypes.number,
  markers: _react.PropTypes.any,
  visibleRowFirst: _react.PropTypes.number,
  visibleRowLast: _react.PropTypes.number,
  maxVisibleRows: _react.PropTypes.number,
  hoveredRowIndex: _react.PropTypes.number,
  openBalloonIndex: _react.PropTypes.number,
  isFetching: _react.PropTypes.bool,
  selectedMarker: _react.PropTypes.any
};

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var clubMapState = function clubMapState(state) {
  return {
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
  };
};

var ClubMapMain = (0, _reactRedux.connect)(clubMapState)(MainMapBlock);
exports.default = ClubMapMain;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClubDetailsMap = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactControllables = require('react-controllables');

var _reactControllables2 = _interopRequireDefault(_reactControllables);

var _component = require('react-pure-render/component');

var _component2 = _interopRequireDefault(_component);

var _googleMapReact = require('google-map-react');

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

var _immutable = require('immutable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var K_MARGIN_TOP = 30;
var K_MARGIN_RIGHT = 30;
var K_MARGIN_BOTTOM = 30;
var K_MARGIN_LEFT = 30;

var K_HOVER_DISTANCE = 30;

var ClubDetailsMap = exports.ClubDetailsMap = function (_PureComponent) {
  _inherits(ClubDetailsMap, _PureComponent);

  function ClubDetailsMap(props) {
    _classCallCheck(this, ClubDetailsMap);

    var _this = _possibleConstructorReturn(this, (ClubDetailsMap.__proto__ || Object.getPrototypeOf(ClubDetailsMap)).call(this, props));

    _this.state = {
      center: { lat: -37.33, lng: 144.96 },
      zoom: 11,
      mapStyle: {
        height: (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - 20 + "px"
      }
    };
    return _this;
  }

  _createClass(ClubDetailsMap, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prev, next) {
      store.dispatch(setMap(this.refs.google_map));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      store.dispatch(setMap(this.refs.google_map));
    }
  }, {
    key: 'onBoundsChange',
    value: function onBoundsChange(center, zoom, bounds, marginBounds) {
      if (this.props.onBoundsChange) {
        this.props.onBoundsChange({ center: center, zoom: zoom, bounds: bounds, marginBounds: marginBounds });
      } else {
        this.props.onCenterChange(center);
        this.props.onZoomChange(zoom);
      }
    }
  }, {
    key: 'onChildClick',
    value: function onChildClick(key, childProps) {
      var markerId = childProps.marker.id;
      var index = this.props.markers.findIndex(function (m) {
        return m.id === markerId;
      });
      if (this.props.onChildClick) {
        this.props.onChildClick(index);
      }
    }
  }, {
    key: 'onChildMouseEnter',
    value: function onChildMouseEnter(key, childProps) {
      var markerId = childProps.marker.id;
      var index = this.props.markers.findIndex(function (m) {
        return m.id === markerId;
      });
      if (this.props.onMarkerHover) {
        this.props.onMarkerHover(index);
      }
    }
  }, {
    key: 'onChildMouseLeave',
    value: function onChildMouseLeave() {
      if (this.props.onMarkerHover) {
        this.props.onMarkerHover(-1);
      }
    }
  }, {
    key: 'onBalloonCloseClick',
    value: function onBalloonCloseClick() {
      if (this.props.onChildClick) {
        this.props.onChildClick(-1);
      }
    }
  }, {
    key: 'distanceToMouse',
    value: function distanceToMouse() {
      return customDistanceToMouse();
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.isFetching == true) {
        return _react2.default.createElement(
          'div',
          { className: 'ui container' },
          _react2.default.createElement('div', { className: 'ui active centered inline loader' })
        );
      } else {
        //      const {rowFrom, rowTo} = getRealFromTo(this.props.visibleRowFirst, this.props.visibleRowLast, this.props.maxVisibleRows, this.props.markers.size);
        var newCenter = { lat: parseFloat(this.props.selectedMarker.lat), lng: parseFloat(this.props.selectedMarker.lng) };
        return _react2.default.createElement(
          'div',
          { className: 'google-map ten wide column no-padding', id: 'actual-map', style: this.state.mapStyle },
          _react2.default.createElement(
            _googleMapReact2.default,
            { ref: 'google_map',
              bootstrapURLKeys: { key: "AIzaSyAB6t6xXm61ML-tLF8f_5PBIYQtrFIEVQs" },
              center: newCenter,
              zoom: this.props.zoom,
              onChange: this.onBoundsChange.bind(this),
              onChildClick: this.onChildClick.bind(this),
              onChildMouseEnter: this.onChildMouseEnter.bind(this),
              onChildMouseLeave: this.onChildMouseLeave.bind(this),
              margin: [K_MARGIN_TOP, K_MARGIN_RIGHT, K_MARGIN_BOTTOM, K_MARGIN_LEFT],
              hoverDistance: K_HOVER_DISTANCE
            },
            _react2.default.createElement(MapMarker, _extends({
              key: this.props.selectedMarker.id,
              lat: this.props.selectedMarker.lat,
              lng: this.props.selectedMarker.lng,
              scale: getScale(0, this.props.visibleRowFirst, this.props.visibleRowLast, K_SCALE_NORMAL)
            }, markerDescriptions[this.props.selectedMarker.type], {
              marker: this.props.selectedMarker,
              isSelected: true
            }))
          )
        );
      }
    }
  }]);

  return ClubDetailsMap;
}(_component2.default);

exports.ClubDetailsMap = ClubDetailsMap = (0, _reactControllables2.default)(ClubDetailsMap, ['center', 'zoom', 'markers']);

ClubDetailsMap.propTypes = {
  onCenterChange: _react.PropTypes.func, // @controllable generated fn
  onZoomChange: _react.PropTypes.func, // @controllable generated fn
  onBoundsChange: _react.PropTypes.func,
  onMarkerHover: _react.PropTypes.func,
  onChildClick: _react.PropTypes.func,
  center: _react.PropTypes.any,
  zoom: _react.PropTypes.number,
  markers: _react.PropTypes.any,
  visibleRowFirst: _react.PropTypes.number,
  visibleRowLast: _react.PropTypes.number,
  maxVisibleRows: _react.PropTypes.number,
  hoveredRowIndex: _react.PropTypes.number,
  openBalloonIndex: _react.PropTypes.number,
  isFetching: _react.PropTypes.bool,
  selectedMarker: _react.PropTypes.any
};

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var clubDetailsMapState = function clubDetailsMapState(state) {
  return {
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
  };
};

var VisibleClubDetailsMap = (0, _reactRedux.connect)(clubDetailsMapState)(ClubDetailsMap);
exports.default = VisibleClubDetailsMap;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClubRow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClubRow = exports.ClubRow = function (_React$Component) {
  _inherits(ClubRow, _React$Component);

  function ClubRow() {
    _classCallCheck(this, ClubRow);

    return _possibleConstructorReturn(this, (ClubRow.__proto__ || Object.getPrototypeOf(ClubRow)).apply(this, arguments));
  }

  _createClass(ClubRow, [{
    key: 'handleSelectClub',
    value: function handleSelectClub() {
      store.dispatch(requestFetcher());
      _reactRouter.browserHistory.push('/dashboard/clubs/club_map/' + this.props.club.id);
    }
  }, {
    key: 'handleHover',
    value: function handleHover() {
      store.dispatch(setHoveredClub(this.props.club));
    }
  }, {
    key: 'handleHoverOut',
    value: function handleHoverOut() {
      store.dispatch(setHoverOut());
    }
  }, {
    key: 'render',
    value: function render() {
      var validClub = _react2.default.createElement('i', { className: 'remove icon red' });
      if (this.props.club.indoor_outdoor == "indoor" || this.props.weatherClass == "sunny" || this.props.weatherClass == "cloudy") {
        validClub = _react2.default.createElement('i', { className: 'checkmark icon green able-club-tick' });
      }
      return _react2.default.createElement(
        'div',
        { className: 'club-row', onClick: this.handleSelectClub.bind(this), onMouseOver: this.handleHover.bind(this), onMouseOut: this.handleHoverOut.bind(this) },
        _react2.default.createElement(
          'div',
          { className: 'fourteen wide column no-padding' },
          _react2.default.createElement(
            'div',
            { className: 'club-row-name' },
            this.props.club.name
          ),
          _react2.default.createElement(
            'div',
            { className: 'club-row-address' },
            this.props.club.address,
            ', ',
            this.props.club.postcode
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'two wide column no-padding' },
          'Weather condition: ',
          validClub
        )
      );
    }
  }]);

  return ClubRow;
}(_react2.default.Component);

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkerTable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarkerTable = exports.MarkerTable = function (_React$Component) {
  _inherits(MarkerTable, _React$Component);

  function MarkerTable() {
    _classCallCheck(this, MarkerTable);

    return _possibleConstructorReturn(this, (MarkerTable.__proto__ || Object.getPrototypeOf(MarkerTable)).apply(this, arguments));
  }

  _createClass(MarkerTable, [{
    key: "handleSearchClub",
    value: function handleSearchClub(event) {
      if (event.keyCode == 13) {
        store.dispatch(loadWeatherOnLocation(event.target.value));
        store.dispatch(requestSearchClub());
        return store.dispatch(searchClubs(event.target.value));
      }
    }
  }, {
    key: "getLocation",
    value: function (_getLocation) {
      function getLocation() {
        return _getLocation.apply(this, arguments);
      }

      getLocation.toString = function () {
        return _getLocation.toString();
      };

      return getLocation;
    }(function () {
      store.dispatch(getLocation());
    })
  }, {
    key: "clubList",
    value: function clubList() {
      var _this2 = this;

      if (this.props.isSearchingClubs == true) {
        return _react2.default.createElement("div", { className: "ui active centered inline loader" });
      } else {
        if (this.props.filteredClubs.length == 0) {
          return _react2.default.createElement(
            "div",
            { className: "ui centered grid no-clubs-message" },
            _react2.default.createElement("br", null),
            "No Clubs Found Yet."
          );
        } else {
          return _react2.default.createElement(
            "div",
            { className: "club-list" },
            this.props.filteredClubs.map(function (club) {
              return _react2.default.createElement(ClubRow, { club: club, weatherClass: _this2.props.weatherClass, key: "club_" + club.id });
            })
          );
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "six wide column no-padding" },
        _react2.default.createElement(
          "div",
          { className: "weather-container-" + this.props.weatherClass },
          _react2.default.createElement("div", { className: this.props.weatherClass }),
          _react2.default.createElement(
            "div",
            { className: "weather-panel" },
            _react2.default.createElement(
              "div",
              { className: "today-weather" },
              _react2.default.createElement(
                "div",
                { className: "location" },
                this.props.subLocation
              ),
              _react2.default.createElement(
                "div",
                { className: "temperature" },
                this.props.weatherTemp,
                "\xB0C"
              ),
              _react2.default.createElement(
                "div",
                { className: "weather-text" },
                this.props.weatherText
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "forecasts" },
              _react2.default.createElement(
                "div",
                { className: "tomorrow" },
                _react2.default.createElement(
                  "div",
                  { className: "label" },
                  this.props.tmr.text
                ),
                this.props.tmr.low,
                "\xB0 - ",
                this.props.tmr.high,
                "\xB0"
              ),
              _react2.default.createElement(
                "div",
                { className: "day-after" },
                _react2.default.createElement(
                  "div",
                  { className: "label" },
                  this.props.otherDay.text
                ),
                this.props.otherDay.low,
                "\xB0 - ",
                this.props.otherDay.high,
                "\xB0"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "input-effect-wrapper ui icon input" },
            _react2.default.createElement("i", { className: "search icon" }),
            _react2.default.createElement("input", { className: "input-effect search-club", onKeyUp: this.handleSearchClub.bind(this), placeholder: "Search by postcodes, sports, club names ..." }),
            _react2.default.createElement("span", { className: "input-focus-border" })
          ),
          this.clubList()
        )
      );
    }
  }]);

  return MarkerTable;
}(_react2.default.Component);

MarkerTable.propTypes = {
  onCenterChange: _react.PropTypes.func, // @controllable generated fn
  onZoomChange: _react.PropTypes.func, // @controllable generated fn
  onBoundsChange: _react.PropTypes.func,
  onMarkerHover: _react.PropTypes.func,
  onChildClick: _react.PropTypes.func,
  center: _react.PropTypes.any,
  zoom: _react.PropTypes.number,
  markers: _react.PropTypes.any,
  visibleRowFirst: _react.PropTypes.number,
  visibleRowLast: _react.PropTypes.number,
  maxVisibleRows: _react.PropTypes.number,
  hoveredRowIndex: _react.PropTypes.number,
  openBalloonIndex: _react.PropTypes.number,
  isFetching: _react.PropTypes.bool,
  isSearchingClubs: _react.PropTypes.bool,
  filteredClubs: _react.PropTypes.any,
  weatherClass: _react.PropTypes.any,
  weatherTemp: _react.PropTypes.any,
  weatherText: _react.PropTypes.any,
  subLocation: _react.PropTypes.any,
  tmr: _react.PropTypes.any,
  otherDay: _react.PropTypes.any
};

MarkerTable.defaultProps = defaultWeatherState();

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var mapMarkerTableState = function mapMarkerTableState(state) {
  return {
    isFetching: state.ClubsReducer.get('isFetching'),
    center: state.ClubsReducer.get('mapInfo').get('center'),
    zoom: state.ClubsReducer.get('mapInfo').get('zoom'),
    markers: state.ClubsReducer.get('dataFiltered'),
    visibleRowFirst: state.ClubsReducer.get('tableRowsInfo').get('visibleRowFirst'),
    visibleRowLast: state.ClubsReducer.get('tableRowsInfo').get('visibleRowLast'),
    maxVisibleRows: state.ClubsReducer.get('tableRowsInfo').get('maxVisibleRows'),
    hoveredRowIndex: state.ClubsReducer.get('tableRowsInfo').get('hoveredRowIndex'),
    openBalloonIndex: state.ClubsReducer.get('openBalloonIndex'),
    isSearchingClubs: state.ClubsReducer.get('isSearchingClubs'),
    filteredClubs: state.ClubsReducer.get('filteredClubs'),
    weatherClass: state.WeatherReducer.weatherClass,
    weatherTemp: state.WeatherReducer.weatherTemp,
    weatherText: state.WeatherReducer.weatherText,
    subLocation: state.WeatherReducer.subLocation,
    tmr: state.WeatherReducer.tmr,
    otherDay: state.WeatherReducer.otherDay
  };
};

var VisibleMarkerTable = (0, _reactRedux.connect)(mapMarkerTableState)(MarkerTable);

exports.default = VisibleMarkerTable;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClubDetails = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClubDetails = exports.ClubDetails = function (_React$Component) {
  _inherits(ClubDetails, _React$Component);

  function ClubDetails() {
    _classCallCheck(this, ClubDetails);

    return _possibleConstructorReturn(this, (ClubDetails.__proto__ || Object.getPrototypeOf(ClubDetails)).apply(this, arguments));
  }

  _createClass(ClubDetails, [{
    key: 'render',
    value: function render() {

      if (this.props.selectedClub) {
        var validClub = _react2.default.createElement('i', { className: 'remove icon red' });
        if (this.props.selectedClub.indoor_outdoor == "indoor" || this.props.weatherClass == "sunny" || this.props.weatherClass == "cloudy") {
          validClub = _react2.default.createElement('i', { className: 'checkmark icon green' });
        }

        return _react2.default.createElement(
          'div',
          { className: 'six wide column no-padding' },
          _react2.default.createElement(
            'div',
            { className: "weather-container-" + this.props.weatherClass },
            _react2.default.createElement('div', { className: this.props.weatherClass }),
            _react2.default.createElement(
              'div',
              { className: 'weather-panel' },
              _react2.default.createElement(
                'div',
                { className: 'today-weather' },
                _react2.default.createElement(
                  'div',
                  { className: 'location' },
                  this.props.selectedClub.suburb
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'temperature' },
                  this.props.weatherTemp,
                  '\xB0C'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'weather-text' },
                  this.props.weatherText
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'forecasts' },
                _react2.default.createElement(
                  'div',
                  { className: 'tomorrow' },
                  _react2.default.createElement(
                    'div',
                    { className: 'label' },
                    this.props.tmr.text
                  ),
                  this.props.tmr.low,
                  '\xB0 - ',
                  this.props.tmr.high,
                  '\xB0'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'day-after' },
                  _react2.default.createElement(
                    'div',
                    { className: 'label' },
                    this.props.otherDay.text
                  ),
                  this.props.otherDay.low,
                  '\xB0 - ',
                  this.props.otherDay.high,
                  '\xB0'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'club-details-wrapper' },
              _react2.default.createElement(
                'div',
                { className: 'ui stackable grid' },
                _react2.default.createElement(
                  'div',
                  { className: 'two wide column' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/dashboard/clubs/club_map' },
                    _react2.default.createElement('i', { className: 'angle left icon back-to-map-icon' })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'fourteen wide column' },
                  _react2.default.createElement(
                    'div',
                    { className: 'club-name' },
                    this.props.selectedClub.name
                  ),
                  _react2.default.createElement('div', { className: 'club-name-separator' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'club-details-content' },
                    _react2.default.createElement(
                      'b',
                      { className: 'title' },
                      'Address:'
                    ),
                    this.props.selectedClub.address,
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      'b',
                      { className: 'title' },
                      'Suburb:'
                    ),
                    this.props.selectedClub.suburb,
                    ' ',
                    this.props.selectedClub.postcode,
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      'b',
                      { className: 'title' },
                      'Description:'
                    ),
                    this.props.selectedClub.description,
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      'b',
                      { className: 'title' },
                      'Available sports:'
                    ),
                    this.props.selectedClub.business_category,
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                      'b',
                      { className: 'title' },
                      'Weather condition:'
                    ),
                    validClub
                  )
                )
              )
            )
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'six wide column' },
          _react2.default.createElement('div', { className: 'ui active centered inline loader' })
        );
      }
    }
  }]);

  return ClubDetails;
}(_react2.default.Component);

ClubDetails.propTypes = {
  onCenterChange: _react.PropTypes.func, // @controllable generated fn
  onZoomChange: _react.PropTypes.func, // @controllable generated fn
  onBoundsChange: _react.PropTypes.func,
  onMarkerHover: _react.PropTypes.func,
  onChildClick: _react.PropTypes.func,
  center: _react.PropTypes.any,
  zoom: _react.PropTypes.number,
  markers: _react.PropTypes.any,
  visibleRowFirst: _react.PropTypes.number,
  visibleRowLast: _react.PropTypes.number,
  maxVisibleRows: _react.PropTypes.number,
  hoveredRowIndex: _react.PropTypes.number,
  openBalloonIndex: _react.PropTypes.number,
  isFetching: _react.PropTypes.bool,
  selectedClub: _react.PropTypes.any,
  weatherClass: _react.PropTypes.any,
  weatherTemp: _react.PropTypes.any,
  weatherText: _react.PropTypes.any,
  tmr: _react.PropTypes.any,
  otherDay: _react.PropTypes.any
};

ClubDetails.defaultProps = defaultWeatherState();

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var mapClubDetailsState = function mapClubDetailsState(state) {
  return {
    isFetching: state.ClubsReducer.get('isFetching'),
    center: state.ClubsReducer.get('mapInfo').get('center'),
    zoom: state.ClubsReducer.get('mapInfo').get('zoom'),
    markers: state.ClubsReducer.get('dataFiltered'),
    visibleRowFirst: state.ClubsReducer.get('tableRowsInfo').get('visibleRowFirst'),
    visibleRowLast: state.ClubsReducer.get('tableRowsInfo').get('visibleRowLast'),
    maxVisibleRows: state.ClubsReducer.get('tableRowsInfo').get('maxVisibleRows'),
    hoveredRowIndex: state.ClubsReducer.get('tableRowsInfo').get('hoveredRowIndex'),
    openBalloonIndex: state.ClubsReducer.get('openBalloonIndex'),
    selectedClub: state.ClubsReducer.get('selectedMarker'),
    weatherClass: state.WeatherReducer.weatherClass,
    weatherTemp: state.WeatherReducer.weatherTemp,
    weatherText: state.WeatherReducer.weatherText,
    tmr: state.WeatherReducer.tmr,
    otherDay: state.WeatherReducer.otherDay
  };
};

var VisibleClubDetails = (0, _reactRedux.connect)(mapClubDetailsState)(ClubDetails);

exports.default = VisibleClubDetails;

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClubDetailsPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClubDetailsPage = exports.ClubDetailsPage = function (_React$Component) {
  _inherits(ClubDetailsPage, _React$Component);

  function ClubDetailsPage() {
    _classCallCheck(this, ClubDetailsPage);

    return _possibleConstructorReturn(this, (ClubDetailsPage.__proto__ || Object.getPrototypeOf(ClubDetailsPage)).apply(this, arguments));
  }

  _createClass(ClubDetailsPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      setTimeout(function () {
        store.dispatch(getClub(this.props.params.club_id));
      }.bind(this), 10);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prev, state) {
      setTimeout(function () {
        store.dispatch(getClub(this.props.params.club_id));
      }.bind(this), 10);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(NavBar, null),
        _react2.default.createElement(
          "div",
          { className: "map-overlay ui stackable grid" },
          _react2.default.createElement(VisibleClubDetailsMap, null),
          _react2.default.createElement(VisibleClubDetails, null)
        ),
        _react2.default.createElement(Footer, null)
      );
    }
  }]);

  return ClubDetailsPage;
}(_react2.default.Component);

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClubMainPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClubMainPage = exports.ClubMainPage = function (_React$Component) {
  _inherits(ClubMainPage, _React$Component);

  function ClubMainPage() {
    _classCallCheck(this, ClubMainPage);

    return _possibleConstructorReturn(this, (ClubMainPage.__proto__ || Object.getPrototypeOf(ClubMainPage)).apply(this, arguments));
  }

  _createClass(ClubMainPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.params.postcode) {
        store.dispatch(searchClubs(this.props.params.postcode));
      } else {}
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(NavBar, null),
        _react2.default.createElement(
          "div",
          { className: "map-overlay ui stackable grid no-margin-left-right" },
          _react2.default.createElement(ClubMapMain, null),
          _react2.default.createElement(VisibleMarkerTable, null)
        ),
        _react2.default.createElement(Footer, null)
      );
    }
  }]);

  return ClubMainPage;
}(_react2.default.Component);

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressCourseRow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressCourseRow = exports.ProgressCourseRow = function (_React$Component) {
  _inherits(ProgressCourseRow, _React$Component);

  function ProgressCourseRow() {
    _classCallCheck(this, ProgressCourseRow);

    return _possibleConstructorReturn(this, (ProgressCourseRow.__proto__ || Object.getPrototypeOf(ProgressCourseRow)).apply(this, arguments));
  }

  _createClass(ProgressCourseRow, [{
    key: 'render',
    value: function render() {
      var completedDiv = _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(
          'a',
          { className: 'ui green mini basic label' },
          'Completed'
        )
      );
      if (this.props.course.completed == false) {
        completedDiv = _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'a',
            { className: 'ui blue mini basic label' },
            'In Progress'
          )
        );
      }
      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          this.props.course.id
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            _reactRouter.Link,
            { to: "/dashboard/lessons/" + this.props.course.id },
            this.props.course.course_name
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          this.props.course.start_date
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'span',
            { className: 'counter' },
            this.props.course.progress
          ),
          '%'
        ),
        completedDiv
      );
    }
  }]);

  return ProgressCourseRow;
}(_react2.default.Component);

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dashboard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = exports.Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      store.dispatch(loadProgress());
      store.dispatch(loadWeatherDetails());
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(NavBar, null),
        _react2.default.createElement(
          'div',
          { className: 'mainWrap ui container' },
          _react2.default.createElement(
            'div',
            { className: 'ui equal width left aligned padded grid stackable' },
            _react2.default.createElement(
              'div',
              { className: 'stretched row' },
              _react2.default.createElement(
                'div',
                { className: 'sixteen wide tablet ten wide computer column' },
                _react2.default.createElement(
                  'div',
                  { className: 'ui segments' },
                  _react2.default.createElement(
                    'div',
                    { className: 'ui segment no-padding-bottom' },
                    _react2.default.createElement(
                      'h5',
                      { className: 'ui left floated header' },
                      'Recent Courses'
                    ),
                    _react2.default.createElement('div', { className: 'clearfix' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'ui segment left aligned' },
                    _react2.default.createElement(
                      'table',
                      { className: 'ui very basic center aligned  celled table' },
                      _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                          'tr',
                          null,
                          _react2.default.createElement(
                            'th',
                            null,
                            '#'
                          ),
                          _react2.default.createElement(
                            'th',
                            null,
                            'Course Name'
                          ),
                          _react2.default.createElement(
                            'th',
                            null,
                            'Start Date'
                          ),
                          _react2.default.createElement(
                            'th',
                            null,
                            'Progress'
                          ),
                          _react2.default.createElement(
                            'th',
                            null,
                            'Status'
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'tbody',
                        null,
                        this.props.courses.map(function (course) {
                          return _react2.default.createElement(ProgressCourseRow, { course: course, key: "viewed_course" + course.id });
                        })
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'ui inverted dimmer' },
                      _react2.default.createElement(
                        'div',
                        { className: 'ui text loader' },
                        'Loading'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'sixteen wide tablet six wide computer column' },
                _react2.default.createElement(
                  'div',
                  { className: 'ui segment' },
                  _react2.default.createElement(
                    'h2',
                    { className: 'ui   center aligned header' },
                    _react2.default.createElement(
                      'div',
                      { className: 'content' },
                      'Melbourne',
                      _react2.default.createElement(
                        'div',
                        { className: 'sub header' },
                        this.props.forecasts[0].fulltext
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'h3',
                    { className: 'ui center aligned header' },
                    this.props.forecasts[0].low,
                    ' \xB0 - ',
                    this.props.forecasts[0].high,
                    ' \xB0'
                  ),
                  _react2.default.createElement('div', { className: 'ui divider' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'ui five column centered grid' },
                    this.props.forecasts.map(function (forecast, index) {
                      return _react2.default.createElement(
                        'div',
                        { className: 'column center aligned', key: "forecast_" + index },
                        _react2.default.createElement(
                          'p',
                          null,
                          forecast.text
                        ),
                        _react2.default.createElement(
                          'p',
                          null,
                          _react2.default.createElement('i', { className: "wi wi-" + forecast.classname })
                        ),
                        _react2.default.createElement(
                          'p',
                          null,
                          forecast.low,
                          '\xB0-',
                          forecast.high,
                          '\xB0'
                        )
                      );
                    })
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(Footer, null)
      );
    }
  }]);

  return Dashboard;
}(_react2.default.Component);

Dashboard.propTypes = {
  courses: _react.PropTypes.any,
  forecasts: _react.PropTypes.any
};

Dashboard.defaultProps = {
  forecasts: defaultWeatherDetailsState().details
};

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var mapTopCourseToDashboard = function mapTopCourseToDashboard(state) {
  return {
    courses: state.ProgressReducer.courses,
    forecasts: state.WeatherDetailsReducer.details
  };
};

var VisibleDashboard = (0, _reactRedux.connect)(mapTopCourseToDashboard)(Dashboard);

exports.default = VisibleDashboard;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var todo = function todo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state;
  }
};

var Todos = function Todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_TODO':
      return [].concat(_toConsumableArray(state), [todo(undefined, action)]);
    case 'TOGGLE_TODO':
      return state.map(function (t) {
        return todo(t, action);
      });
    default:
      return state;
  }
};

exports.default = Todos;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var NavReducer = function NavReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'TOGGLE_MENU':
      if (state.className == undefined || state.className == '') {
        return Object.assign({}, state, {
          className: 'is-active'
        });
      } else {
        return Object.assign({}, state, {
          className: ''
        });
      }
    default:
      return state;
  }
};

exports.default = NavReducer;

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CoursesReducer = function CoursesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { courses: [], isFetching: true, isSearch: false, resultsFound: 0, keywords: "empty" };
  var action = arguments[1];

  switch (action.type) {
    case LOAD_COURSES_SUCCESS:
      return Object.assign({}, state, {
        courses: action.courses.courses,
        isFetching: false
      });

    case SEARCH_COURSES_SUCCESS:
      return Object.assign({}, state, {
        courses: action.courses.courses,
        isFetching: false,
        isSearch: true,
        resultsFound: action.courses.results_found,
        keywords: action.courses.keywords
      });

    case REQUEST_SEARCH_COURSE:
      return Object.assign({}, state, {
        isFetching: true
      });
    default:
      return state;
  }
};

exports.default = CoursesReducer;

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CourseDetailsReducer = function CourseDetailsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { course: {}, isFetching: true, currentLesson: {}, chapterIndex: 0, lessonIndex: 0 };
  var action = arguments[1];

  switch (action.type) {
    case RECEIVE_COURSE_SUCCESS:
      return Object.assign({}, state, {
        course: action.course,
        isFetching: false,
        currentLesson: action.course.chapters[state.chapterIndex].lessons[state.lessonIndex]
      });

    case REQUEST_COURSE:
      return Object.assign({}, state, {
        isFetching: true
      });

    case SELECT_LESSON:
      return Object.assign({}, state, {
        currentLesson: action.lesson,
        lessonIndex: action.lessonIndex,
        chapterIndex: action.chapterIndex
      });

    case NEXT_LESSON:
      CourseApi.trackProgress(state.currentLesson.id);
      var currentCourse = state.course;
      currentCourse.chapters[state.chapterIndex].lessons[state.lessonIndex].completed = true;
      if (state.course.chapters[state.chapterIndex].lessons[state.lessonIndex + 1]) {
        return Object.assign({}, state, {
          currentLesson: state.course.chapters[state.chapterIndex].lessons[state.lessonIndex + 1],
          lessonIndex: state.lessonIndex + 1,
          course: currentCourse
        });
      } else {
        if (state.course.chapters[state.chapterIndex + 1]) {
          return Object.assign({}, state, {
            currentLesson: state.course.chapters[state.chapterIndex + 1].lessons[0],
            lessonIndex: 0,
            chapterIndex: state.chapterIndex + 1,
            course: currentCourse
          });
        } else {
          return Object.assign({}, state, {
            currentLesson: state.course.chapters[0].lessons[0],
            lessonIndex: 0,
            chapterIndex: 0,
            course: currentCourse
          });
        }
      }

    default:
      return state;
  }
};

exports.default = CourseDetailsReducer;

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function defaultWeatherState() {
  return {
    weatherClass: "sunny",
    weatherText: "Sunny Day",
    weatherTemp: 16,
    tmr: {
      text: 'Tomorrow',
      high: 15,
      low: 10
    },
    otherDay: {
      text: '24/4',
      high: 15,
      low: 10
    }
  };
}

var WeatherReducer = function WeatherReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultWeatherState();
  var action = arguments[1];

  switch (action.type) {
    case LOAD_WEATHER_DATA_SUCCESS:
      return Object.assign({}, state, {
        weatherClass: action.weather.class_name,
        weatherText: action.weather.text,
        weatherTemp: action.weather.temp,
        subLocation: action.weather.sub_location,
        tmr: action.weather.tomorrow,
        otherDay: action.weather.other_day
      });

    case LOAD_WEATHER_DATA_FAILURE:
      return Object.assign({}, state, defaultWeatherState());
    default:
      return state;
  }
};

exports.default = WeatherReducer;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function defaultWeatherDetailsState() {
  return {
    details: [{
      text: '7/5',
      fulltext: 'Today',
      high: 15,
      low: 10,
      classname: 'day-sunny'
    }, {
      text: '8/5',
      fulltext: 'Today',
      high: 15,
      low: 10,
      classname: 'day-sunny'
    }, {
      text: '9/5',
      fulltext: 'Today',
      high: 15,
      low: 10,
      classname: 'day-sunny'
    }, {
      text: '10/5',
      fulltext: 'Today',
      high: 15,
      low: 10,
      classname: 'day-sunny'
    }, {
      text: '11/5',
      fulltext: 'Today',
      high: 15,
      low: 10,
      classname: 'day-sunny'
    }]
  };
}

var WeatherDetailsReducer = function WeatherDetailsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultWeatherDetailsState();
  var action = arguments[1];

  switch (action.type) {
    case LOAD_WEATHER_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        details: action.weather.details
      });

    case LOAD_WEATHER_DETAILS_FAILURE:
      return Object.assign({}, state, defaultWeatherDetailsState());
    default:
      return state;
  }
};

exports.default = WeatherDetailsReducer;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var K_LAST_VISIBLE_ROW_AT_SERVER_RENDERING = 5;

function ptInSect(x, a, b) {
  return (x - a) * (x - b) <= 0;
}

function ptInRect(pt, rect) {
  return ptInSect(pt.lat, rect.get(0), rect.get(2)) && ptInSect(pt.lng, rect.get(1), rect.get(3));
}

// use rbush https://github.com/mourner/rbush if you have really big amount of points
function calcFilteredAndSortedMarkers(data, mapInfo) {
  var marginBounds = mapInfo && mapInfo.get('marginBounds');

  if (!data || !marginBounds) {
    return new _immutable.List();
  }

  return data.filter(function (m) {
    return ptInRect(m, marginBounds);
  });
}

function defaultMapState() {
  return _immutable2.default.fromJS({
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
  infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

function getActualLocation(map) {
  var infoWindow = new google.maps.InfoWindow();
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
      return pos;
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

var ClubsReducer = function ClubsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultMapState();
  var action = arguments[1];

  switch (action.type) {
    case LOAD_CLUB_SUCCESS:
      return state.set('data', action.clubs.clubs).set('dataFiltered', action.clubs.clubs).set('isFetching', false);

    case REQUEST_SEARCH_COURSE:
      return state.set('isFetching', true);

    case SELECT_CLUB:
      return state.set('selectedMarker', action.club);

    case SELECT_CLUB_BY_ID:
      return state.set('selectedMarker', action.club).set('isFetching', false).mergeDeep({ mapInfo: { zoom: 13 } });

    case REQUEST_SEARCH_CLUB:
      return state.set('isSearchingClubs', true);

    case SEARCH_CLUB_SUCCESS:
      return state.set('isSearchingClubs', false).set('filteredClubs', action.clubs.clubs).set('dataFiltered', action.clubs.clubs).mergeDeep({ mapInfo: { center: [parseFloat(action.clubs.center.lat), parseFloat(action.clubs.center.lng)], zoom: 13 } });

    case SET_MAP:
      return state.set('map', action.map);

    case REQUEST_FETCHER:
      return state.set('isFetching', true);

    case CANCEL_FETCHING:
      return state.set('isFetching', false).set('selectedMarker', null);

    case GET_LOCATION:
      var location = getActualLocation(state.get('map').map_);
      return state.set("currentLocation", location);

    case HOVERED_CLUB_SELECTED:
      return state.set('hoveredClub', action.club).mergeDeep({ mapInfo: { center: [parseFloat(action.club.lat), parseFloat(action.club.lng)] } });

    case HOVER_OUT:
      return state.set('hoveredClub', null);
    default:
      return state;
  }
};

exports.default = ClubsReducer;

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ProgressReducer = function ProgressReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { courses: [] };
  var action = arguments[1];

  switch (action.type) {
    case LOAD_PROGRESS_SUCCESS:
      return Object.assign({}, state, {
        courses: action.courses.courses
      });

    default:
      return state;
  }
};

exports.default = ProgressReducer;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var TodoApp = (0, _redux.combineReducers)({
  NavReducer: NavReducer, CoursesReducer: CoursesReducer, CourseDetailsReducer: CourseDetailsReducer, ClubsReducer: ClubsReducer, WeatherReducer: WeatherReducer, ProgressReducer: ProgressReducer, WeatherDetailsReducer: WeatherDetailsReducer
});

exports.default = TodoApp;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = exports.NavBar = function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

    _this.state = {
      className: ''
    };
    return _this;
  }

  _createClass(NavBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null);
    }
  }]);

  return NavBar;
}(_react2.default.Component);

//const mapDispatchToProps = (dispatch) => {
//    return {
//      onToggleNav: () => {
//      dispatch(ToggleMenu())
//    }
//  }
//}

;'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(_ref) {
  var dispatch = _ref.dispatch;
  return _react2.default.createElement(
    'nav',
    { className: 'ui fixed stackable menu' },
    _react2.default.createElement(
      'div',
      { className: 'ui container' },
      _react2.default.createElement(
        'a',
        { className: 'item dashboard-logo', href: '/' },
        _react2.default.createElement('div', { className: 'dashboard-logo-image' })
      ),
      _react2.default.createElement(
        _reactRouter.Link,
        { className: 'item bold', to: '/dashboard' },
        'Dashboard'
      ),
      _react2.default.createElement(
        _reactRouter.Link,
        { className: 'item bold', to: '/dashboard/lessons' },
        'Courses'
      ),
      _react2.default.createElement(
        _reactRouter.Link,
        { className: 'item bold', to: '/dashboard/clubs/club_map' },
        'Club Map'
      ),
      _react2.default.createElement(
        'div',
        { className: 'right stackable menu' },
        _react2.default.createElement(
          'div',
          { className: 'item' },
          _react2.default.createElement(
            'div',
            { className: 'ui icon transparent input' },
            _react2.default.createElement('input', { type: 'text', placeholder: 'Search for courses...', onKeyUp: function onKeyUp(event) {
                if (event.keyCode == 13) {
                  _reactRouter.browserHistory.push('/dashboard/lessons');
                  dispatch(requestSearchCourses());
                  return dispatch(searchCourses(event.target.value));
                }
              } }),
            _react2.default.createElement('i', { className: 'search link icon' })
          )
        ),
        _react2.default.createElement(
          'a',
          { className: 'item', href: '/users/sign_out' },
          'Logout'
        )
      )
    )
  );
};

Footer = (0, _reactRedux.connect)()(Footer);

exports.default = Footer;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainView = exports.MainApp = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var MainApp = exports.MainApp = function (_React$Component) {
  _inherits(MainApp, _React$Component);

  function MainApp() {
    _classCallCheck(this, MainApp);

    return _possibleConstructorReturn(this, (MainApp.__proto__ || Object.getPrototypeOf(MainApp)).apply(this, arguments));
  }

  _createClass(MainApp, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'main',
        { className: 'app__main' },
        this.props.children
      );
    }
  }]);

  return MainApp;
}(React.Component);

var MainView = exports.MainView = function (_React$Component2) {
  _inherits(MainView, _React$Component2);

  function MainView(props) {
    _classCallCheck(this, MainView);

    var _this2 = _possibleConstructorReturn(this, (MainView.__proto__ || Object.getPrototypeOf(MainView)).call(this, props));

    _this2.state = {};
    return _this2;
  }

  _createClass(MainView, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(NavBar, null),
        React.createElement(Footer, null)
      );
    }
  }]);

  return MainView;
}(React.Component);

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavLink = function NavLink(_ref) {
  var filter = _ref.filter,
      children = _ref.children;
  return _react2.default.createElement(
    _reactRouter.Link,
    {
      to: filter === '' ? '/dashboard' : '/dashboard/' + filter,
      activeStyle: {
        textDecoration: 'none',
        color: 'black'
      }
    },
    children
  );
};

exports.default = NavLink;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root(_ref) {
  var store = _ref.store;
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouter.Router,
      { history: _reactRouter.browserHistory },
      _react2.default.createElement(
        _reactRouter.Route,
        { path: '/dashboard', component: MainApp },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: VisibleDashboard }),
        _react2.default.createElement(_reactRouter.Route, { path: 'newsfeeds', component: NewsfeedsView }),
        _react2.default.createElement(_reactRouter.Route, { path: 'clubs/club_map', component: ClubMainPage }),
        _react2.default.createElement(_reactRouter.Route, { path: 'clubs/club_map/:club_id', component: ClubDetailsPage }),
        _react2.default.createElement(_reactRouter.Route, { path: 'clubs/club_map/search/:postcode', component: ClubMainPage }),
        _react2.default.createElement(_reactRouter.Route, { path: 'lessons', component: VisibleLessonsView }),
        _react2.default.createElement(_reactRouter.Route, { path: 'lessons/:course_id', component: VisibleCourseView }),
        _react2.default.createElement(_reactRouter.Route, { path: 'lessons/search/:keywords', component: VisibleLessonsView })
      )
    )
  );
};

Root.propTypes = {
  store: _react.PropTypes.object.isRequired
};

exports.default = Root;

'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(TodoApp, (0, _redux.applyMiddleware)(_reduxThunk2.default));

store.dispatch(loadWeatherInfo());

if (document.getElementById('dashboard') != null) {
  (0, _reactDom.render)(_react2.default.createElement(Root, { store: store }), document.getElementById('dashboard'));
}

;'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var NewsfeedNave = exports.NewsfeedNave = function (_React$Component) {
  _inherits(NewsfeedNave, _React$Component);

  function NewsfeedNave(props) {
    _classCallCheck(this, NewsfeedNave);

    var _this = _possibleConstructorReturn(this, (NewsfeedNave.__proto__ || Object.getPrototypeOf(NewsfeedNave)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(NewsfeedNave, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(NavBar, null),
        React.createElement(
          'h1',
          null,
          ' This is the Newsfeed View'
        ),
        React.createElement(Footer, null)
      );
    }
  }]);

  return NewsfeedNave;
}(React.Component);

/* jshint ignore:start */
(function() {
  var WebSocket = window.WebSocket || window.MozWebSocket;
  var br = window.brunch = (window.brunch || {});
  var ar = br['auto-reload'] = (br['auto-reload'] || {});
  if (!WebSocket || ar.disabled) return;

  var cacheBuster = function(url){
    var date = Math.round(Date.now() / 1000).toString();
    url = url.replace(/(\&|\\?)cacheBuster=\d*/, '');
    return url + (url.indexOf('?') >= 0 ? '&' : '?') +'cacheBuster=' + date;
  };

  var browser = navigator.userAgent.toLowerCase();
  var forceRepaint = ar.forceRepaint || browser.indexOf('chrome') > -1;

  var reloaders = {
    page: function(){
      window.location.reload(true);
    },

    stylesheet: function(){
      [].slice
        .call(document.querySelectorAll('link[rel=stylesheet]'))
        .filter(function(link) {
          var val = link.getAttribute('data-autoreload');
          return link.href && val != 'false';
        })
        .forEach(function(link) {
          link.href = cacheBuster(link.href);
        });

      // Hack to force page repaint after 25ms.
      if (forceRepaint) setTimeout(function() { document.body.offsetHeight; }, 25);
    }
  };
  var port = ar.port || 9485;
  var host = br.server || window.location.hostname || 'localhost';

  var connect = function(){
    var connection = new WebSocket('ws://' + host + ':' + port);
    connection.onmessage = function(event){
      if (ar.disabled) return;
      var message = event.data;
      var reloader = reloaders[message] || reloaders.page;
      reloader();
    };
    connection.onerror = function(){
      if (connection.readyState) connection.close();
    };
    connection.onclose = function(){
      window.setTimeout(connect, 1000);
    };
  };
  connect();
})();
/* jshint ignore:end */
;
//# sourceMappingURL=compiled_components.js.map