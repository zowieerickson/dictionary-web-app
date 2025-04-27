import { useState } from 'react'
import { fetchData } from '../../services/dictionaryApi'
import SearchIcon from '../../assets/images/icon-search.svg?react';
import styles from './Search.module.css'
import NoResultsMessage from '../NoResultsMessage/NoResultsMessage';


export default function Search({ searchWord, setSearchWord, setData, error, setError }) {
    const [loading, setLoading] = useState(false);

    const handleSearch = async(e) => {
        e.preventDefault()
        setLoading(true) // Start loading
        setError(null) // Reset error state on new search
        setData(null) // Reset previous data

        try {
            const result = await fetchData(searchWord)
            setData(result)
        } catch (error) {
            console.error("Failed to fetch definition:", error)
            setError(NoResultsMessage)
            setData(null)
        } finally {
            setLoading(false)
        }
    }

    const handleChange = function(e) {
        setSearchWord(e.target.value)
    }


    return (
        <>
            <form action="" onSubmit={handleSearch} className={styles.searchForm}>
                <input placeholder="Search for any word..." onChange={handleChange} value={searchWord} className={styles.search} type="search" name="" id="" />
                <button className={styles.searchBtn} type="submit" aria-label='Search'><SearchIcon className={styles.searchIcon}/></button>
            </form>
            {error && error}
        </>
    )
}