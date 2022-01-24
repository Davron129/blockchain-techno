import Styles from  './ArticleStyles.module.css';


const NotFound = ({handleClick}: {handleClick: Function}) => {
    return (
        <div className={Styles.nf__wrapper}>
            <div className={Styles.nf__code}>404</div>
            <div className={Styles.nf__content}>Post topilmadi )</div>
            <div className={Styles.nf__btn}>
                <button onClick={() => handleClick()}>Bosh sahifa</button>
            </div>
        </div>
    )
}

export default NotFound