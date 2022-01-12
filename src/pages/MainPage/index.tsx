import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleContainer from "../../components/ArticleContainer";
import { Outlet } from "react-router-dom";


const MainPage = () => {

    useEffect(() => {
        console.log("test")
    }, [])

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