import React from 'react';
import {Button } from 'antd';
import  Introduction from './Introduction'
const Main = (props) => {

  return (
    <div>
        <Button type="ghost" onClick={() =>(console.log('hi'), props.dispatch({type:'zhihuList/querry'}))}>get</Button>
        {props.zhihuList.stories.map((val, i) => (console.log(val), <Introduction key={i} introduction = {val}/>))}
       <Introduction />
    </div>
  );
};

Main.propTypes = {
};

export default Main;
