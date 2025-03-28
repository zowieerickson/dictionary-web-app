export const fetchData = async (word) => {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
        throw error;
    }
}