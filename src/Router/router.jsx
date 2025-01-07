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
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPages></ErrorPages>,
        children:[
            {
                path:'/',
                element:<HomePage></HomePage>,
                loader: ()=> fetch('https://game-review-server.vercel.app/reviews/limit')
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path:'/support',
                element: <Support></Support>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/allReview',
                element:<AllReview></AllReview>,
                loader: ()=> fetch('https://game-review-server.vercel.app/reviews')
            },
            {
                path:'/addreview',
                element:<PrivateRoute><AddReview></AddReview></PrivateRoute>
            },
            {
                path:'/myreviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
                loader:()=> fetch('https://game-review-server.vercel.app/reviews')
            },
            {
                path:'/watchlist',
                element:<PrivateRoute><WatchList></WatchList></PrivateRoute>,
                loader:()=> fetch('https://game-review-server.vercel.app/watch'),
            },
            {
                path:'/reviewDetails/:id',
                element:<ReviewDetails></ReviewDetails>,
                loader: ({params}) => fetch(`https://game-review-server.vercel.app/reviews/${params.id}`)
            },
            {
                path:'/updateReview/:id',
                element:<UpdatePages></UpdatePages>,
                loader: ({params}) => fetch(`https://game-review-server.vercel.app/reviews/${params.id}`)
            }
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
    //     path:'/allReview',
    //     element:<AllReview></AllReview>,
    //     loader: ()=> fetch('https://game-review-server.vercel.app/reviews')
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
    //     loader:()=> fetch('https://game-review-server.vercel.app/watch'),
    //     element:<PrivateWatchlist><WatchList></WatchList></PrivateWatchlist>
    // },
    // {
    //     path:'/reviewDetails/:id',
    //     element:<ReviewDetails></ReviewDetails>,
    //     loader: ({params}) => fetch(`https://game-review-server.vercel.app/reviews/${params.id}`)
    // }

  ]);


export default router;