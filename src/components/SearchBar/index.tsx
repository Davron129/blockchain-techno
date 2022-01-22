import { FiSearch } from 'react-icons/fi';
import Styles from './SearchBar.module.css';

interface SearchBarInterface {
    text: string;
    setText: Function
}

const SearchBar = ({ text, setText }: SearchBarInterface) => {

    return (
        <div className={Styles.header__middle}>
            <div className={Styles.searchbar}>
                <form>
                    <input 
                        type="text" 
                        className={Styles.header__search} 
                        value={text}    
                        onChange={(e) => setText(e.target.value)}
                    />
                    <FiSearch className={Styles.search__icon} />
                </form>
            </div>
        </div>
    )
}

export default SearchBar