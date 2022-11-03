import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCardDetail} from "../../redux/action/cardAction";

const Detail = () => {

    const detail = useParams().detailId

    const cardData = useSelector((state) => state.cardReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        getCardDetail(detail).then(function(result){
            dispatch(result)
        })
    }, [dispatch])

    const cardDetail = cardData.cardDetail ?? {}

    return (
        <div>
            <div className="page-content">
                <div className="container">
                    <div className="container pp-section">
                        <div className="h3 font-weight-normal">{cardDetail.title}</div>
                        <img className="img-fluid mt-4" src={`/images/${detail}`}/>
                        <div className="row mt-5">
                            <div className="col-md-3">
                                <div className="h5">Tags</div>
                                {
                                    cardDetail && cardDetail.tags?.map((tag) =>{
                                        return(
                                            <a className="mr-1 badge badge-primary" href="#">{tag}</a>
                                        )
                                    })
                                }
                                <div className="h5 pt-4">Year</div>
                                <p>{cardDetail.year ?? ''}</p>
                            </div>
                            <div className="col-md-9">
                                {cardDetail.content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;