import { FiSearch } from 'react-icons/fi';
import Styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={Styles.header__middle}>
            <div className={Styles.searchbar}>
                <form>
                    <input type="text" className={Styles.header__search} />
                    <FiSearch className={Styles.search__icon} />
                </form>
            </div>
        </div>
    )
}

export default SearchBar