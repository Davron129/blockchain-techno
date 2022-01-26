import Styles from './../Contact/ContactStyles.module.css';
import { FaTelegramPlane, FaFacebookF } from 'react-icons/fa';

const ShareLinks = ({id}: { id: string}) => {
    return (
        <div className={Styles.social__links}>
            <span className={Styles.text}>Maqolani ulashing</span>
            <div className={Styles.links__wrapper}>
                <a href={`https://t.me/share/url?url=https://blockchaintexno.uz/article/${id}`} className={Styles.link}>
                    <FaTelegramPlane />
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%2Fblockchaintexno.uz%2Farticle%2F${id}%2F&display=popup&ref=plugin&src=share_button`} className={Styles.link}>
                    <FaFacebookF />
                </a>
            </div>
        </div>
    )
}

export default ShareLinks