import Styles from './ContactStyles.module.css';
import { FiInstagram } from 'react-icons/fi';
import { FaTelegramPlane  } from 'react-icons/fa';

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
            </div>
        </div>
    )
}

export default SocialLinks