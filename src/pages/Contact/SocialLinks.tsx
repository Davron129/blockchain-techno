import Styles from './ContactStyles.module.css';
import { BsTwitter } from 'react-icons/bs';

const SocialLinks = () => {
    return (
        <div className={Styles.social__links}>
            <span className={Styles.text}>Bizni kuzatib boring!</span>
            <div className={Styles.links__wrapper}>
                <div className={Styles.link}>
                    <BsTwitter />
                </div>
                <div className={Styles.link}>
                    <BsTwitter />
                </div>
                <div className={Styles.link}>
                    <BsTwitter />
                </div>
                <div className={Styles.link}>
                    <BsTwitter />
                </div>
                <div className={Styles.link}>
                    <BsTwitter />
                </div>
            </div>
        </div>
    )
}

export default SocialLinks