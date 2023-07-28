
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ConnectAWallate from "../pages/ConnectAWallate/ConnectAWallate";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Marketplace from "../pages/Marketplace/Marketplace";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/connect-a-Wallet',
          element:<ConnectAWallate></ConnectAWallate>
        },
        {
          path:'/signIn',
          element:<SignIn></SignIn>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/marketplace',
          element:<Marketplace></Marketplace>
        }
      ]
    },
  ]);

  export default router;