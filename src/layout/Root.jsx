import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


const Root = () => {
    return (
        <div className="">
            <div className="fixed z-20 top-0 w-full bg-base-200 h-[80px;] flex items-center justify-center">
            <Navbar></Navbar>
            </div>
            <div className="relative top-20">
            <Outlet></Outlet>
            </div>
            <div className="fixed">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;