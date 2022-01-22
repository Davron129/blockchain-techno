import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/store';
import { getFormattedDay } from '../../utils/data';

import Styles from './ContactStyles.module.css';
import { ReactComponent as Logo } from '../../assets/images/ic_logo.svg';

const ContactHeader = ({handleClick}: {handleClick:Function}) => {
    const colorScheme = useSelector((state: RootState) => state.colorScheme.isLight);

    return (
        <div className={Styles.article__header}>
            <div className={Styles.logo} style={{ cursor: "pointer"}} onClick={() => handleClick()}>
                    {
                        colorScheme 
                            ? <Logo/>
                            : <Logo fill="#FFF"/>
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