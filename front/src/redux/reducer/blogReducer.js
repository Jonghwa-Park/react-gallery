import {HYDRATE} from "next-redux-wrapper";

const initialState = {
    data : [],
    originData : [],
    detail : {},
    comments : []
}

const blogReducer = (state = initialState, action) =>{
    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload}
        case 'GET_BLOG_LIST':
            return {...state, data:  [ ...action.payload], originData:  [...action.payload]}
        case 'GET_BLOG_DETAIL':
            return {...state, detail: {...action.payload}}
        case 'GET_BLOG_COMMENT_LIST':
            return {...state, comments: [...action.payload]}
        case 'POST_BLOG_COMMENT':
            console.log(`action.payload : ${JSON.stringify(action.payload)}`)
            return {...state, comments: [...state.comments, action.payload]}
        default:
            return state
    }
}

export default blogReducer