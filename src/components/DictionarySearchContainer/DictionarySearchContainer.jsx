import SearchInput from "../SearchInput/SearchInput.jsx";
import { fetchData } from '../../services/dictionaryApi'
import { useState } from "react";

export default function DictionarySearchContainer({ searchWord, setSearchWord, setData, setError, setLoading }) {
    const [hasSearched, setHasSearched] = useState(false)

    const handleSearch = async (word) => {
        console.log('handling FIRED')
        setLoading(true) // Start loading
        setError(null) // Reset error state on new search
        setData(null) // Reset previous data
        setHasSearched(true)
        try {
            const result = await fetchData(word)
            console.log("Fetched result", result)
            setData(result)
        } catch (error) {
            console.error(error)
            setError('NoResultsMessage')
            setData(null)
        } finally {
            setLoading(false)
        }
    }

    return (
        <SearchInput 
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        setData={setData}
        setError={setError}
        setLoading={setLoading}
        handleSearch={handleSearch}
        hasSearched={hasSearched}
      />
    )

}