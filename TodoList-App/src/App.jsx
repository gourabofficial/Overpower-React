import AppName from "./Components/AppName";
import Mytask from "./Components/Mytask";
import TodoInput from "./Components/TodoInput";
import './App.css';


function App() {
  return (
    <center class="container text-center">
      <AppName />
      <TodoInput />

      <div class="task">
      <Mytask />

      </div>

    </center>
  );
}

export default App;
