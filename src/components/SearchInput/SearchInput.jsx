import SearchIcon from '../../assets/images/icon-search.svg?react';
import styles from './SearchInput.module.css'

export default function SearchInput({ searchWord, setSearchWord, hasSearched, handleSearch }) {

    const handleChange = function(e) {
        setSearchWord(e.target.value)
    }
    
    return (
        <>
            <form 
                action=""
                onSubmit={(e) => {
                    e.preventDefault()
                    handleSearch(searchWord)
                }}
                className={styles.searchForm}
            >
                <input 
                    placeholder="Search for any word..."
                    onChange={handleChange}
                    value={searchWord}
                    className={`${styles.search} ${!searchWord && hasSearched ? styles.errorBorder : ''}`}type="search"
                    role={(!searchWord && hasSearched) ? 'alert' : undefined}
                    name=""
                    id=""
                />
                <button className={styles.searchBtn} type="submit" aria-label='Search'><SearchIcon className={styles.searchIcon}/></button>
            </form>
            {!searchWord && hasSearched && (<p role="alert" className={styles.errorMessage}>Whoops, can't be empty...</p>)}
        </>
    )
}