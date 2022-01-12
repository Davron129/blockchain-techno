import React, {useState} from "react";
import {FiMoon, FiSearch, FiSun} from "react-icons/fi";
import Logo from "../../assets/images/Logo.png";

import Styles from './HeaderStyles.module.css'

type ItemType = {
    link: string;
    text: string;
}

const HeaderItem = ({link, text}: ItemType) => {
    return (
        <li className={Styles.header__item}>
            <a href={link} className={Styles.header__link}>{text}</a>
        </li>
    )
}

const Header = () => {
    const[ isLight, setIsLight ] = useState<boolean>(true);

    return (
        <div className={Styles.header}>
            <div className={Styles.header__left}>
                <div className={Styles.header__logo}>
                    <img src={Logo} alt="Blockchain Techno Logo"/>
                </div>
            </div>
            <div className={Styles.header__middle}>
                <div className={Styles.searchbar}>
                    <form>
                        <input type="text" className={Styles.header__search} />
                        <FiSearch className={Styles.search__icon} />
                    </form>
                </div>
            </div>
            <div className={Styles.header__right}>
                <ul className={Styles.header__menu}>
                    <HeaderItem link={"#"} text={"Youtube"} />
                    <HeaderItem link={"#"} text={"Telegram"} />
                </ul>
                <label className={Styles.color__changer}>
                    <input
                        type="checkbox"
                        hidden={true}
                        checked={!isLight}
                        onChange={() => setIsLight(!isLight)}
                    />
                    <span className={Styles.bg}></span>
                    <FiSun className={`${Styles.icon} ${Styles.sun} ${isLight && Styles.active}`} />
                    <FiMoon className={`${Styles.icon} ${Styles.moon} ${!isLight && Styles.active}`} />
                </label>
            </div>
        </div>
    )
}

export default Header;