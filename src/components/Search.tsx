import { useEffect, useState } from "react";
import { fetchData } from "../services/dictionaryApi.jsx"; // Import API function

export default function Search() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        const getDefinition = async () => {
            try {
                const result = await fetchData("hello"); // Fetch definition for "hello"
                setData(result)
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false)
            }
        }

        getDefinition()
    }, []); // Empty dependency array to run only on mount

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(searchTerm)
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <>
        <h1>Data from API:</h1>
        <form action="" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Try it here..."
                value={searchTerm}
                onChange={handleChange} 
            />
        </form>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}