import { useState } from 'react'
import { fetchData } from '../../services/dictionaryApi'
import SearchIcon from '../../assets/images/icon-search.svg?react';
import styles from './Search.module.css'


export default function Search() {
    const [definition, setDefinition] = useState(null)
    const [searchWord, setSearchWord] = useState('')

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
            <form action="" onSubmit={handleSearch}>
                <input onChange={handleChange} value={searchWord} type="search" name="" id="" />
                <button type="submit"><SearchIcon className={styles.searchIcon}/></button>
            </form>
            {definition && <pre>{JSON.stringify(definition, null, 2)}</pre>}
        </>
    )
}