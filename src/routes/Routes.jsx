import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Error404 from "../Pages/Error404";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/findRoommates",
        element: <h1>find roommate</h1>,
      },
      {
        path: "/browseListing",
        element: <h1>browse listing</h1>,
      },
      {
        path: "/myListing",
        element: <h1>my listing</h1>,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "*",
    Component: Error404,
  },
]);

export default router;
