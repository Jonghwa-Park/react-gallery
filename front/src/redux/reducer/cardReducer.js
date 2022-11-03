import {HYDRATE} from "next-redux-wrapper";

const initialState = {
    data : [],
    originData : [],
    cardDetail : {}
}

const cardReducer = (state = initialState, action) =>{
    switch(action.type){
        case HYDRATE:
            return {...state, ...action.payload}
        case 'GET_CARD_LIST':
            return {...state, data:  [ ...action.payload], originData:  [...action.payload]}
        case 'GET_CARDLIST_BY_FILTER':
            return {...state, data: action.filterType !=='ALL' ? [...state.originData.filter((card) => card.category.includes(action.filterType))] : [...state.originData]}
        case 'GET_CARD_DETAIL':
            return {...state, cardDetail: {...action.payload}}
        default:
            return state
    }
}

export default cardReducer