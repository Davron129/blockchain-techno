import { Link } from 'react-router-dom';
import Styles from './ArticleStyles.module.css';

const ArticleContainer = () => {
    return (
        <section className={Styles.article__container}>
            <div className={Styles.article__img}>
            </div>
            <div className={Styles.article__date}>
                <span>Bugun</span>
            </div>
            {
                new Array(5).fill(0).map((num, index) => (
                    <div className={Styles.article__wrapper} key={index}>
                        <article className={Styles.article}>
                            <div className={Styles.article__header}>
                                <span className={Styles.article__tag}>Blockchain</span>
                                <span className={Styles.article__time}>30 daqiqa oldin</span>
                            </div>
                            <div className={Styles.article__content}>
                                <h3 className={Styles.article__title}>
                                    <Link to="/article/salom">
                                        👀 Daniel Larimer 2022-yilda EOS asosidagi qotil ilovani ishga tushirishga va’da berdi. Uning so‘zlariga ko‘ra, tez orada yangi loyihaning yo‘l xaritasi va oq qog‘ozi taqdim etiladi.
                                    </Link>
                                </h3>
                            </div>
                        </article>
                    </div>
                ))
            }

        </section>
    )
}

export default ArticleContainer