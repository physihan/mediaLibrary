import initialState from './initialState';
import * as types from '../constants/actionTypes';

// Handles image related actions
export default function (state = initialState.images, action) {

    console.log("zheshitupian ")
    console.log(state)
    
  switch (action.type) {
    case types.FLICKER_IMAGES_SUCCESS:
      return [...state, action.images];
    case types.SELECTED_IMAGE:
      return { ...state, selectedImage: action.image };
    default:
      return state;
  }
}