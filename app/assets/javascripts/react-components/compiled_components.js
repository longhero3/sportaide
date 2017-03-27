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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var LessonsView = exports.LessonsView = function (_React$Component) {
  _inherits(LessonsView, _React$Component);

  function LessonsView(props) {
    _classCallCheck(this, LessonsView);

    var _this = _possibleConstructorReturn(this, (LessonsView.__proto__ || Object.getPrototypeOf(LessonsView)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(LessonsView, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'This is lessons view'
      );
    }
  }]);

  return LessonsView;
}(React.Component);

'use strict';

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
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'This is newsfeed view'
      );
    }
  }]);

  return NewsfeedsView;
}(React.Component);

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

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var TodoApp = (0, _redux.combineReducers)({
  NavReducer: NavReducer
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
        console.log(newState);
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
                  'Newsfeed'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'c-menu__item' },
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'c-menu__link' },
                  'Lessons'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'c-menu__item' },
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'c-menu__link' },
                  'Quizzes'
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
        _react2.default.createElement(_reactRouter.Route, { path: 'lessons', component: LessonsView })
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(TodoApp);

(0, _reactDom.render)(_react2.default.createElement(Root, { store: store }), document.getElementById('dashboard'));

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