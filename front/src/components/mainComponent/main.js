import React from 'react';
import PpSelection from "./ppSelection";
import Card from "./card";
import CategoryFilter from "./categoryFilter";
import Intro from "./intro";

const Main = () => {
    return (
        <div>
            <div className="page">
                <Intro/>
                <div className="page-content">
                    <div className="container">
                        <CategoryFilter/>
                        <Card/>
                        <PpSelection/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;