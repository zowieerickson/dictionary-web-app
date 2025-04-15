import { useState } from 'react'
import { fetchData } from '../../services/dictionaryApi'
import SearchIcon from '../../assets/images/icon-search.svg?react';
import styles from './Search.module.css'


export default function Search({ searchWord, setSearchWord, setDefinition }) {


    const handleSearch = async(e) => {
        e.preventDefault()
        try {
            const result = await fetchData(searchWord)
            setDefinition(result)
        } catch (error) {
            console.error("Failed to fetch definition:", error)
        }
    }

    const handleChange = function(e) {
        setSearchWord(e.target.value)
    }


    return (
        <>
            <h1>This is the Search component</h1>
            <form action="" onSubmit={handleSearch} className={styles.searchForm}>
                <input onChange={handleChange} value={searchWord} className={styles.search} type="search" name="" id="" />
                <button className={styles.searchBtn} type="submit" aria-label='Search'><SearchIcon className={styles.searchIcon}/></button>
            </form>
        </>
    )
}