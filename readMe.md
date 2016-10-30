MyZhihuApp
====
#1,初始化
```
npm install dva
npm install dva-cli -g
mkdir MyZhiHuAppDva
dva -init
npm start
```
 浏览器打开localhost:8989 你就可以看到欢迎界面了
# 2,修改页面
- 打开/routes/IndexPage.less,改为：
```

.normal {
  margin: 50px;
  text-align: center;
}

.list {
  margin-top: 20px;
}

```
- 打开/routes/IndexPage.js改为：
```
 <h1>知乎日报</h1>
 ```
 查看浏览器就可以看到知乎日报了
 
# 3,设计模型 
- 在models目录下面新建一个zhihuList.jsx 添加如下代码
```javascript
 import {query } from '../services/zhihuList'
export default {

    namespace: 'zhihuList',

    state: {
        date:'',
        stories:[]
    },

    subscriptions: {
        setup({ dispatch, history }) {
        },
    },

    effects: {
        *fetchRemote({ payload }, { call, put }) {
        },
        *querry({ payload },{call, put}) {
           const queryObj = yield call(query, {});
            console.log('query ');
            console.log(queryObj);
            yield put({
                type: 'querySuccess',
                payload: {
                    data : queryObj.data,
                }
            });
        },
    },

    reducers: {
        fetch(state, action) {
            return { ...state, ...action.payload };
        },
        querySuccess(state, action) {
            console.log('querrySuccess')
            console.log(state);
            console.log(action);
            const newState = {...state, date:action.payload.data.date, stories:action.payload.data.stories};
            console.log(newState)
            return newState;
        }
    },

}
```
- 激活model ，在index.js里面第三条添加
```javascript
app.model(require('./models/zhihuList'));
```
# 4, 组件设计
- 组件设计非常简单，是固定模式的，主演完成两个任务
 -  一个是绑定模型
 - 一个是传递数据给无状态组件
- 代码如下
```java
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
```
# 5, 无状态组件设计
- 无状态组件就是显示数据和发送请求
```
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
```
- 其中Introduct为具体内容展示
```
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
```
# 6, 效果
- 到现在一个简陋的知乎日报列表就完成了。

- detail页面方法类似，就不多讲了。
# 遇到问题
- 跨域访问
[Chrome插件](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=zh-CN)
- 图片不显示问题
参考[知乎日报403解决](http://www.yatessss.com/2016/07/08/%E4%BD%BF%E7%94%A8vue%E5%AE%8C%E6%88%90%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5web%E7%89%88.html)

# 源代码
  

# 关于dva
- 请参考[dva](https://github.com/dvajs/dva)
