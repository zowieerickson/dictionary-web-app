import { useEffect, useRef, useState } from "react"
import SearchIcon from '../../assets/images/icon-search.svg?react';
import styles from './SearchInput.module.css'
import Autocomplete from "../Autocomplete/Autocomplete.jsx"

export default function SearchInput({ searchWord, setSearchWord, hasSearched, handleSearch }) {
    const [wordList, setWordList] = useState([]);
    const [results, setResults] = useState([]);
    const [isFocused, setIsFocused] = useState(false);

    const wrapperRef = useRef(null)

    useEffect(() => {
        fetch('/data/words.json')
            .then(res => res.json())
            .then(data => setWordList(data))
    }, [])

    // Debounce filter to come
    useEffect(() => {
        const filteredList = wordList
            .filter(word => word.startsWith(searchWord.toLowerCase()))
            .slice(0, 9)

        setResults(filteredList)
        console.log(searchWord)

    }, [ searchWord]);

    // Detect focus within the container
    useEffect(() => {
        const wrapper = wrapperRef.current
        const handleFocusIn = () => setIsFocused(true)
        const handleFocusOut = (e) => {
            // Delay to allow next element to receive focus
            setTimeout(() => {
                if (!wrapper.contains(document.activeElement)) {
                    setIsFocused(false)
                }
            }, 0);
        }

        wrapper.addEventListener("focusin", handleFocusIn)
        wrapper.addEventListener("focusout", handleFocusOut)

        return () => {
            wrapper.removeEventListener("focusin", handleFocusIn)
            wrapper.removeEventListener("focusout", handleFocusOut)
        }
    })

    const handleChange = function(e) {
        setSearchWord(e.target.value)
    }

    const handleClickSearch = (word) => {
        handleSearch(word)
        setSearchWord(word)
        setIsFocused(false)
    }

    const shouldShowSuggestions = 
        isFocused &&
        searchWord.length > 0 &&
        results.length > 0 

    
    return (
        <>
            <form 
                action=""
                onSubmit={(e) => {
                    e.preventDefault()
                    handleSearch(searchWord)
                    setIsFocused(false)
                }}
                className={styles.searchForm}
            >
                <div 
                    ref={wrapperRef}
                    className={styles.searchBar}
                >
                    <input 
                        aria-autocomplete="list"
                        aria-expanded={results.length > 0 ? true : false}
                        aria-controls="suggestions"
                        placeholder="Search for any word..."
                        onChange={handleChange}
                        onKeyDown={() => setIsFocused(true)}
                        value={searchWord}
                        className={`${styles.search} ${!searchWord && hasSearched ? styles.errorBorder : ''}`}
                        type="search"
                        role={(!searchWord && hasSearched) ? 'alert' : undefined}
                        name=""
                        id=""
                    />
                    <button className={styles.searchBtn} type="submit" aria-label='Search'><SearchIcon className={styles.searchIcon}/></button>
                    {shouldShowSuggestions &&
                    <ul className={styles.suggestionList} id="suggestions" role="listbox">
                        {results.map(word => {
                            return <li  
                                        key={word}
                                        tabIndex="0"
                                        role="option"
                                        onClick={() => handleClickSearch(word)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleClickSearch(word)
                                            }
                                        }}
                                        className={styles.suggestion}>
                                        {word}
                                    </li> 
                        })}
                    </ul>}
                </div>
                {!searchWord && hasSearched && (<p role="alert" className={styles.errorMessage}>Whoops, can't be empty...</p>)}
            </form>
            {/* <Autocomplete /> */}
        </>
    )
}