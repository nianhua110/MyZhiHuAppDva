import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.less';
import Main from '../components/Main'

function IndexPage(props) {
  return (
      <div className={styles.normal}>
          <h1>知乎日报</h1>
          <hr />
          <Main {...props} />
      </div>
  );
}

IndexPage.propTypes = {
};
function mapStateToProps({ zhihuList }) {
    return { zhihuList };
}

export default connect(mapStateToProps)(IndexPage);
