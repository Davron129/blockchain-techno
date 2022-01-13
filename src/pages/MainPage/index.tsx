import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleContainer from "../../components/ArticleContainer";
import { Outlet } from "react-router-dom";
import { enableScroll } from "../../redux/actions/scroll";


const MainPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(enableScroll())
        document.body.setAttribute("data-scroll", "true");
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