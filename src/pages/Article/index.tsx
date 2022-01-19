import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { disableScroll, enableScroll } from '../../redux/actions/scroll';
import Api from '../../utils/api';
import { getFormattedTime, getFormattedDay } from '../../utils/data'
import { MdClose } from 'react-icons/md';
import Styles from './ArticleStyles.module.css';
import { TagInterface } from '../../schemas';

interface ParagraphInterface {
    id: string;
    data: {
        text: string;
    }
    type: "paragraph"
}

interface ImageInterface {
    id: string;
    data: {
        caption: string;
        file: {
            url: string;
        }
    };
    type: "image"
}

interface PostInterface {
    _id: string;
    title: string;
    tag: TagInterface;
    readingTime: number;
    createdAt: number;
    views: number;
    body: {
        blocks: (ParagraphInterface | ImageInterface)[]
    }
}

const Article = () => {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ isActive, setIsActive ] = useState<boolean>(false);
    const [ post, setPost ] = useState<PostInterface>()

    const handleClick = () => {
        setIsActive(false);
        dispatch(enableScroll());
        setTimeout(() => {
            navigate('/');
        }, 400)
        
    }
    
    const getPost = () => {
        new Api()
            .getPost(params.id)
            .then(({data}) => {
                console.log(data.data);
                setPost(data.data)
                
            })
    }

    useEffect(() => {
        setIsActive(true);
        dispatch(disableScroll());
        getPost();
        
    }, [dispatch]);

    // useEffect(() => {

    // })

    return (
        <>
            <article className={`${Styles.article} ${isActive && Styles.active}`}>
                <MdClose className={Styles.close__icon} onClick={handleClick} />
                {
                    post && (
                        <div className={Styles.article__container}>
                            <div className={Styles.article__header}>
                                <h3 className={Styles.article__title}>
                                    { post.title }
                                </h3>
                                <div className={Styles.header__bottom}>
                                    <div className={Styles.left}>
                                        <span className={Styles.tag}>{post.tag.name}</span>
                                    </div>
                                    <div className={Styles.right}>
                                        <span className={Styles.read__time}>{Math.ceil(post.readingTime / 60)} min. read</span>
                                        <span className={Styles.create__time}>{getFormattedTime(post.createdAt)}</span>
                                        <span className={Styles.create__date}>{getFormattedDay(post.createdAt)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.article__content}>
                                {
                                    post.body.blocks.map((block: (ParagraphInterface | ImageInterface)) => (
                                        <React.Fragment key={block.id} >
                                            {block.type === "paragraph" && <p className={Styles.article__text} dangerouslySetInnerHTML={{ __html: block.data.text}} />
                                            }
                                            {/* {block.type === "image" && <div className={Styles.article__img} >
                                                <img src={`http://blockchaintexno.uz/${block.data.file.url}`} alt={post.title} />    
                                            </div>} */}
                                            {block.type === "image" && <figure className={Styles.article__img} >
                                                <img src={`http://blockchaintexno.uz/${block.data.file.url}`} alt={post.title} />  
                                                { block.data.caption && <figcaption>{block.data.caption}</figcaption> }  
                                            </figure>}
                                        </ React.Fragment >
                                    ))
                                }
                            </div>
                            <div className={Styles.article__footer}></div>
                        </div>
                    )
                }
            </article>
            <div className={Styles.overlay} onClick={handleClick}></div>
        </>
    )
}

export default Article