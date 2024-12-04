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
import ErrorPages from "../components/Pages/ErrorPages";
import HomePage from "../components/Pages/HomePage";
import ReviewDetails from "../components/Pages/ReviewDetails";
import AllReview from "../components/Pages/AllReview";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPages></ErrorPages>,
        children:[
            {
                path:'/',
                element:<HomePage></HomePage>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/allReview',
                element:<AllReview></AllReview>,
                loader: ()=> fetch('http://localhost:5000/reviews')
            },
            {
                path:'/addreview',
                element:<PrivateAddReview><AddReview></AddReview></PrivateAddReview>
            },
            {
                path:'/myreviews',
                element:<PrivateMyReview><MyReviews></MyReviews></PrivateMyReview>,
                loader:()=> fetch('http://localhost:5000/reviews')
            },
            {
                path:'/watchlist',
                element:<PrivateWatchlist><WatchList></WatchList></PrivateWatchlist>
            },
            {
                path:'/reviewDetails/:id',
                element:<ReviewDetails></ReviewDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/reviews/${params.id}`)
            }
        ]
    },
    {
        path:'/login',
        element: <Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/allReview',
        element:<AllReview></AllReview>,
        loader: ()=> fetch('http://localhost:5000/reviews')
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
        path:'/reviewDetails/:id',
        element:<ReviewDetails></ReviewDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/reviews/${params.id}`)
    }

  ]);


export default router;