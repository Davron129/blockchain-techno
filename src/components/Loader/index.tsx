import "./LoaderStyles.css"

const Loader = () => {
    return (
        <div className={'loader'}>
            <div className="loader__container">
                <div className="loader__wrapper">
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="three"></span>
                </div>
            </div>
        </div>
    )
}

export default Loader