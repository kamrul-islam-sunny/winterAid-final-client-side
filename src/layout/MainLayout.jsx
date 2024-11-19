import { Outlet } from "react-router-dom";
import Banner from "../components/banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default MainLayout;