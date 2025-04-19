import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Search from  './components/Search/Search.jsx'
import SearchResults from './components/SearchResults/SearchResults.jsx'
import './App.css'

function App() {
  const [definition, setDefinition] = useState(null)
  const [searchWord, setSearchWord] = useState('')

  return (
    <>
      <Navbar/>
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
