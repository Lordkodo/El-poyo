import styles from './Section.module.css'

function Section(props) {
    return (
        <div
            className={styles.content}
        >
            {props.children}
        </div>
    )
}

export default Section