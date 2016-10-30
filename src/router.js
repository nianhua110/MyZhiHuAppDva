import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import DetailPage from './routes/DetailPage';
export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
        <Route path="/detail/:id" component={DetailPage}/>
    </Router>
  );
};
