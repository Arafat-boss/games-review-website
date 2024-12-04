import { Outlet } from "react-router-dom";
import Navbar from "../RafComponents/Navbar";
import Footer from "../RafComponents/Footer";
import Slider from "../RafComponents/Slider";
import HomePage from "../Pages/HomePage";

const MainLayout = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;