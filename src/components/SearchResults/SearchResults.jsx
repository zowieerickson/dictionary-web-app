import { useEffect, useState } from "react"
import IconPlay from '../../assets/images/icon-play.svg?react'
import styles from './SearchResults.module.css'


export default function SearchResults({ definition }) {
    const [meanings, setMeanings] = useState('');
    const [audioFile, setAudioFile] = useState('');

    useEffect(() => {
        if (definition) {
            const firstAudio = definition[0].phonetics.find(p => p.audio)
            setAudioFile(firstAudio?.audio || null)
        }
    }, [definition])

    if(!definition) return null

    const mp3UrlTest = audioFile

    const handlePlay = () => {
        const audio = new Audio(mp3UrlTest)
        audio.play().catch((error) => {
            console.error('Error playing audio: ', error)
        })
    }

    console.log("the definition is", definition)
    return (
        <section>
            <header className={styles.resultsHeader}>
                <div className={styles.word}>
                    <h1 className={styles.definitionWord}>{definition[0].word}</h1>
                    <p className={styles.definitionPhonetic}>{definition[0].phonetic}</p>
                </div>
                <button onClick={handlePlay}><IconPlay /></button>
            </header>
            <article className={styles.meaning}>
                <h3 className="label-line"><i>{definition[0].meanings[0].partOfSpeech}</i></h3>
                <h4>Meaning</h4>
                <ul>
                    {definition[0].meanings[0].definitions.map(definition1 => {
                        return <li>{definition1.definition}</li>
                    })}
                </ul>
                
            </article>
            <p>{definition[0].meanings[0].definitions[0].definition}</p>
            {/* <button onClick={() => handlePlay}>{definition[0].phonetics[2].audio}</button> */}
            
        </section>
    )
}