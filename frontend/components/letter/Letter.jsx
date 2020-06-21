import styles from './Letter.module.css'

function Letter(props) {
    return (
        <div className={styles.letter}>
            <div className={styles.content}>
                <textarea
                    className={styles.text}
                    defaultValue='It was a dark and stormy night...'
                >
                </textarea>
                <button type='submit'>
                    Send
                </button>

            </div>
        </div>
    )
}

export default Letter