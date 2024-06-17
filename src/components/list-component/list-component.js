import React, { useState } from 'react';
import ShopCard from "../shop-card/ShopCard";
const ListComponents = () => {
    const cards = [
        {
            id: 1, title: "Nadorcott's (шт)", price: 12, imgUrl: "",
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
    const [totalItems, setTotalItems] = useState([]);
    const totalPriceClick = (item) => {
        console.log("totalPriceClick", cards);
        cards.forEach((itemF, indexF) => {
            if (itemF.id === item.id) {
                cards[indexF].added++;
            }
        });
        setTotalItems([...totalItems, item]);
    }
    const removeItem = (item) => {
        console.log("removeItem", item);
    }
    return (
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
                                getItem={totalPriceClick}
                                removeItem={removeItem}
                            />
                        );
                    })}
                </div>
            </section>
        </main>
    );
};
export default ListComponents;