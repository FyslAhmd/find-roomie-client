import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Error404 from "../Pages/Error404";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import FindRoommate from "../Pages/FindRoommate";
import PrivateRoute from "../provider/PrivateRoute";
import RoomDetails from "../Pages/RoomDetails";
import BrowseListings from "../Pages/BrowseListings";
import MyListings from "../Pages/MyListings";
import UpdateRoom from "../Pages/UpdateRoom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:5000/featuredRoommate"),
        hydrateFallbackElement: <h1>loading</h1>,
      },
      {
        path: "/findRoommates",
        element: (
          <PrivateRoute>
            <FindRoommate></FindRoommate>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/roomInfo/${params.id}`),
        Component: RoomDetails,
      },
      {
        path: "/browseListing",
        loader: () => fetch("http://localhost:5000/roomInfo"),
        Component: BrowseListings,
      },
      {
        path: "/updateroom/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/roomInfo/${params.id}`),
        Component: UpdateRoom,
      },
      {
        path: "/myListing",
        element: (
          <PrivateRoute>
            <MyListings></MyListings>
          </PrivateRoute>
        ),
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
