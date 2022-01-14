import { useSelector } from 'react-redux';
import { RootState } from '../../schemas';
import Logo from '../../assets/images/Logo.png';
import LogoLight from '../../assets/images/logoLight.png';
import Styles from './ContactStyles.module.css';


const ContactHeader = () => {
    const colorScheme = useSelector((state: RootState) => state.colorScheme.isLight);

    return (
        <div className={Styles.article__header}>
            <div className={Styles.logo}>
                {
                    colorScheme
                        ? <img src={Logo} alt="Blockchain texno logo" />
                        : <img src={LogoLight} alt="Blockchain texno logo" />
                }
                
            </div>
            <div className={Styles.date}>
                <span>01.01.2022</span>
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