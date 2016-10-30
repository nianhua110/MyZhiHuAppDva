/**
 * Created by kyle on 16-10-22.
 */
import request from '../utils/request';
export async function query(){
    const obj = request('http://news-at.zhihu.com/api/4/news/latest')
    console.log(obj);
    return obj;
}