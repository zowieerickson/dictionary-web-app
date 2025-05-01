import SearchInput from "../SearchInput/SearchInput.jsx";

export default function DictionarySearchContainer({ searchWord, setSearchWord, setData, setError, setLoading }) {

    return (
        <SearchInput 
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        setData={setData}
        setError={setError}
        setLoading={setLoading}
      />
    )

}