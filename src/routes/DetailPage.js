/**
 * Created by kyle on 16-10-24.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import  Detail from'../components/Detail';
function DetailPage(props) {
    return (
        <div className={styles.normal}>
            <h1>detail</h1>
            <hr />
            {console.log('detail page')}
            {console.log(props)}
            <Detail id={props.routeParams.id} detail={props.zhihuDetail} {...props}/>
        </div>
    );
}

DetailPage.propTypes = {
};
function mapStateToProps({ zhihuDetail }) {
    return { zhihuDetail };
}

export default connect(mapStateToProps)(DetailPage);
