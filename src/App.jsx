import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import DictionarySearchContainer from './components/DictionarySearchContainer/DictionarySearchContainer.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

function App() {
  const [data, setData] = useState(null)


  return (
    <>
      <Header/>
      <DictionarySearchContainer 
        data={data}
        setData={setData}
      />
      <Footer 
        data={data}
      />
    </>
  )
}

export default App
