/**
 * Created by kyle on 16-10-24.
 */
import request from '../utils/request';
export async function queryDetail(){
    const obj = request('http://news-at.zhihu.com/api/4/news/3892357')
    console.log('query detail')
    console.log(obj);
    return obj;
}