import { useState, useEffect } from 'react';
import Styles from './ArticleStyles.module.css';
import { useNavigate } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';


const Article = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ isActive, setIsActive ] = useState<boolean>(false);

    const handleClick = () => {
        setIsActive(false);
        dispatch({ type: "IS_ON", payload: false});
        setTimeout(() => {
            navigate('/');
        }, 400)

    }

    useEffect(() => {
        setIsActive(true);
        dispatch({ type: "IS_OFF", payload: true});
    }, []);

    return (
        <>
            <article className={`${Styles.article} ${isActive && Styles.active}`}>
                <MdClose className={Styles.close__icon} onClick={handleClick} />
                <div className={Styles.article__container}>
                    <div className={Styles.article__header}>
                        <h3 className={Styles.article__title}>
                            Eminem купил NFT Bored Ape Yacht Club за $450 000
                        </h3>
                        <div className={Styles.header__bottom}>
                            <div className={Styles.left}>
                                <span className={Styles.tag}>NFT</span>
                            </div>
                            <div className={Styles.right}>
                                <span className={Styles.read__time}>2 min. read</span>
                                <span className={Styles.create__time}>15:22</span>
                                <span className={Styles.create__date}>01.01.2021</span>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.article__content}>
                        <div className={Styles.article__img}></div>
                        <div className={Styles.article__text}>
                            Американский рэпер Eminem приобрел невзаимозаменяемый токен (NFT) Bored Ape Yacht Club #9055 за 123,45 ETH (более $450 000 по курсу на момент написания).
                            <br />
                            <br />
                            Eminem также обновил фото своего профиля в Twitter на купленное изображение.
                            <br />
                            <br />
                            Покупателем стал аккаунт с ником Shady_Holdings на NFT-маркетплейсе OpenSea. На его кошельке хранятся более 40 токенов из разных коллекций.
                            <br />
                            <br />
                            Ранее владелец популярного ночного клуба в Майами и комплекса кондоминиумов E11EVEN Hotel and Residences — компания E11EVEN Partners — приобрела NFT из коллекции Bored Ape Yacht Club за 99 ETH (около $396 000 на момент сделки).
                            <br />
                            <br />
                            Напомним, люксовый NFT-маркетплейс UNXD совместно с GameFi-проектом Decentraland анонсировал Metaverse Fashion Week в метавселенной.
                            <br />
                            <br />
                            Подписывайтесь на новости ForkLog в Telegram: ForkLog Feed — вся лента новостей, ForkLog — самые важные новости, инфографика и мнения.
                        </div>
                    </div>
                    <div className={Styles.article__footer}></div>
                </div>
            </article>
            <div className={Styles.overlay} onClick={handleClick}></div>
        </>
    )
}

export default Article