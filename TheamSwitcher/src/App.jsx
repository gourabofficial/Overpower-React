import { useState } from "react";
import "./App.css";
import Crad from "./Crad";
import Button from "./Button";
import Theme from "./Theme";


function App() {
  const [count, setCount] = useState(0);

  return (
<Theme>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <Button />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Crad />
        </div>
      </div>
    </div>
    </Theme>
  );
}

export default App;
