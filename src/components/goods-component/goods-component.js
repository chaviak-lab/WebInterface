import React, { useState, useEffect } from 'react';
import { LOCALSTORE_TOTALITEMS } from "../../constants";
import ShopCard from "../shop-card/ShopCard";
const GoodsComponent = ({ itemsList }) => {
    const cards = [
        {
            id: 1, title: "Grapefruit (шт)", price: 12, imgUrl: "",
            added: 0
        },
        {
            id: 2, title: "Potatoes (kg)", price: 45, imgUrl: "",
            added: 0
        },
        {
            id: 3, title: "Large Orange (шт)", price: 15, imgUrl: "",
            added: 0
        },
        { id: 4, title: "Cucumber (шт)", price: 30, imgUrl: "", added: 0 },
    ];
    const [itemsToSell, setItemsToSell] = useState(itemsList);
    const [totalItems, setTotalItems] = useState([]);
    useEffect(() => {
        getLocalStore();
    }, []);
    const getLocalStore = () => {
        let cardsLocal = window.localStorage.getItem(LOCALSTORE_TOTALITEMS);
        cardsLocal = cardsLocal ? JSON.parse(cardsLocal) : null;
        if (cardsLocal && Array.isArray(cardsLocal) && cardsLocal.length > 0) {
            setTotalItems(cardsLocal);
        }
    };
    const addItem = (cardItem) => {
        const updatedTotalItems = [...totalItems, cardItem];
        setTotalItems(updatedTotalItems);
        window.localStorage.setItem(LOCALSTORE_TOTALITEMS, JSON.stringify(updatedTotalItems));
    };
    const removeItem = (cardItem) => {
        const updatedTotalItems = totalItems.filter(item => item.id !== cardItem.id);
        setTotalItems(updatedTotalItems);
        window.localStorage.setItem(LOCALSTORE_TOTALITEMS, JSON.stringify(updatedTotalItems));
    };

    const setSortTotalItems = (cards) => {
        setItemsToSell(cards);
    };
    return (
        <div>
           <main>
            <section className="container my-5">
                <div className="row">
                    
                    <div className="col-6 col-sm-5 col-md-4 col-xl-3">
                        <h3>Куплено на {totalItems.reduce((acc, item) => acc + item.price, 0)} грн.</h3>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    {cards.map(item => {
                        return (
                            <ShopCard
                                card={item}
                                key={item.id}
                                getItem={addItem}
                                removeItem={removeItem}
                            />
                        );
                    })}
                </div>
            </section>
        </main>
        </div>
    );
};
export default GoodsComponent;