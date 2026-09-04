import { Outlet } from "react-router-dom";
import Navbar from "../RafComponents/Navbar";
import Footer from "../RafComponents/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-200 text-base-content transition-colors duration-200">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
