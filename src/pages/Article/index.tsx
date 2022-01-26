import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Api from '../../utils/api';
import { TagInterface } from '../../schemas';
import { getFormattedTime, getFormattedDay } from '../../utils/data'
import { disableScroll, enableScroll } from '../../redux/actions/scroll';

import NotFound from './NotFound';
import ShareLinks from './ShareLinks';
import { MdClose } from 'react-icons/md';
import Styles from './ArticleStyles.module.css';
import ArticleContentLoader from "./ArticleContentLoader";

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
    const [ post, setPost ] = useState<PostInterface>();
    const [ title, setTitle ] = useState<string>("");
    const [ isActive, setIsActive ] = useState<boolean>(false);
    const [ isLoaded, setIsLoaded ] = useState<boolean>(false);
    const [ isNotFound, setIsNotFound ] = useState<boolean>(false);

    const handleClick = () => {
        setIsActive(false);
        dispatch(enableScroll());
        setTimeout(() => {
            navigate('/');
        }, 400)
    }

    useEffect(() => {
        setIsActive(true);
        dispatch(disableScroll());
        
    }, [dispatch]);

    useEffect(() => {
        setIsLoaded(false);
        new Api()
            .getPost(params.id)
            .then(({data}) => {
                setIsLoaded(true);
                if(data.ok) {
                    setPost(data.data);
                    setTitle(data.data.title);
                } else {
                    setIsNotFound(true);
                }
            })
        return () => {
            setTitle("Blockchain Texno")
        }

    }, [params.id])

    return (
        <>
            <Helmet>
                <title>Blockchain Texno</title>
                <meta name="description" content={title} />
                <meta property="og:url"           content={`https://www.blockchaintexno.uz/article/${params.id}`} />
                <meta property="og:title"         content={"Blockchain Texno"} />
                <meta property="og:description"   content={title} />
            </Helmet>
            <article className={`${Styles.article} ${isActive && Styles.active}`}>
                <MdClose className={Styles.close__icon} onClick={handleClick} />
                {
                    isLoaded ? (post && (
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
                                        <span className={Styles.read__time}>{post.readingTime} daq. o'qish</span>
                                        <span className={Styles.create__time}>{getFormattedTime(post.createdAt * 1000)}</span>
                                        <span className={Styles.create__date}>{getFormattedDay(post.createdAt * 1000)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.article__content}>
                                {
                                    post.body.blocks.map((block: (ParagraphInterface | ImageInterface)) => (
                                        <React.Fragment key={block.id} >
                                            {block.type === "paragraph" && <p className={Styles.article__text} dangerouslySetInnerHTML={{ __html: block.data.text}} />
                                            }
                                            {block.type === "image" && <figure className={Styles.article__img} >
                                                <img src={block.data.file.url} alt={post.title} />  
                                                { block.data.caption && <figcaption>{block.data.caption}</figcaption> }  
                                            </figure>}
                                        </ React.Fragment >
                                    ))
                                }
                                <div className={Styles.article__footer}>
                                    <ShareLinks id={post._id} />
                                </div>
                            </div>
                        </div>
                    )) : (
                        <ArticleContentLoader />
                    )
                }
                { isNotFound && (
                    <div className={Styles.article__container}>
                        <NotFound handleClick={handleClick} />
                    </div>
                )}
            </article>
            <div className={Styles.overlay} onClick={handleClick}></div>
        </>
    )
}

export default Article