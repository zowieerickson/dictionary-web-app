import { useEffect, useState, Fragment } from "react"
import IconPlay from '../../assets/images/icon-play.svg?react'
import styles from './SearchResults.module.css'
import NoResultsMessage from "../NoResultsMessage/NoResultsMessage";


export default function SearchResults({ data, error }) {
    const [audioFile, setAudioFile] = useState('');

    useEffect(() => {
        if (data) {
            const firstAudio = data[0].phonetics.find(p => p.audio)
            setAudioFile(firstAudio?.audio || null)
        }
    }, [data])

    const handlePlay = () => {
        const audio = new Audio(audioFile)
        audio.play().catch((error) => {
            console.error('Error playing audio: ', error)
        })
    }
    
    console.log("the definition is", data) // To visualize data while building

    if (error) {
        return <NoResultsMessage/>
    }

    if (!data) {
        return null;
    }

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
                return <article key={meaning.partOfSpeech} className={styles.result}>
                            <h2 className="label-line"><i>{meaning.partOfSpeech}</i></h2>
                            <section className={`${styles.meaning} ${styles.resultSection}`}>
                                <h3 className={styles.resultTitle}>Meaning</h3>
                                <ul className={styles.meaningsList}>
                                    {meaning.definitions.map((definition, index) => (
                                        <Fragment key={index}>
                                        <li key={definition.definition}>{definition.definition}</li>
                                        {definition.example && <li key={definition.example} className={styles.meaningsExample}>{definition.example}</li>}
                                        </Fragment>
                                    ))}
                                </ul>
                            </section>
                            {meaning.synonyms.length > 0 &&
                            <section className={`${styles.synonym} ${styles.resultSection}`}>
                                <h3 className={styles.resultTitle}>Synonyms</h3>
                                <ul className={styles.synonymsList}>{meaning.synonyms.map((synonym, index) => {
                                        return <li key={`${synonym}-${index}`}>{synonym}</li>
                                    })}
                                </ul>
                            </section>
                            }

                        </article>
            })}

        </section>
    )
}