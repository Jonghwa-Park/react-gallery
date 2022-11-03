import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCardList} from "../../redux/action/cardAction";
import {Link} from "react-router-dom";

const Card = () => {

    const cardData = useSelector((state) => state.cardReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        getCardList().then(function (result) {
            dispatch(result)
        })
    }, [dispatch])

    const cardList = cardData.data ?? []

    return (
        <div>
            <div className="container px-0">
                <div className="pp-gallery">
                    <div className="card-columns">
                        {
                            cardList && (cardList.map((item) => {
                                return (
                                    <div key={item.id} className="card"><Link to={`/detail/${item.id}`}>
                                        <figure className="pp-effect"><img className="img-fluid"
                                                                           src={item.imgSrc} alt={item.category}/>
                                            <figcaption>
                                                <div className="h4">{item.title}</div>
                                                <p>{item.category}</p>
                                            </figcaption>
                                        </figure>
                                    </Link></div>
                                )
                            }))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;