import { useEffect, useState } from "react"

export default function Autocomplete() {
    const [wordList, setWordList] = useState("")

    useEffect(() => {
        fetch('/data/words.json')
            .then(res => res.json())
            .then(data => setWordList(data))
    }, [])

    console.log(wordList)
    return (
        <p>🚧 Search Autocomplete feature in the works 🏗️</p>
    )
}