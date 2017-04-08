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
                      _react2.default.createElement('img', { src: 'https://preview.ibb.co/g1CTrF/fullsizeoutput_3e1.jpg', alt: 'Image and video hosting by TinyPic' }),
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
      center: { lat: 59.95, lng: 30.33 },
      zoom: 11
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
          _googleMapReact2.default,
          {
            defaultCenter: this.state.center,
            defaultZoom: this.state.zoom,
            bootstrapURLKeys: { key: "AIzaSyAgYzJwB6ihmfL635-dcwEFz7siTI9ke6A" } },
          _react2.default.createElement(AnyReactComponent, {
            lat: 59.955413,
            lng: 30.337844,
            text: 'Kreyser Avrora' })
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

var _redux = require('redux');

var TodoApp = (0, _redux.combineReducers)({
  NavReducer: NavReducer, CoursesReducer: CoursesReducer, CourseDetailsReducer: CourseDetailsReducer
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
        _react2.default.createElement(_reactRouter.Route, { path: 'clubs/club_map', component: ClubMap }),
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