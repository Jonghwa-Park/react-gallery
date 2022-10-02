import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getCardListByFilterCateogry} from "../../redux/action/cardAction";

const CategoryFilter = () => {

    const dispatch = useDispatch()
    const [selectedFilter, setSelectedFilter] = useState('ALL')

    function clickFilter(type) {
        setSelectedFilter(type)
        dispatch(getCardListByFilterCateogry(type))
    }

    return (
        <div>
            <div className="container px-0 py-4">
                <div className="pp-category-filter">
                    <div className="row">
                        <div className="col-sm-12">
                            <a className={selectedFilter === 'ALL'? 'btn btn-primary pp-filter-button' : 'btn btn-outline-primary pp-filter-button'} onClick={() =>clickFilter('ALL')}  href="#" >모두</a>
                            <a className={selectedFilter === 'CITY'? 'btn btn-primary pp-filter-button' : 'btn btn-outline-primary pp-filter-button'} onClick={() =>clickFilter('CITY')} href="#" >도시</a>
                            <a className={selectedFilter === 'NATURE'? 'btn btn-primary pp-filter-button' : 'btn btn-outline-primary pp-filter-button'}  onClick={() =>clickFilter('NATURE')} href="#" >자연</a>
                            <a className={selectedFilter === 'DAUGHTERS'? 'btn btn-primary pp-filter-button' : 'btn btn-outline-primary pp-filter-button'} onClick={() =>clickFilter('DAUGHTERS')} href="#" >아이들</a>
                            <a className={selectedFilter === 'WEDDING'? 'btn btn-primary pp-filter-button' : 'btn btn-outline-primary pp-filter-button'} onClick={() =>clickFilter('WEDDING')}  href="#" >웨딩</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryFilter;