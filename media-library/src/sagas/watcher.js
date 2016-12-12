import {takeLatest} from 'redux-saga';
import searchMediaSaga from './mediaSaga';
import * as types from '../constants/actionTypes';
export default function* watchSearchMedia(){
    yield* takeLatest(types.SEARCH_MEDIA_REQUEST,searchMediaSaga)
}
// redux-saga is a library that aims to make side effects
// (i.e. asynchronous things like data fetching and impure things
// like accessing the browser cache) in React/Redux applications easier and better 