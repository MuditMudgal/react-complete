import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './components/Dashboard';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Mocktests from './components/Mocktests';
import Blogs from './components/Blogs';
import Courses from './components/Courses';
import Notfound from "./components/Notfound";

const router = createBrowserRouter([
    {
        path: "/",
        element:
        (<div>
          <Navbar/>
          <Home/>
        </div>),
    },
    {
        path: "/about",
        element:
        (<div>
          <Navbar/>
          <About/>
        </div>),
    },
    {
        path: "/dashboard",
        element:
        <div>
          <Navbar/>
          <Dashboard/>
        </div>,
        children:[
          {path:'mocktests',
            element: <div>
              <Mocktests/>
            </div>
          },
          {path:'blogs',
            element: <div>
              <Blogs/>
            </div>
          },
          {path:'courses',
            element:<div>
              <Courses/>
            </div>
          }
        ]
    },
    {
      path:'*',
      element:<Notfound/>
    }
]);

function App() {
  return(
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
