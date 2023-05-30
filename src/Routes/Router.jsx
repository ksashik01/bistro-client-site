import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OurOrder from "../Pages/Our-Order/OurOrder";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import SecrectPage from "../Shared-Pages/SecrectPages/SecrectPage";


 export  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[

            {
                path:'/',
                element:<Home></Home>
            },
          
            {
              path:'menu',
              element:<Menu></Menu>
          },

          {
            path:'order/:category',
            element:<OurOrder></OurOrder>
        },

        {
          path:'/login',
          element:<Login></Login>
      },

      {
        path:'/signup',
        element:<SignUp></SignUp>
    },

    {
      path:'/secret',
      element:<PrivateRoute><SecrectPage></SecrectPage></PrivateRoute>

    }


      ]
    },
  ]);