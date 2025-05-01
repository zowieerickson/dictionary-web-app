import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import DictionarySearchContainer from './components/DictionarySearchContainer/DictionarySearchContainer.jsx'
import SearchResults from './components/SearchResults/SearchResults.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchWord, setSearchWord] = useState('')

  return (
    <>
      <Header/>
      <DictionarySearchContainer 
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        setData={setData}
        setError={setError}
        setLoading={setLoading}
      />
      <SearchResults
        data={data}
        error={error}
        loading={loading}
      />
      <Footer 
        data={data}
      />
    </>
  )
}

export default App
