import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/reducers/store";
import {FiMoon, FiSearch, FiSun} from "react-icons/fi";
import Logo from "../../assets/images/Logo.png";
import LogoLight from '../../assets/images/logoLight.png';

import Styles from './HeaderStyles.module.css';
import { lightScheme, darkScheme } from "../../redux/actions/colorScheme";

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
    const dispatch = useDispatch();
    const colorScheme = useSelector((state: RootState) => state.colorScheme.isLight);

    return (
        <div className={Styles.header}>
            <div className={Styles.header__left}>
                <div className={Styles.header__logo}>
                    {
                        colorScheme 
                            ? <img src={Logo} alt="Blockchain Techno Logo"/>
                            : <img src={LogoLight} alt="Blockchain Techno Logo"/>
                    }
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
                        checked={colorScheme}
                        onChange={(e) => { 
                            e.target.checked ? dispatch(lightScheme()) : dispatch(darkScheme());
                            console.log(e.target.checked);
                            console.log(colorScheme)
                            
                         }}
                    />
                    <span className={Styles.bg}></span>
                    <FiSun className={`${Styles.icon} ${Styles.sun} ${colorScheme && Styles.active}`} />
                    <FiMoon className={`${Styles.icon} ${Styles.moon} ${!colorScheme && Styles.active}`} />
                </label>
            </div>
        </div>
    )
}

export default Header;