/**
 * Created by kyle on 16-10-24.
 */

import  React from  'react';
import {Card } from 'antd';
import { Router, Route, IndexRoute, Link } from 'dva/router';
const Title = (props) => {
    return (
        <div><h3><Link to="detail/3892357">{props.title}</Link></h3></div>
    );
};
export  default  Title;