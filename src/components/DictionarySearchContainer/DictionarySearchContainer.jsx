import SearchInput from "../SearchInput/SearchInput.jsx";
import SearchResults from "../SearchResults/SearchResults.jsx";
import { fetchData } from '../../services/dictionaryApi'
import { useState } from "react";

export default function DictionarySearchContainer({ data, setData }) {
    const [hasSearched, setHasSearched] = useState(false)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [searchWord, setSearchWord] = useState('')

    const handleSearch = async (word) => {
        if (word.trim() === '') {
            setHasSearched(true)
            setLoading(false)
            return
        }
        setHasSearched(false)
        setLoading(true) // Start loading
        setError(null) // Reset error state on new search
        setData(null) // Reset previous data

        try {
            const result = await fetchData(word)
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
        <>
            <SearchInput 
                searchWord={searchWord}
                setSearchWord={setSearchWord}
                setData={setData}
                setError={setError}
                setLoading={setLoading}
                handleSearch={handleSearch}
                hasSearched={hasSearched}
                setHasSearched={setHasSearched}
            />
            <SearchResults
                data={data}
                error={error}
                loading={loading}
                setSearchWord={setSearchWord}
                handleSearch={handleSearch}
            />
        </>

    )

}