import styles from './NoResultsMessage.module.css'

export default function NoResultsMessage() {
    return (
        <section className={styles.noResults}>
            <h1>😕</h1>
            <h2>No Definitions Found</h2>
            <p>We couldn't find a definition for that word. Please try another search.</p>
        </section>
    )
}