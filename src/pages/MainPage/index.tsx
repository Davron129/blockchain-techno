import { Outlet } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleContainer from "../../components/ArticleContainer";


const MainPage = () => {

    return (
        <>
            <Header />
            <ArticleContainer />
            <div className="main__content">
                <div className="outlet">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MainPage