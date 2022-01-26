import Header from "../../components/Header";
import ErrorImg from '../../assets/images/ErrorImg.png';
import Styles from './ErrorPage.module.css'

const ErrorPage = () => {
    return (
        <>
            <Header />
            <div className={Styles.error__wrapper}>
                <div className={Styles.error__container}>
                    <div className={Styles.error__code}>
                        <span>404</span>
                    </div>
                    <div className={Styles.error__img}>
                        <img src={ErrorImg} alt="Page Not Found Error Blockchain texno"/>
                    </div>
                </div>
            </div>
        </>

);
}

export default ErrorPage