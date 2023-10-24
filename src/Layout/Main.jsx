import { Outlet } from "react-router-dom";
import Header from "../Pages/SharePage/Header";
import Footer from "../Pages/SharePage/Footer";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;