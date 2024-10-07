import "./App.css";
import ClockHeading from "./ClockHeading";
import Time from "./Time";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className = "p-3 mb-2 bg-secondary text-white" >
      <ClockHeading></ClockHeading>
      <Time></Time>
    </div>
  );
}

export default App;
