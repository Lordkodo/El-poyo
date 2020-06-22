import styles from './Section.less'

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