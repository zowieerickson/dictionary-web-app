import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Search from  './components/Search/Search.jsx'
import SearchResults from './components/SearchResults/SearchResults.jsx'
import './App.css'

function App() {
  const [definition, setDefinition] = useState(null)
  const [searchWord, setSearchWord] = useState('')

  return (
    <>
      <Header/>
      <Search 
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        definition={definition}
        setDefinition={setDefinition}
      />
      <SearchResults
        definition={definition}
      />
    </>
  )
}

export default App
