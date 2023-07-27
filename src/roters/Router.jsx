
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ConnectAWallate from "../pages/ConnectAWallate/ConnectAWallate";

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
        }
      ]
    },
  ]);

  export default router;