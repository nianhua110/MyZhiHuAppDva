/**
 * Created by kyle on 16-10-24.
 */
import  React from  'react';
import {Card } from 'antd';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import Title from './Title';
import {convertImageUrl } from '../utils/utils';
class  Introduction extends  React.Component {
    render( ){
        let title, img;
        try{
            title = this.props.introduction.title;
            img = this.props.introduction.images[0];
        }catch (e){
            title=" ";
            img = " ";
        }

        return (
          <div>
              <Card


              >
                  <Title title={title}/>
                      <img src={convertImageUrl(img)}/>
          </Card>
          </div>
        );
    }
}
export  default  Introduction;
