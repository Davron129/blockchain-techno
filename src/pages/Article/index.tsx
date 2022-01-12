import { useState, useEffect } from 'react';
import './ArticleStyles.css';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const Article = () => {
    const navigate = useNavigate();
    const [ isActive, setIsActive ] = useState<boolean>(false);

    const handleClick = () => {
        setIsActive(false);
        setTimeout(() => {
            navigate('/');
        }, 400)

    }

    useEffect(() => {
        setIsActive(true);
    }, []);

    return (
        <>
            <article className={`article ${isActive && "active"}`}>
                <MdClose className='close__icon' onClick={handleClick} />
                <div className="article__container">
                    <div className="article__header">
                        <h3 className="article__title">
                            Eminem купил NFT Bored Ape Yacht Club за $450 000
                        </h3>
                        <div className="header__bottom">
                            <div className="left">
                                <span className="tag">NFT</span>
                            </div>
                            <div className="right">
                                <span className="read__time">2 min. read</span>
                                <span className="create__time">15:22</span>
                                <span className="create__date">01.01.2021</span>
                            </div>
                        </div>
                    </div>
                    <div className="article__content">
                        <div className="article__img"></div>
                        <div className="article__text">
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
                    <div className="article__footer"></div>
                </div>
            </article>
            <div className="overlay" onClick={handleClick}></div>
        </>
    )
}

export default Article