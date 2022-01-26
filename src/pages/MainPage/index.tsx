import { Outlet } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ArticleContainer from "../../components/ArticleContainer";
import { Helmet } from "react-helmet";


const MainPage = () => {
    return (
        <>
            <Helmet>
                <title>Blockchain Texno</title>
                <meta name="description" content="Bitkoin, kriptovalyutalar, blokcheyn va markazlashmagan texnologiyalar haqida eng muhim voqealar haqida fikr yuritamiz." />
            </Helmet>
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