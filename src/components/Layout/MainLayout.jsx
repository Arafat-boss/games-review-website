import { Outlet } from "react-router-dom";
import Navbar from "../RafComponents/Navbar";
import Footer from "../RafComponents/Footer";

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