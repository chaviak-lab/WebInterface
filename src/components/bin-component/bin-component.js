import React from 'react';
import { LOCALSTORE_TOTALITEMS } from "../../constants";
const BinComponent = () => {
   
    const getLocalStore = () => {
       
        let cardsLocal = window.localStorage.getItem(LOCALSTORE_TOTALITEMS);
        cardsLocal = cardsLocal ? JSON.parse(cardsLocal) : null;
        
        let cards = "No selected items";
        if (cardsLocal && Array.isArray(cardsLocal) && cardsLocal.length > 0) {
            cards = cardsLocal.map(item => (
                <div key={item.id}>
                    {item.title}
                </div>
            ));
            console.log(cardsLocal);
        }

        return cards;
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <h2>Selected items list</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                    {getLocalStore()}
                </div>
            </div>
        </div>
    );
};
export default BinComponent;