import { createBrowserRouter } from "react-router-dom";
import Whitepaper from "../Pages/Whitepaper/Whitepaper";
import App from "../App";
import Home from "../Pages/Home/Home";
import Referral from "../Pages/Referral/Referral";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/white-paper",
        element: <Whitepaper></Whitepaper>,
      },
      {
        path: "/referral",
        element: <Referral></Referral>,
      },
    ],
  },
]);

export default router;
