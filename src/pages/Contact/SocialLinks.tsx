import Styles from './ContactStyles.module.css';
import { FiInstagram,FiDribbble } from 'react-icons/fi';
import { FaTelegramPlane, FaBehance } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div className={Styles.social__links}>
            <span className={Styles.text}>Bizni kuzatib boring!</span>
            <div className={Styles.links__wrapper}>
                <a target={"_blank"} rel={"noreferrer"} href="https://t.me/fidostudio" className={Styles.link}>
                    <FaTelegramPlane />
                </a>
                <a target={"_blank"} rel={"noreferrer"} href="https://www.instagram.com/fido_studio" className={Styles.link}>
                    <FiInstagram />
                </a>
                <a target={"_blank"} rel={"noreferrer"} href="https://dribbble.com/fidostudio" className={Styles.link}>
                    <FiDribbble />
                </a>
                <a target={"_blank"} rel={"noreferrer"} href="https://www.behance.net/fidostudio" className={Styles.link}>
                    <FaBehance />
                </a>
            </div>
        </div>
    )
}

export default SocialLinks