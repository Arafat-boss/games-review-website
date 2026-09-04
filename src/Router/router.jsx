import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Login from "../components/RafComponents/Login";
import Register from "../components/RafComponents/Register";
import AddReview from "../components/Pages/AddReview";
import MyReviews from "../components/Pages/MyReviews";
import WatchList from "../components/Pages/WatchList";
import ErrorPages from "../components/Pages/ErrorPages";
import HomePage from "../components/Pages/HomePage";
import ReviewDetails from "../components/Pages/ReviewDetails";
import AllReview from "../components/Pages/AllReview";
import UpdatePages from "../components/Pages/UpdatePages";
import ContactUs from "../components/Pages/ContactUs";
import Support from "../components/Pages/Support";
import PrivateRoute from "../components/Private/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPages />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () =>
          fetch("https://game-review-server.vercel.app/reviews/limit"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allReview",
        element: <AllReview />,
        loader: () =>
          fetch("https://game-review-server.vercel.app/reviews"),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/addreview",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://game-review-server.vercel.app/reviews"),
      },
      {
        path: "/watchlist",
        element: (
          <PrivateRoute>
            <WatchList />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://game-review-server.vercel.app/watch"),
      },
      {
        path: "/reviewDetails/:id",
        element: <ReviewDetails />,
        loader: ({ params }) =>
          fetch(`https://game-review-server.vercel.app/reviews/${params.id}`),
      },
      {
        path: "/updateReview/:id",
        element: (
          <PrivateRoute>
            <UpdatePages />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://game-review-server.vercel.app/reviews/${params.id}`),
      },
    ],
  },
]);

export default router;