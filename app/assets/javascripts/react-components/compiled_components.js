'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CourseApi = function () {
  function CourseApi() {
    _classCallCheck(this, CourseApi);
  }

  _createClass(CourseApi, null, [{
    key: 'getAllCourses',
    value: function getAllCourses() {
      return fetch('/courses.json').then(function (response) {
        return response.json();
      }).catch(function (error) {
        return error;
      });
    }
  }, {
    key: 'searchCourses',
    value: function searchCourses(keywords) {
      return fetch('/courses/search_courses.json?text=' + keywords).then(function (response) {
        return response.json();
      }).catch(function (error) {
        return error;
      });
    }
  }, {
    key: 'getCourseById',
    value: function getCourseById(courseId) {
      return fetch('/courses/' + courseId + '.json').then(function (response) {
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
  }]);

  return ClubApi;
}();

exports.default = ClubApi;

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
exports.loadCourse = loadCourse;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RECEIVE_COURSE_SUCCESS = 'RECEIVE_COURSE_SUCCESS';
var REQUEST_COURSE = 'REQUEST_COURSE';
var SELECT_LESSON = 'SELECT_LESSON';

function requestCourse(course) {
  return { type: LOAD_COURSES_SUCCESS, course: course };
}

function receiveCourse(course) {
  return { type: RECEIVE_COURSE_SUCCESS, course: course };
}

function selectLesson(lesson) {
  return { type: SELECT_LESSON, lesson: lesson };
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
exports.loadClubs = loadClubs;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOAD_CLUB_SUCCESS = 'LOAD_CLUB_SUCCESS';
var REQUEST_LOAD_CLUB = 'REQUEST_LOAD_CLUB';

function loadClubsSuccess(clubs) {
  return { type: LOAD_CLUB_SUCCESS, clubs: clubs };
}

function requestLoadClub() {
  return { type: REQUEST_LOAD_CLUB };
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
            { className: 'ui two column stackable grid' },
            _react2.default.createElement(
              'div',
              { className: 'four wide column' },
              _react2.default.createElement(
                'div',
                { className: 'course-navigation' },
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '/dashboard/lessons/recommended_courses' },
                      'Current Course'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '/dashboard/lessons/recommended_courses' },
                      'Recommended for you'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '/dashboard/lessons/recommended_courses' },
                      'Recents'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'twelve wide column' },
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
      $('.accordion').accordion();
    }
  }, {
    key: 'chapterAccordion',
    value: function chapterAccordion(chapter) {
      return _react2.default.createElement(
        'div',
        { className: 'title', key: "chapter_" + chapter.id },
        _react2.default.createElement('i', { className: 'dropdown icon' }),
        chapter.title
      );
    }
  }, {
    key: 'lessonsAccordion',
    value: function lessonsAccordion(chapter) {
      return _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(
          'div',
          { className: 'accordion' },
          chapter.lessons.map(function (lesson, index) {
            return _react2.default.createElement(
              'div',
              { className: 'title', key: "lesson_" + index, onClick: function onClick() {
                  return store.dispatch(selectLesson(lesson));
                } },
              lesson.title
            );
          })
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
    value: function activeLessonsAccordion(chapter) {
      return _react2.default.createElement(
        'div',
        { className: 'content active' },
        _react2.default.createElement(
          'div',
          { className: 'accordion transition visible', style: { display: "block !important" } },
          chapter.lessons.map(function (lesson, index) {
            return _react2.default.createElement(
              'div',
              { className: 'title', key: "lesson_" + index, onClick: function onClick() {
                  return store.dispatch(selectLesson(lesson));
                } },
              lesson.title
            );
          })
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
            { className: 'search-navigation' },
            _react2.default.createElement(
              'div',
              { className: 'ui icon input fluid' },
              _react2.default.createElement('i', { className: 'search icon' }),
              _react2.default.createElement('input', { type: 'text', placeholder: 'Search for specific chapter...' })
            )
          ),
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
                    tempLesson = this.activeLessonsAccordion(chapter);
                  } else {
                    tempChapter = this.chapterAccordion(chapter);
                    tempLesson = this.lessonsAccordion(chapter);
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
  isFetching: _react.PropTypes.bool.isRequired
};

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var mapCourseNavState = function mapCourseNavState(state) {
  return {
    course: state.CourseDetailsReducer.course,
    isFetching: state.CourseDetailsReducer.isFetching
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

  function CourseTabs() {
    _classCallCheck(this, CourseTabs);

    return _possibleConstructorReturn(this, (CourseTabs.__proto__ || Object.getPrototypeOf(CourseTabs)).apply(this, arguments));
  }

  _createClass(CourseTabs, [{
    key: 'componentDidUpdate',

    //  componentDidMount(){
    //    $('.tab-menu .item').tab()
    //  }

    value: function componentDidUpdate(prev, next) {
      $('.tab-menu .item').tab();
    }
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
        return _react2.default.createElement(
          'div',
          { className: 'ui segment' },
          _react2.default.createElement(
            'div',
            { className: 'ui pointing secondary menu tab-menu' },
            _react2.default.createElement(
              'a',
              { className: 'item active', 'data-tab': 'first' },
              'Overview'
            ),
            _react2.default.createElement(
              'a',
              { className: 'item', 'data-tab': 'second' },
              'Video'
            ),
            _react2.default.createElement(
              'a',
              { className: 'item', 'data-tab': 'third' },
              'Transcript'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'ui tab active', 'data-tab': 'first' },
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
            { className: 'ui tab', 'data-tab': 'second' },
            _react2.default.createElement(
              'div',
              { className: 'ui one column stackable grid' },
              _react2.default.createElement(
                'div',
                { className: 'fluid column' },
                _react2.default.createElement('iframe', { className: 'video-iframe', src: this.props.lesson.preferred_url, frameborder: '0', allowfullscreen: true })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'ui tab', 'data-tab': 'third' },
            _react2.default.createElement(
              'div',
              { className: 'transcript-content' },
              this.props.lesson.transcript
            )
          )
        );
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
      center: { lat: -37.863406, lng: 145.032180 },
      zoom: 11,
      mapStyle: {
        height: (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - 20 + "px"
      }
    };
    return _this;
  }

  _createClass(ClubMap, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(NavBar, null),
        _react2.default.createElement(
          'div',
          { className: 'map-overlay ui stackable grid', style: this.state.mapStyle },
          _react2.default.createElement(
            'div',
            { className: 'google-map twelve wide column' },
            _react2.default.createElement(
              _googleMapReact2.default,
              {
                defaultCenter: this.state.center,
                defaultZoom: this.state.zoom,
                bootstrapURLKeys: { key: "AIzaSyAgYzJwB6ihmfL635-dcwEFz7siTI9ke6A" } },
              _react2.default.createElement(AnyReactComponent, {
                lat: -37.863406,
                lng: 145.032180,
                text: 'Kreyser asdfasdfasdfgasdkfa sdfasd fajklsjkdf jkasdfjk  Avrora' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'four wide column' },
            'Club info section'
          )
        ),
        _react2.default.createElement(Footer, null)
      );
    }
  }]);

  return ClubMap;
}(_react2.default.Component);

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
  if (__DEV__) {
    if (offset < -40 || offset > 40) {
      console.error('HintBottomOffset is out of range, extend range at sass/markers/map_marker.sass'); // eslint-disable-line no-console
    }
  }
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

var textStyle = {
  width: '100%',
  textAlign: 'center',
  marginTop: 10,
  fontWeight: 'bold',
  fontSize: '18px',
  color: 'black'
};

function getMarkerTextStyle() {
  return textStyle;
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
      this.props.$onMouseAllow(false); // disable mouse move hovers
    }
  }, {
    key: 'onMouseLeaveContent',
    value: function onMouseLeaveContent() {
      this.props.$onMouseAllow(true); // enable mouse move hovers
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

    // no optimizations at all

  }, {
    key: 'render',
    value: function render() {
      // TODO add http://schema.org/docs/gs.html
      var scale = this.props.$hover || this.props.showBalloon ? K_SCALE_HOVER : this.props.scale;
      scale = this.props.hoveredAtTable ? K_SCALE_TABLE_HOVER : scale;

      var markerHolderStyle = getMarkerHolderStyle(this.props.size, this.props.origin);
      var markerStyle = getMarkerStyle(this.props.size, this.props.origin);

      var zIndexStyle = {
        zIndex: Math.round(scale * 10000) - (this.props.showBalloon ? 20 : 0) + (this.props.$hover ? K_HINT_HTML_DEFAULT_Z_INDEX : 0) // balloon
      };

      var textStyleDef = getMarkerTextStyle();
      var textStyle = calcMarkerTextStyle(scale, textStyleDef);

      var showHint = this.props.hoverState || this.props.showBalloonState; // || this.props.hoveredAtTable;

      // baloon position calc
      var mapWidth = this.props.$geoService.getWidth();
      var mapHeight = this.props.$geoService.getHeight();
      var markerDim = this.props.$getDimensions(this.props.$dimensionKey);

      var hintBaloonHorizontalPosStyle = getHintBaloonHorizontalPosStyle(markerDim.x, this.props.size.width, this.props.origin.x, mapWidth);
      var hintBaloonVerticalPosClass = getHintBaloonVerticalPosClass(markerDim.y, mapHeight);

      var hintBalloonBottomOffsetClass = getHintBottomOffsetClass(this.props.size.width, this.props.origin.x);

      // set baloon position at first and then animate (it must be some lib for react animations)
      var noTransClass = this.props.$hover === true && this.props.hoverState !== true ? 'hint--notrans' : '';
      var noTransBalloonClass = this.props.showBalloon === true && this.props.showBalloonState !== true ? 'hint--notrans' : '';

      var imageClass = this.props.image ? '' : this.props.imageClass;
      var imageStyle = this.props.image ? {
        backgroundImage: 'url(' + this.props.image + ')'
      } : null;

      var styleMarkerMarker = calcMarkerMarkerStyle(scale, zIndexStyle, markerStyle, imageStyle);

      // css hints library https://github.com/istarkov/html-hint
      return _react2.default.createElement(
        'div',
        {
          style: markerHolderStyle,
          className: (0, _classnames2.default)('map-marker hint hint--html', this.props.hintType, hintBalloonBottomOffsetClass, noTransClass, noTransBalloonClass, hintBaloonVerticalPosClass, this.props.showBalloon ? 'hint--balloon' : '', showHint ? 'hint--always' : 'hint--hidden') },
        _react2.default.createElement(
          'div',
          {
            style: styleMarkerMarker,
            className: (0, _classnames2.default)('map-marker__marker', imageClass) },
          this.props.withText ? _react2.default.createElement(
            'div',
            { style: textStyle },
            this.props.marker.get('id')
          ) : _react2.default.createElement('div', null)
        ),
        _react2.default.createElement(
          'div',
          {
            style: hintBaloonHorizontalPosStyle,
            className: (0, _classnames2.default)('hint__content map-marker-hint', this.props.showBalloon ? '' : 'noevents'),
            onMouseEnter: this.onMouseEnterContent.bind(this),
            onMouseLeave: this.onMouseLeaveContent.bind(this) },
          _react2.default.createElement(
            'div',
            {
              onClick: this._onCloseClick,
              className: (0, _classnames2.default)('map-marker-hint__close-button', this.props.showBalloon ? 'map-marker-hint__close-button--visible' : '') },
            'close'
          ),
          _react2.default.createElement(
            'div',
            { className: 'map-marker-hint__title' },
            _react2.default.createElement(
              'strong',
              null,
              this.props.marker.get('name')
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'map-marker-hint__address' },
            this.props.marker.get('address')
          ),
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('map-marker-hint__content', this.props.showBalloon ? 'map-marker-hint__content--visible' : '') },
            this.props.marker.get('description')
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'a',
              { className: (0, _classnames2.default)('map-marker-hint__ap-link', this.props.showBalloon ? 'map-marker-hint__ap-link--hidden' : '') },
              'Click to view more info'
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var K_TRANS_DELAY = 30;

      if (prevProps.$hover !== this.props.$hover) {
        setTimeout(function () {
          return _this2._onHoverStateChange(_this2.props.$hover);
        }, K_TRANS_DELAY);
      }

      if (prevProps.showBalloon !== this.props.showBalloon) {
        setTimeout(function () {
          return _this2._onShowBalloonStateChange(_this2.props.showBalloon);
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
  $dimensionKey: _react.PropTypes.any,
  $getDimensions: _react.PropTypes.func,
  $geoService: _react.PropTypes.any,
  $onMouseAllow: _react.PropTypes.func,

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
  hintType: _react.PropTypes.string
};

MapMarker.defaultProps = {
  scale: K_SCALE_NORMAL,
  hoverState: false,
  showBalloonState: false,
  withText: false,
  size: { width: 62, height: 60 },
  origin: { x: 15 / 62, y: 1 },
  imageClass: 'map-marker__marker--big',
  hintType: 'hint--info'
};

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
      store.dispatch(loadClubs());
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
      var markerId = childProps.marker.get('id');
      var index = this.props.markers.findIndex(function (m) {
        return m.get('id') === markerId;
      });
      if (this.props.onChildClick) {
        this.props.onChildClick(index);
      }
    }
  }, {
    key: 'onChildMouseEnter',
    value: function onChildMouseEnter(key, childProps) {
      var markerId = childProps.marker.get('id');
      var index = this.props.markers.findIndex(function (m) {
        return m.get('id') === markerId;
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
          null,
          _react2.default.createElement(NavBar, null),
          _react2.default.createElement(
            'div',
            { className: 'ui container' },
            _react2.default.createElement('div', { className: 'ui active centered inline loader' })
          ),
          _react2.default.createElement(Footer, null)
        );
      } else {

        //      const {rowFrom, rowTo} = getRealFromTo(this.props.visibleRowFirst, this.props.visibleRowLast, this.props.maxVisibleRows, this.props.markers.size);
        var rowFrom = 0;
        var rowTo = 20;
        var Markers = this.props.markers && this.props.markers.filter(function (m, index) {
          return index >= rowFrom && index <= rowTo;
        }).map(function (marker, index) {
          return _react2.default.createElement(MapMarker
          // required props
          , _extends({ key: marker.id,
            lat: marker.lat,
            lng: marker.lng,
            showBalloon: index + rowFrom === _this2.props.openBalloonIndex,
            onCloseClick: _this2.onBalloonCloseClick,
            hoveredAtTable: index + rowFrom === _this2.props.hoveredRowIndex,
            scale: getScale(index + rowFrom, _this2.props.visibleRowFirst, _this2.props.visibleRowLast, K_SCALE_NORMAL)
          }, markerDescriptions[marker.type], {
            marker: marker }));
        });

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(NavBar, null),
          _react2.default.createElement(
            'div',
            { className: 'map-overlay ui stackable grid', style: this.state.mapStyle },
            _react2.default.createElement(
              'div',
              { className: 'google-map twelve wide column' },
              _react2.default.createElement(
                _googleMapReact2.default,
                {
                  bootstrapURLKeys: { key: "AIzaSyAgYzJwB6ihmfL635-dcwEFz7siTI9ke6A" },
                  center: this.props.center.toJS(),
                  zoom: this.props.zoom,
                  onChildClick: this.onChildClick.bind(this),
                  onChildMouseEnter: this.onChildMouseEnter.bind(this),
                  onChildMouseLeave: this.onChildMouseLeave.bind(this),
                  margin: [K_MARGIN_TOP, K_MARGIN_RIGHT, K_MARGIN_BOTTOM, K_MARGIN_LEFT],
                  hoverDistance: K_HOVER_DISTANCE,
                  distanceToMouse: this.distanceToMouse.bind(this)
                },
                Markers
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'four wide column' },
              'Club info section'
            )
          ),
          _react2.default.createElement(Footer, null)
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
  isFetching: _react.PropTypes.bool
};

MainMapBlock.defaultProps = {
  center: new _immutable.List([-37.851221000000002, 144.72653700000001]),
  zoom: 10,
  visibleRowFirst: -1,
  visibleRowLast: -1,
  hoveredRowIndex: -1
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
    openBalloonIndex: state.ClubsReducer.get('openBalloonIndex')
  };
};

var ClubMapMain = (0, _reactRedux.connect)(clubMapState)(MainMapBlock);
exports.default = ClubMapMain;

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
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { course: {}, isFetching: true, currentLesson: {} };
  var action = arguments[1];

  switch (action.type) {
    case RECEIVE_COURSE_SUCCESS:
      return Object.assign({}, state, {
        course: action.course,
        isFetching: false,
        currentLesson: action.course.chapters[0].lessons[0]
      });

    case REQUEST_COURSE:
      return Object.assign({}, state, {
        isFetching: true
      });

    case SELECT_LESSON:
      return Object.assign({}, state, {
        currentLesson: action.lesson
      });

    default:
      return state;
  }
};

exports.default = CourseDetailsReducer;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  var _mapInfo;

  return _immutable2.default.fromJS({
    data: [],
    dataFiltered: [],

    mapInfo: (_mapInfo = {
      center: [59.938043, 30.337157]
    }, _defineProperty(_mapInfo, 'center', [-37.851221000000002, 144.72653700000001]), _defineProperty(_mapInfo, 'bounds', [60.325132160343145, 29.13415407031249, 59.546382183279206, 31.54015992968749]), _defineProperty(_mapInfo, 'marginBounds', [-36.2843135300829, 143.21655153124999, -38.58811868963835, 145.45776246874999]), _defineProperty(_mapInfo, 'zoom', 9), _mapInfo),

    openBalloonIndex: -1,

    hoverMarkerIndex: -1,

    tableRowsInfo: {
      hoveredRowIndex: -1,
      visibleRowFirst: 0,
      visibleRowLast: K_LAST_VISIBLE_ROW_AT_SERVER_RENDERING,
      maxVisibleRows: K_LAST_VISIBLE_ROW_AT_SERVER_RENDERING
    },
    clubs: [],
    isFetching: true
  });
}

var ClubsReducer = function ClubsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultMapState();
  var action = arguments[1];

  switch (action.type) {
    case LOAD_CLUB_SUCCESS:
      return state.set('data', action.clubs.clubs).set('dataFiltered', action.clubs.clubs).set('isFetching', false);

    case REQUEST_SEARCH_COURSE:
      return state.set('isFetching', true);
    default:
      return state;
  }
};

exports.default = ClubsReducer;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var TodoApp = (0, _redux.combineReducers)({
  NavReducer: NavReducer, CoursesReducer: CoursesReducer, CourseDetailsReducer: CourseDetailsReducer, ClubsReducer: ClubsReducer
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

  //  <p>
  //  Show:
  //    {" "}
  //    <NavLink filter="">
  //    Dashboard
  //    </NavLink>
  //    {", "}
  //    <NavLink filter="newsfeeds">
  //    Newsfeeds
  //    </NavLink>
  //    {", "}
  //    <NavLink filter="lessons">
  //    Lessons
  //    </NavLink>
  //  </p>

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
    value: function componentDidMount() {
      store.subscribe(function () {
        var newState = store.getState();
        this.setState({ className: newState.NavReducer.className });
      }.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'nav',
          { id: 'c-menu--slide-left', className: "c-menu c-menu--slide-left " + this.state.className },
          _react2.default.createElement(
            'div',
            { className: 'nav-content' },
            _react2.default.createElement(
              'div',
              { className: 'close-section' },
              _react2.default.createElement(
                'button',
                { className: 'ui icon button', onClick: function onClick() {
                    return _this2.props.dispatch(ToggleMenu());
                  } },
                _react2.default.createElement('i', { className: 'angle left icon' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'menu-header' },
              'Sportaide Menu'
            ),
            _react2.default.createElement(
              'ul',
              { className: 'c-menu__items' },
              _react2.default.createElement(
                'li',
                { className: 'c-menu__item' },
                _react2.default.createElement(
                  'a',
                  { href: '/', className: 'c-menu__link', onClick: function onClick() {
                      return _this2.props.dispatch(ToggleMenu());
                    } },
                  'Home'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'c-menu__item' },
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/dashboard/clubs/club_map', className: 'c-menu__link', onClick: function onClick() {
                      return _this2.props.dispatch(ToggleMenu());
                    } },
                  'Club Map'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'c-menu__item' },
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/dashboard/lessons', className: 'c-menu__link', onClick: function onClick() {
                      return _this2.props.dispatch(ToggleMenu());
                    } },
                  'Lessons'
                )
              )
            )
          )
        ),
        _react2.default.createElement('div', { id: 'c-mask', className: "c-mask " + this.state.className, onClick: function onClick() {
            return _this2.props.dispatch(ToggleMenu());
          } })
      );
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

exports.NavBar = NavBar = (0, _reactRedux.connect)()(NavBar);

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(_ref) {
  var dispatch = _ref.dispatch;
  return _react2.default.createElement(
    'nav',
    { className: 'footer' },
    _react2.default.createElement(
      'div',
      { className: 'ui container' },
      _react2.default.createElement(
        'div',
        { className: 'ui two column grid' },
        _react2.default.createElement(
          'div',
          { className: 'eight wide column' },
          _react2.default.createElement(
            'div',
            { className: 'menu-section' },
            _react2.default.createElement(
              'button',
              { className: 'ui button', href: '', onClick: function onClick() {
                  return dispatch(ToggleMenu());
                } },
              _react2.default.createElement('i', { className: 'icon align justify' }),
              'Menu'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'eight wide column' },
          _react2.default.createElement(
            'div',
            { className: 'general-search-bar' },
            _react2.default.createElement(
              'div',
              { className: 'ui icon input fluid' },
              _react2.default.createElement('input', { type: 'text', placeholder: 'Search...', onKeyUp: function onKeyUp(event) {
                  if (event.keyCode == 13) {
                    dispatch(requestSearchCourses());
                    return dispatch(searchCourses(event.target.value));
                  }
                } }),
              _react2.default.createElement('i', { className: 'search icon' })
            )
          )
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
        _react2.default.createElement(_reactRouter.IndexRoute, { component: MainView }),
        _react2.default.createElement(_reactRouter.Route, { path: 'newsfeeds', component: NewsfeedsView }),
        _react2.default.createElement(_reactRouter.Route, { path: 'clubs/club_map', component: ClubMapMain }),
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

(0, _reactDom.render)(_react2.default.createElement(Root, { store: store }), document.getElementById('dashboard'));

'use strict';

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