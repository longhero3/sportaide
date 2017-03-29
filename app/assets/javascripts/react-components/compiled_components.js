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
exports.loadCoursesSuccess = loadCoursesSuccess;
exports.loadCourses = loadCourses;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';

function loadCoursesSuccess(courses) {
  return { type: LOAD_COURSES_SUCCESS, courses: courses };
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
      console.log('go here');
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
      store.dispatch(loadCourses());
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
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'a',
                      { href: '/dashboard/lessons/recommended_courses' },
                      'Search'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'twelve wide column' },
              _react2.default.createElement(
                'div',
                { className: 'ui one course-list' },
                this.props.courses.map(function (course) {
                  return _react2.default.createElement(CourseBlock, {
                    key: course.id,
                    course: course
                  });
                })
              )
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
  dispatch: _react.PropTypes.func.isRequired
};

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var mapStateToProps = function mapStateToProps(state) {
  return {
    courses: state.CoursesReducer
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

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CourseNav = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

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
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "chapter-navigation" },
        _react2.default.createElement("div", { className: "search-navigation" }),
        _react2.default.createElement(
          "div",
          { className: "chapter-wrapper" },
          _react2.default.createElement(
            "div",
            { className: "chapter-content" },
            _react2.default.createElement(
              "div",
              { className: "ui styled accordion" },
              _react2.default.createElement(
                "div",
                { className: "title active" },
                _react2.default.createElement("i", { className: "dropdown icon" }),
                "Level 1"
              ),
              _react2.default.createElement(
                "div",
                { className: "content active" },
                _react2.default.createElement(
                  "div",
                  { className: "accordion transition visible", style: { display: "block !important" } },
                  _react2.default.createElement(
                    "div",
                    { className: "title" },
                    "Level 1A"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "title" },
                    "Level 1B"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "title" },
                    "Level 1C"
                  )
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "title" },
                _react2.default.createElement("i", { className: "dropdown icon" }),
                "Level 2"
              ),
              _react2.default.createElement(
                "div",
                { className: "content" },
                _react2.default.createElement(
                  "p",
                  null,
                  "Welcome to level 2"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "accordion" },
                  _react2.default.createElement(
                    "div",
                    { className: "active title" },
                    "Level 2A"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "title" },
                    "Level 2B"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "title" },
                    "Level 2C"
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CourseNav;
}(_react2.default.Component);

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
    key: 'componentDidMount',
    value: function componentDidMount() {
      $('.tab-menu .item').tab();
    }
  }, {
    key: 'render',
    value: function render() {
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
        _react2.default.createElement('div', { className: 'ui tab active', 'data-tab': 'first' }),
        _react2.default.createElement(
          'div',
          { className: 'ui tab segment', 'data-tab': 'second' },
          _react2.default.createElement(
            'div',
            { className: 'ui top attached tabular menu' },
            _react2.default.createElement(
              'a',
              { className: 'item active', 'data-tab': 'second/a' },
              '2A'
            ),
            _react2.default.createElement(
              'a',
              { className: 'item', 'data-tab': 'second/b' },
              '2B'
            ),
            _react2.default.createElement(
              'a',
              { className: 'item', 'data-tab': 'second/c' },
              '2C'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'ui bottom attached tab segment active', 'data-tab': 'second/a' },
            '2A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'ui bottom attached tab segment', 'data-tab': 'second/b' },
            '2B'
          ),
          _react2.default.createElement(
            'div',
            { className: 'ui bottom attached tab segment', 'data-tab': 'second/c' },
            '2C'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'ui tab segment', 'data-tab': 'third' },
          _react2.default.createElement(
            'div',
            { className: 'ui top attached tabular menu' },
            _react2.default.createElement(
              'a',
              { className: 'item active', 'data-tab': 'third/a' },
              '3A'
            ),
            _react2.default.createElement(
              'a',
              { className: 'item', 'data-tab': 'third/b' },
              '3B'
            ),
            _react2.default.createElement(
              'a',
              { className: 'item', 'data-tab': 'third/c' },
              '3C'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'ui bottom attached tab segment active', 'data-tab': 'third/a' },
            '3A'
          ),
          _react2.default.createElement(
            'div',
            { className: 'ui bottom attached tab segment', 'data-tab': 'third/b' },
            '3B'
          ),
          _react2.default.createElement(
            'div',
            { className: 'ui bottom attached tab segment', 'data-tab': 'third/c' },
            '3C'
          )
        )
      );
    }
  }]);

  return CourseTabs;
}(_react2.default.Component);

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
      $('.accordion').accordion();
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
                    _reactRouter.Link,
                    { to: '/dashboard/newsfeeds', className: 'section' },
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
                    "Course 101"
                  )
                ),
                _react2.default.createElement(
                  'h1',
                  { className: 'default-title' },
                  ' Introduction to footy 101'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'ui container courses-container' },
          _react2.default.createElement(
            'div',
            { className: 'ui two column stackable grid' },
            _react2.default.createElement(
              'div',
              { className: 'five wide column' },
              _react2.default.createElement(CourseNav, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'eleven wide column' },
              _react2.default.createElement(CourseTabs, null)
            )
          )
        ),
        _react2.default.createElement(Footer, null)
      );
    }
  }]);

  return CourseView;
}(_react2.default.Component);

//CourseView.propTypes = {
//  courses: PropTypes.array.isRequired
//}

;'use strict';

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
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
};

exports.default = CoursesReducer;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var TodoApp = (0, _redux.combineReducers)({
  NavReducer: NavReducer, CoursesReducer: CoursesReducer
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
                  { href: '#', className: 'c-menu__link' },
                  'Dashboard'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'c-menu__item' },
                _react2.default.createElement(
                  _reactRouter.Link,
                  { to: '/dashboard/newsfeeds', className: 'c-menu__link', onClick: function onClick() {
                      return _this2.props.dispatch(ToggleMenu());
                    } },
                  'Newsfeed'
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
        _react2.default.createElement(_reactRouter.Route, { path: 'lessons', component: VisibleLessonsView }),
        _react2.default.createElement(_reactRouter.Route, { path: 'lessons/:course_id', component: CourseView })
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