// Now, we can define searchMediaSaga; it serves as a middleman to call our API. 
import { put, call } from 'redux-saga/effects';
import { flickrImages, shutterStockVideos } from '../Api/api';
import * as types from '../constants/actionTypes';

// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export default function* searchMediaSaga({ payload }) {
  try {
    const videos = yield call(shutterStockVideos, payload)
    const images = yield call(flickrImages, payload)
// console.log(images,'firese')
    
    yield [
      put({ type: types.SHUTTER_VIDEOS_SUCCESS, videos }),
      put({ type: types.SELECTED_VIDEO, video: videos[0] }),
      put({ type: types.FLICKER_IMAGES_SUCCESS, images }),
      put({ type: types.SELECTED_IMAGE, image: images[0] })
    ]
  } catch(error){
      yield put({ type: 'SEARCH_MEDIA_ERROR', error });
  }
}
