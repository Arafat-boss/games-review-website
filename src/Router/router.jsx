import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Login from "../components/RafComponents/Login";
import Register from "../components/RafComponents/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>
    },
    {
        path:'/login',
        element: <Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    }
  ]);


export default router;