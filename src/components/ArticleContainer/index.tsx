import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../utils/api';
import { PostsInterface } from '../../schemas';
import Styles from './ArticleStyles.module.css';
import Loader from '../Loader';
import SearchBar from '../SearchBar'
import ArticleLoader from '../Loader/ArticleLoader';

const ArticleContainer = () => {
    const [ curPage, setCurPage ] = useState<number>(1);
    const [ loader, setLoader ] = useState<boolean>(false);
    const [ posts, setPosts ] = useState<PostsInterface>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ isDataSend, setIsDataSend ] = useState<boolean>(true);

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

    useEffect(() => {
        curPage && isDataSend && getPosts();
    }, [isDataSend])

    useEffect(() => {
        setPosts([])
        setIsLoading(true);
    }, [])

    return (
        <>  
            <SearchBar />
            <section className={Styles.article__container}>
                <div className={Styles.article__img}>
                </div>
                {/* mana shu qismni createAt ga qarab o`zgaradigan qilishimiz kerak */}
                <div className={Styles.article__date}>
                    <span>Bugun</span>
                </div>
                {
                    posts.map((post, index) => (
                        <div className={Styles.article__wrapper} key={index}>
                            <article className={Styles.article}>
                                <div className={Styles.article__header}>
                                    <span className={Styles.article__tag}>{post.tag.name}</span>
                                    <span className={Styles.article__time}>{post.createdAt}</span>
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
                    ))
                }
                { loader && <ArticleLoader /> }
                { isLoading && <Loader /> }
            </section>
        </>
    )
}

export default ArticleContainer