import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Search from  './components/Search/Search.jsx'
import SearchResults from './components/SearchResults/SearchResults.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null);
  const [searchWord, setSearchWord] = useState('')

  return (
    <>
      <Header/>
      <Search 
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        data={data}
        setData={setData}
        error={error}
        setError={setError}
      />
      <SearchResults
        data={data}
        error={error}
      />
      <Footer 
        data={data}
      />
    </>
  )
}

export default App
