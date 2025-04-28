import { useState } from 'react'
import { fetchData } from '../../services/dictionaryApi'
import SearchIcon from '../../assets/images/icon-search.svg?react';
import styles from './Search.module.css'
import NoResultsMessage from '../NoResultsMessage/NoResultsMessage';


export default function Search({ searchWord, setSearchWord, setData, setError }) {
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false)

    const handleSearch = async(e) => {
        e.preventDefault()
        setLoading(true) // Start loading
        setError(null) // Reset error state on new search
        setData(null) // Reset previous data
        setHasSearched(true)
        try {
            const result = await fetchData(searchWord)
            setData(result)
        } catch (error) {
            setError('NoResultsMessage')
            setData(null)
        } finally {
            setLoading(false)
        }

    }
    console.log(  searchWord )

    const handleChange = function(e) {
        setSearchWord(e.target.value)
    }
    
    searchWord ? console.log('true word') : console.log(' false word')


    return (
        <>
            <form 
                action=""
                onSubmit={handleSearch}
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