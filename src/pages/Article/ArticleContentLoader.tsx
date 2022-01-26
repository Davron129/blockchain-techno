import Styles from './ArticleStyles.module.css';

const ArticleContentLoader = () => {
    return (
        <div className={Styles.loader__wrapper}>
            <div className={Styles.loader__header}>
                <div className={Styles.top}>
                    <div className={Styles.header1}></div>
                    <div className={Styles.header2}></div>
                </div>
                <div className={Styles.bottom}>
                    <div className={Styles.loader__tag}></div>
                    <div className={Styles.right}>
                        <div className={Styles.read}></div>
                        <div className={Styles.date}></div>
                    </div>
                </div>
            </div>
            <div className={Styles.loader__img}></div>
            <div className={Styles.loader__content}></div>
            <div className={Styles.loader__content}></div>
            <div className={Styles.loader__content}></div>
            <div className={Styles.loader__content}></div>

        </div>
    )
}

export  default ArticleContentLoader