import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/dashboard" component={MainApp}>
        <IndexRoute component={MainView}/>
        <Route path="newsfeeds" component={NewsfeedsView}></Route>
        <Route path="lessons" component={VisibleLessonsView}></Route>
        <Route path="lessons/:course_id" component={CourseView}></Route>
      </Route>
    </Router>
  </Provider>
  );

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
