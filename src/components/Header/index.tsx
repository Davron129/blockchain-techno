import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers/store";
import {FiMoon, FiSun} from "react-icons/fi";
import { ReactComponent as Logo } from '../../assets/images/ic_logo.svg';

import Styles from './HeaderStyles.module.css';
import { lightScheme, darkScheme } from "../../redux/actions/colorScheme";

type ItemType = {
    link: string;
    text: string;
}

const HeaderItem = ({link, text}: ItemType) => {
    return (
        <li className={Styles.header__item}>
            <a href={link} className={Styles.header__link} target={"_blank"} rel="noreferrer">{text}</a>
        </li>
    )
}

const Header = () => {
    const dispatch = useDispatch();
    const colorScheme = useSelector((state: RootState) => state.colorScheme.isLight);

    return (
        <div className={Styles.header}>
            <div className={Styles.header__container}>
                <div className={Styles.header__left}>
                    <div className={Styles.header__logo}>
                        {
                            colorScheme 
                                ? <Logo/>
                                : <Logo fill="#FFF"/>
                        }
                    </div>
                </div>
                <div className={Styles.header__right}>
                    <ul className={Styles.header__menu}>
                        <HeaderItem link={"https://www.youtube.com/channel/UCBFMWBJkz5vPSuqYqc_6tRg"} text={"Youtube"} />
                        <HeaderItem link={"https://t.me/blockchaintexno"} text={"Telegram"} />
                    </ul>
                    <label className={Styles.color__changer}>
                        <input
                            type="checkbox"
                            hidden={true}
                            checked={colorScheme}
                            onChange={(e) => { 
                                e.target.checked ? dispatch(lightScheme()) : dispatch(darkScheme());
                            }}
                        />
                        <span className={Styles.bg}></span>
                        <FiSun className={`${Styles.icon} ${Styles.sun} ${colorScheme && Styles.active}`} />
                        <FiMoon className={`${Styles.icon} ${Styles.moon} ${!colorScheme && Styles.active}`} />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Header;