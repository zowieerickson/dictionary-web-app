import { useEffect } from "react"


export default function SearchResults({ definition }) {
    if(!definition) return null

    console.log("the definition is", definition)
    return (
        <section>
            <h1>{definition[0].word}</h1>
            <p>{definition[0].meanings[0].definitions[0].definition}</p>

        </section>
    )
}