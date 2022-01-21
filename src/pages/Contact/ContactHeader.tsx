import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/store';
import { getFormattedDay } from '../../utils/data';

import Styles from './ContactStyles.module.css';
import Logo from '../../assets/images/Logo.png';
import LogoLight from '../../assets/images/logoLight.png';

const ContactHeader = ({handleClick}: {handleClick:Function}) => {
    const colorScheme = useSelector((state: RootState) => state.colorScheme.isLight);

    return (
        <div className={Styles.article__header}>
            <div className={Styles.logo} style={{ cursor: "pointer"}} onClick={() => handleClick()}>
                {
                    colorScheme
                        ? <img src={Logo} alt="Blockchain texno logo" />
                        : <img src={LogoLight} alt="Blockchain texno logo" />
                }
                
            </div>
            <div className={Styles.date}>
                <span>{getFormattedDay(new Date().getTime())}</span>
            </div>
            <div className={Styles.description}>
                <span>
                    Bitkoin, kriptovalyutalar, blokcheyn va markazlashmagan texnologiyalar haqida eng muhim voqealar haqida fikr yuritamiz.
                </span>
            </div>
        </div>
    )
}

export default ContactHeader