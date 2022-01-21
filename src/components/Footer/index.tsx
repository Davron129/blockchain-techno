import { Link } from 'react-router-dom';
import Styles from './FooterStyles.module.css'
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <footer className={Styles.footer}>
            <div className={Styles.footer__container}>
                <div className={Styles.footer__content}>
                    <div>
                        <Link className={Styles.about__contact} to="/contact">
                            Loyiha haqida & <br />
                            Biz bilan bog’lanish
                        </Link>
                    </div>
                    <div>
                        <span className={Styles.copyright}>
                            Blockchain Texno 2022 ©
                        </span>
                    </div>
                </div>
                <div className={Styles.go__top} onClick={() => scrollToTop()}>
                    <FiArrowUp />
                </div>
            </div>
        </footer>
    )
}

export default Footer