import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../utils/api';
import { PostsInterface } from '../../schemas';
import Styles from './ArticleStyles.module.css';

const ArticleContainer = () => {
    const [ posts, setPosts ] = useState<PostsInterface>([]);

    const getPosts = () => {
        new Api()
            .getPosts()
            .then(({data}) => {
                setPosts((prev) => [...prev, ...data.data.posts])
            })
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <section className={Styles.article__container}>
            <div className={Styles.article__img}>
            </div>
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

        </section>
    )
}

export default ArticleContainer