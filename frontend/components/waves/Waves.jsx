import styles from './Waves.less'

function Waves(props) {
    return (
        <div className={styles.landscape}>
            <div className={styles.ocean}>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
            </div>
            <div className={styles.bottom}></div>
        </div>
    )
}

export default Waves