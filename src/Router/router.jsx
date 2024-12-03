import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Login from "../components/RafComponents/Login";
import Register from "../components/RafComponents/Register";
import AddReview from "../components/Pages/AddReview";
import PrivateAddReview from "../components/Private/PrivateAddReview";
import MyReviews from "../components/Pages/MyReviews";
import PrivateMyReview from "../components/Private/PrivateMyReview";
import PrivateWatchlist from "../components/Private/PrivateWatchlist";
import WatchList from "../components/Pages/WatchList";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<h2>hi</h2>
            },
            {
                path:'/addreview',
                element:<PrivateAddReview><AddReview></AddReview></PrivateAddReview>
            },
            {
                path:'/myreviews',
                element:<PrivateMyReview><MyReviews></MyReviews></PrivateMyReview>
            },
            {
                path:'/watchlist',
                element:<PrivateWatchlist><WatchList></WatchList></PrivateWatchlist>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    },
    // {
    //     path:'/login',
    //     element: <Login></Login>
    // },
    // {
    //     path:'/register',
    //     element:<Register></Register>
    // },
    // {
    //     path:'/addreview',
    //     element:<PrivateAddReview><AddReview></AddReview></PrivateAddReview>
    // },
    // {
    //     path:'/myreviews',
    //     element:<PrivateMyReview><MyReviews></MyReviews></PrivateMyReview>
    // },
    // {
    //     path:'/watchlist',
    //     element:<PrivateWatchlist><WatchList></WatchList></PrivateWatchlist>
    // }

  ]);


export default router;