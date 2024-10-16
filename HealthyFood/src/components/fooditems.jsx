import { useState } from 'react';

const FoodItems = ({ items }) => {
    let [activeItems, setActiveItems] = useState([]);

    let onBuyButton = (item, event) => {
        let newItems = [...activeItems, item];
        setActiveItems(newItems);
    };

    return (
        <ul className="list-group">
            {items.map((item) => (
                <li key={item} className="list-group-item">
                    {item} 
                    <button onClick={(event) => onBuyButton(item, event)}>
                        {activeItems.includes(item) ? 'Bought' : 'Buy'}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default FoodItems;
