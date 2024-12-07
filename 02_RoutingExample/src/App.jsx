import './App.css'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Home } from './Components/Home'
import { Portfolio } from './Components/Portfolio'
import { Navbar } from './Components/Navbar';
import { Instagram } from './Components/Instagram';
import { About } from './Components/About';



const router = createBrowserRouter([
  {
    path: '/',
    element:
      <div>
        <Navbar />
        <Home />
      </div>
  },
  {
    path: '/Portfolio',
    element: <div>
      <Navbar />
    <Portfolio/>
    </div>
  },
  {
    path: '/Instagram',
    element: <div>
      <Navbar />
      <Instagram />
    </div>
  },{
    path: '/About',
    element: <div>
      <Navbar />
      <About />
    </div>
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
