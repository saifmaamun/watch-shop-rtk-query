import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "../page/Home";
import Login from "../page/Login";
import Notfound from "../page/Notfound";

const routes =  createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "*",
    element: <Notfound/>,
  },
]);
export default routes;