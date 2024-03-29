import {
    useState,
    useEffect,
    FormEvent
} from 'react';
import { Helmet } from "react-helmet";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AfterSubmit from './AfterSubmit';
import SocialLinks from './SocialLinks';
import ContactHeader from './ContactHeader';
import ContactFooter from './ContactFooter';

import Api from '../../utils/api';
import { enableScroll, disableScroll } from '../../redux/actions/scroll';

import { MdClose } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi';
import Styles from './ContactStyles.module.css';

const Contact = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ name, setName ] = useState<string>("");
    const [ orgName, setOrgName ] = useState<string>("");
    const [ comment, setComment ] = useState<string>("");
    const [ contact, setContact ] = useState<string>("");
    const [ isActive, setIsActive ] = useState<boolean>(false);
    const [ isSubmitted, setIsSubmitted ] = useState<boolean>(false);

    const handleClick = () => {
        setIsActive(false);
        dispatch(enableScroll());
        setTimeout(() => {
            navigate('/');
        }, 400)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        new Api()
            .sendComment(name, orgName, comment, contact)
            .then(({data}) => {
                if(data.ok) {
                    setIsSubmitted(true);
                }
            })
    }

    useEffect(() => {
        setIsActive(true);
        dispatch(disableScroll());
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Blockchain Texno</title>
                <meta name="description" content="To'liq elektr avtomobillar va ularga oid texnologiyalar haqidagi onlayn nashr." />
            </Helmet>
            <article className={`${Styles.article} ${isActive && Styles.active}`}>
                <MdClose className={Styles.close__icon} onClick={handleClick} />
                <div className={Styles.article__container}>
                    <ContactHeader handleClick={handleClick} />
                    <h3 className={Styles.title}>Biz bilan aloqa</h3>
                    {
                        !isSubmitted ? (
                            <div className={Styles.form__wrapper}>
                                <form onSubmit={handleSubmit}>
                                    <label>
                                        <span className={Styles.label__text}>Ismingiz*</span>
                                        <input 
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder='Ismingizni kiriting'
                                            required
                                        />
                                    </label>
                                    <label>
                                        <span className={Styles.label__text}>Tashkilot nomi*</span>
                                        <input 
                                            type="text"
                                            value={orgName}
                                            onChange={(e) => setOrgName(e.target.value)}
                                            placeholder='Tashkilot nomini kiriting'
                                            required
                                        />
                                    </label>
                                    <label>
                                        <span className={Styles.label__text}>Email yoki telefon raqam*</span>
                                        <input 
                                            type="text"
                                            value={contact}
                                            required
                                            onChange={(e) => setContact(e.target.value)}
                                            placeholder='Email yoki telefon raqamingizini kiriting'
                                        />
                                    </label>
                                    <label>
                                        <span className={Styles.label__text}>Fikr uchun joy*</span>
                                        <textarea 
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                            placeholder='Fikringizni qoldiring'
                                            required
                                        ></textarea>
                                    </label>
                                    <div className={Styles.form__btn}>
                                        <button>Yuborish</button>
                                    </div>
                                </form>
                            </div>
                        ) : <AfterSubmit handleClick={handleClick} />
                    }
                    <SocialLinks />
                    <button className={Styles.download__btn} >
                        <a href="https://static.blockchaintexno.uz/logotype.zip" download={true}>
                            <FiDownload className={Styles.btn__icon} />
                            <span>Logoni yuklab oling</span>
                        </a>
                    </button>
                    <ContactFooter />
                </div>
            </article>
            <div className={Styles.overlay} onClick={handleClick}></div>
        </>
    )
}




export default Contact;