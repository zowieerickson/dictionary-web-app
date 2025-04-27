import { useEffect, useState } from "react"
import IconPlay from '../../assets/images/icon-play.svg?react'
import styles from './SearchResults.module.css'


export default function SearchResults({ data }) {
    const [meanings, setMeanings] = useState('');
    const [audioFile, setAudioFile] = useState('');

    useEffect(() => {
        if (data) {
            const firstAudio = data[0].phonetics.find(p => p.audio)
            setAudioFile(firstAudio?.audio || null)
        }
    }, [data])

    if(!data) return null

    const mp3UrlTest = audioFile

    const handlePlay = () => {
        const audio = new Audio(mp3UrlTest)
        audio.play().catch((error) => {
            console.error('Error playing audio: ', error)
        })
    }

    console.log("the definition is", data) // To visualize data while building

    return (
        <section>
            <header className={styles.resultsHeader}>
                <div className={styles.word}>
                    <h1 className={styles.definitionWord}>{data[0].word}</h1>
                    <p className={styles.definitionPhonetic}>{data[0].phonetic}</p>
                </div>
                <button onClick={handlePlay}><IconPlay className={`${styles.iconPlay} ${!audioFile ? styles.disabled : ''}`} /></button>
            </header>

            {data[0].meanings.map(meaning => {
                return <article className={styles.result}>
                            <h2 className="label-line"><i>{meaning.partOfSpeech}</i></h2>
                            <section className={`${styles.meaning} ${styles.resultSection}`}>
                                <h3 className={styles.resultTitle}>Meaning</h3>
                                <ul className={styles.meaningsList}>
                                    {meaning.definitions.map((word) => (
                                        <>
                                        <li key={word.definition}>{word.definition}</li>
                                        {word.example && <li className={styles.meaningsExample}>{word.example}</li>}
                                        </>
                                    ))}
                                </ul>
                            </section>
                            {meaning.synonyms.length > 0 &&
                            <section className={`${styles.synonym} ${styles.resultSection}`}>
                                <h3 className={styles.resultTitle}>Synonyms</h3>
                                <ul className={styles.synonymsList}>{meaning.synonyms.map(synonym => {
                                        return <li>{synonym}</li>
                                    })}
                                </ul>
                            </section>
                            }

                        </article>
            })}

        </section>
    )
}