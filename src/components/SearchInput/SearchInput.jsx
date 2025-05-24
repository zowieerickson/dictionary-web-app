import { useEffect, useState } from "react"
import SearchIcon from '../../assets/images/icon-search.svg?react';
import styles from './SearchInput.module.css'
import Autocomplete from "../Autocomplete/Autocomplete.jsx"

export default function SearchInput({ searchWord, setSearchWord, hasSearched, handleSearch }) {

    const [wordList, setWordList] = useState([]);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch('/data/words.json')
            .then(res => res.json())
            .then(data => setWordList(data))
    }, [])

    // Debounce filter to come
    useEffect(() => {
        

        const filteredList = wordList
            .filter(word => word.startsWith(searchWord.toLowerCase()))
            .slice(0, 10)

        setResults(filteredList)
        console.log(searchWord)

    }, [ searchWord]);

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
            {searchWord.length > 0 && results.map(word => {
                return <p>{word}</p> 
            })}
            {/* <Autocomplete /> */}

        </>
    )
}