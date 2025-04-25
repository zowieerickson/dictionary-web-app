import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Search from  './components/Search/Search.jsx'
import SearchResults from './components/SearchResults/SearchResults.jsx'
import './App.css'

function App() {
  const [data, setDefinition] = useState(null)
  const [searchWord, setSearchWord] = useState('')

  return (
    <>
      <Header/>
      <Search 
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        data={data}
        setDefinition={setDefinition}
      />
      <SearchResults
        data={data}
      />
    </>
  )
}

export default App
