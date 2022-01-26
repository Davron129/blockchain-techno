import Styles from './DataNotFound.module.css';
import NoDataImg from '../../assets/images/NoData.png';

const DataNotFound = () => {
        return (
            <div className={Styles.nf__wrapper}>
                <div className={Styles.nf__wrapper}>
                    <div className={Styles.nf__img}>
                        <img src={NoDataImg} alt="Data Not Found by search result"/>
                    </div>
                    <div className={Styles.nf__text}>
                        <span>Qidiruv bo'yicha ma'lumot topilmadi</span>
                    </div>
                </div>
            </div>
        );
}

export default DataNotFound;