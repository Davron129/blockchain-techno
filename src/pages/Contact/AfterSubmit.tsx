import { FiCheckCircle } from "react-icons/fi";
import Styles from './ContactStyles.module.css';

const AfterSubmit = () => {
    return (
        <div className={Styles.after__submit}>
            <div className={Styles.wrapper}>
                <div className={Styles.icon__wrapper}>
                    <FiCheckCircle className={Styles.icon} />
                </div>
                <div className={Styles.text}>
                    <span >
                        Rahmat, tez orada javob beramiz!
                    </span>
                </div>
                <button>Bosh sahifa</button>
            </div>
        </div>
    )
}

export default AfterSubmit