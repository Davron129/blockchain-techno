import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../utils/api';
import { PostsInterface } from '../../schemas';
import Styles from './ArticleStyles.module.css';
import Loader from '../Loader';
import SearchBar from '../SearchBar'
import ArticleLoader from '../Loader/ArticleLoader';
import { getTimeInterval } from '../../utils/getTimeInterval';
import { getCreatedDate } from './../../utils/getCreatedDate';
import { getFormattedDay } from '../../utils/data';

const ArticleContainer = () => {
    const [ curPage, setCurPage ] = useState<number>(1);
    const [ loader, setLoader ] = useState<boolean>(false);
    const [ posts, setPosts ] = useState<PostsInterface>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ isDataSend, setIsDataSend ] = useState<boolean>(true);
    const [ headerImg, setHeaderImg ] = useState<string>("");

    window.addEventListener("scroll", () => {
        window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && setIsDataSend(true);
    })

    const getPosts = () => {
        setLoader(true);
        new Api()
            .getPosts(curPage)
            .then(({data}) => {
                setPosts((prev) => [...prev, ...data.data.posts])
                setCurPage(data.data.pagination.nextPage);
                setLoader(false);
                setIsDataSend(false);
            })
            .then(() => {
                setIsLoading(false);
            })
    }

    const getHeaderImage = () => {
        new Api()
            .getHeaderImage()
            .then(({data}) => {
                setHeaderImg(data.data[0].url);
            })
    }

    useEffect(() => {
        curPage && isDataSend && getPosts();
    }, [isDataSend])

    useEffect(() => {
        setPosts([])
        setIsLoading(true);
        getHeaderImage();
    }, [])

    return (
        <>  
            <SearchBar />
            <section className={Styles.article__container}>
                <div className={Styles.article__img}>
                    <img src={headerImg} alt="" />
                </div>
                {/* mana shu qismni createAt ga qarab o`zgaradigan qilishimiz kerak */}
                {
                    posts.map((post, index) => (
                        <React.Fragment key={post._id}>
                            {
                                index === 0
                                    ? (
                                        <div className={Styles.article__date}>
                                            <span>
                                                {getCreatedDate(null, post.createdAt * 1000)}
                                            </span>
                                        </div>
                                    ) : (
                                        getCreatedDate(posts[index-1].createdAt * 1000 , post.createdAt * 1000) && <div className={Styles.article__date}>
                                            <span>
                                                {getCreatedDate(posts[index-1].createdAt * 1000 , post.createdAt * 1000)}
                                            </span>
                                        </div>
                                    )
                            }

                            <div className={`${Styles.article__wrapper} ${(index > 0 && index !== posts.length - 1 && getCreatedDate(post.createdAt * 1000, posts[index+1].createdAt * 1000)) ? Styles.noborder : Styles.border}`}>
                                <article className={Styles.article}>
                                    <div className={Styles.article__header}>
                                        <span className={Styles.article__tag}>{post.tag.name}</span>
                                        <span className={Styles.article__time}>{getTimeInterval(post.createdAt)}</span>
                                    </div>
                                    <div className={Styles.article__content}>
                                        <h3 className={Styles.article__title}>
                                            <Link to={`/article/${post._id}`}>
                                                {post.title}
                                            </Link>
                                        </h3>
                                    </div>
                                </article>
                            </div>
                        </React.Fragment>
                    ))
                }
                { loader && <ArticleLoader /> }
            </section>
            { isLoading && <Loader /> }
        </>
    )
}

export default ArticleContainer