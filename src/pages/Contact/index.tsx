import { useState, useEffect, FormEvent } from 'react';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Styles from './ContactStyles.module.css';
import { FiDownload } from 'react-icons/fi';
import ContactHeader from './ContactHeader';
import AfterSubmit from './AfterSubmit';
import SocialLinks from './SocialLinks';
import ContactFooter from './ContactFooter';
import { useDispatch } from 'react-redux';


const Contact = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ name, setName ] = useState<string>("");
    const [ isActive, setIsActive ] = useState<boolean>(false);
    const [ isSubmitted, setIsSubmitted ] = useState<boolean>(false);
    const [ comment, setComment ] = useState<string>("");

    const handleClick = () => {
        setIsActive(false);
        dispatch({ type: "IS_OFF", payload: false })
        setTimeout(() => {
            navigate('/');
        }, 400)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setIsSubmitted(true);
    }

    useEffect(() => {
        setIsActive(true);
        dispatch({ type: "IS_OFF", payload: true })
    }, [dispatch]);

    return (
        <>
            <article className={`${Styles.article} ${isActive && Styles.active}`}>
                <MdClose className={Styles.close__icon} onClick={handleClick} />
                <div className={Styles.article__container}>
                    <ContactHeader />
                    <h3 className={Styles.title}>Biz bilan aloqa</h3>
                    {
                        !isSubmitted ? (
                            <div className={Styles.form__wrapper}>
                                <form onSubmit={handleSubmit}>
                                    <label>
                                        <span className={Styles.label__text}>Ismingiz</span>
                                        <input 
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder='Ismingizni kiriting'
                                        />
                                    </label>
                                    <label>
                                        <span className={Styles.label__text}>Ismingiz</span>
                                        <input 
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder='Ismingizni kiriting'
                                        />
                                    </label>
                                    <label>
                                        <span className={Styles.label__text}>Fikr uchun joy</span>
                                        <textarea 
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                            placeholder='Fikringizni qoldiring'
                                        ></textarea>
                                    </label>
                                    <div className={Styles.form__btn}>
                                        <button>Yuborish</button>
                                    </div>
                                </form>
                            </div>
                        ) : <AfterSubmit />
                    }
                    <SocialLinks />
                    <button className={Styles.download__btn}>
                        <FiDownload className={Styles.btn__icon} />
                        <span>Logoni yuklab oling</span>
                    </button>
                    <ContactFooter />
                </div>
            </article>
            <div className={Styles.overlay} onClick={handleClick}></div>
        </>
    )
}




export default Contact;