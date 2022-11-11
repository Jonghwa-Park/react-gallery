import axios from "axios";


export const getCardList = async () =>{
    const cardData = await axios.get('http://localhost:8000/cardList')
    return{
        type:'GET_CARD_LIST',
        payload : cardData.data
    }
}


export const getCardListByFilterCateogry = (filterType) =>{
    return{
        type : 'GET_CARDLIST_BY_FILTER',
        filterType
    }
}

export const getCardDetail = async(detailId) =>{
    const cardDetail = await axios.get(`http://localhost:8000/cardList/${detailId}`)
    return{
        type:'GET_CARD_DETAIL',
        payload : cardDetail.data
    }
}