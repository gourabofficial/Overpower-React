import FoodItems from "./components/fooditems"

function App() {
  const foodItemsList = ["Apple", "Banana", "Carrot"]; // example list of items

  return (
    <FoodItems items={foodItemsList} />
  );
}

export default App;
