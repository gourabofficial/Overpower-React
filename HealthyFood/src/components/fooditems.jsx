const FoodItems = ({ items }) => {
    let [activeItems, setActiveItems] = useState([]);
  
    let onBuyButton = (item, event) => {
      let newItems = [...activeItems, item];
      setActiveItems(newItems);
    };
  
    return (
        <ul className="list-group">
            {items.map((item) => (
                <item
                    key={item}
                    foodItem={item}
                    bought={activeItems.includes(item)}
                    handleBuyButton={(event) => onBuyButton(item, event)}
                ></item>
            ))}
        </ul>
    );
};

export default FoodItems;