import { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const Contact = () => {
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
                        
                    </div>
                    
                    <div className="article__footer"></div>
                </div>
            </article>
            <div className="overlay" onClick={handleClick}></div>
        </>
    )
}

export default Contact