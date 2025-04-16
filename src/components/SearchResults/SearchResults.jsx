import { useEffect } from "react"
import styles from './SearchResults.module.css'


export default function SearchResults({ definition }) {
    if(!definition) return null

    const mp3Url = "https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3"; // Keyboard audio

    const handlePlay = () => {
        const audio = new Audio(mp3Url)
        audio.play().catch((error) => {
            console.error('Error playing audio: ', error)
        })
    }

    console.log("the definition is", definition)
    return (
        <section>
            <h1 className={styles.definitionWord}>{definition[0].word}</h1>
            <p className={styles.definitionPhonetic}>{definition[0].phonetic}</p>
            <p>{definition[0].meanings[0].definitions[0].definition}</p>
            {/* <button onClick={() => handlePlay}>{definition[0].phonetics[2].audio}</button> */}
            <button onClick={handlePlay}>Hello</button>
        </section>
    )
}