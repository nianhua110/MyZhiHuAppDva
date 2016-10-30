/**
 * Created by kyle on 16-10-22.
 */
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
