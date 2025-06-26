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
import Loadings from "../Pages/Loadings";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:5000/featuredRoommate"),
        hydrateFallbackElement: <Loadings></Loadings>,
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
        element: (
          <PrivateRoute>
            <RoomDetails></RoomDetails>
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <UpdateRoom></UpdateRoom>
          </PrivateRoute>
        ),
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
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/contact",
        Component: ContactUs,
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
