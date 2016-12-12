import * as types from '../constants/actionTypes'
export const selectImageAction=(image)=>({
    type:types.SELECTED_IMAGE,
    image
});
export  const selectVideoAction=(video)=>({
    type:types.SELECTED_VIDEO,
    video

})
export const searchMediaAction=(payload)=>({
    type:types.SEARCH_MEDIA_REQUEST,
    payload

})
//export function 或者const必须要声明
// The optional arguments in the action creators: payload, image, and video are 
//passed at the site of call/dispatch. Say, a user selects a video clip on our 
//app, selectVideoAction is dispatched which returns SELECTED_VIDEO action type
// and the selected video as payload. Similarly, when searchMediaAction is
// dispatched, SEARCH_MEDIA_REQUEST action type and payload are returned.