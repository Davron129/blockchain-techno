import "./LoaderStyles.css"

const ArticleLoader = () => {
    return (
        <div className={'a_loader'}>
            <div className="a_loader__container">
                <div className="a_loader__wrapper">
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="three"></span>
                </div>
            </div>
        </div>
    )
}

export default ArticleLoader