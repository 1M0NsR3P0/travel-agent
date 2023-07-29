import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Home/Home";
import Erorr from "./Erorr";
import Contact from "../AboutUs/Contact/Contact";
import Places from "../Places/Places";
import Hotels from "../OurHotels/Hotels";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children:[
          {
            path:'/',
            element:<Home/>
          },
          {
            path:'/places',
            element:<Places/>
          },
          {
            path:'/blogs',
            element:<Home/>
          },
          {
            path:'/booking',
            element:<Home/>
          },
          {
            path:'/hotels',
            element:<Hotels/>
          },
          {
            path:'/about',
            element:<Home/>
          },
          {
            path:'/contact',
            element:<Contact/>
          }          
        ]
      },
      {
        path:'/*',
        element:<Erorr/>
      }
])
 export default router;