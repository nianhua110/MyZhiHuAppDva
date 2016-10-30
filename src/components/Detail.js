/**
 * Created by kyle on 16-10-24.
 */
import React from 'react';
import {Button, Modal } from 'antd';
import  Introduction from './Introduction'
import  {convertDetailImageUrl, convertImageUrl2 } from '../utils/utils'
class  Detail extends React.Component{
    componentDidMount(){
        console.log('detail componet did mount')
        this.props.dispatch({type:'zhihuDetail/query'})
    }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('cwr');
    Modal.success({
      title: 'This is a success message',
      content: 'some messages...some messages...',
    });
    let s={__html: this.props.detail.body}
    console.log(s);
    console.log('test');
  }

  render(){
        console.log('Detail render');
        //console.log(this.props.detail.body);
    let newBody = convertImageUrl2(this.props.detail.body);
    console.log(newBody);
        return (
          <div dangerouslySetInnerHTML={{__html:newBody}}>



          </div>
        );
    }

}

Detail.propTypes = {
};

export default Detail;
