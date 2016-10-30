/**
 * Created by kyle on 16-10-24.
 */
/**
 * Created by kyle on 16-10-22.
 */
import {queryDetail } from '../services/zhihuDetail'
export default {

    namespace: 'zhihuDetail',

    state: {
        body:''
    },

    subscriptions: {
        setup({ dispatch, history }) {
        },
    },

    effects: {
        *fetchRemote({ payload }, { call, put }) {
        },
        *query({ payload },{call, put}) {
            const queryObj = yield call(queryDetail, {});
            console.log('query detail ');
            console.log(queryObj);
            yield put({
                type: 'querySuccess',
                payload: {
                    data : queryObj,
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
            const newState = {...state, body:action.payload.data.data.body};
            console.log(newState)
            return newState;
        }
    },

}
