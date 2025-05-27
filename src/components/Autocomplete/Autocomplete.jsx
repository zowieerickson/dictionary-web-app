import { useEffect, useState } from "react"

export default function Autocomplete() {
    const [wordList, setWordList] = useState([]);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch('/data/words.json')
            .then(res => res.json())
            .then(data => setWordList(data))
    }, [])

    // Debounce filter
    useEffect(() => {
        const timeout = setTimeout(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const filtered = wordList
            .filter(word => word.startsWith(query.toLowerCase()))
            .slice(0, 10); // limit results

        setResults(filtered);
        }, 200); // 200ms debounce

        return () => clearTimeout(timeout);
    }, [query, wordList]);

    return (
        <>
        <ul style={{ border: '1px solid #ccc', marginTop: '0', padding: '0', listStyle: 'none' }}>
            {results.map((word, index) => (
                <li key={index} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
                  {word}
                </li>
              )
            )}
        </ul>
        <p>🚧 Search Autocomplete feature in the works 🏗️</p>
        </>
    )
}