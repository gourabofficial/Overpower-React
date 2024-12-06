import './App.css'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Home } from './Components/Home'
import { Portfolio } from './Components/Portfolio'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Portfolio',
    element: <Portfolio />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
