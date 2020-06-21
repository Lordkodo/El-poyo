import Waves from '../waves/Waves.jsx';
import Footprints from '../footprints/Footprints.jsx';
import Section from '../section/Section.jsx';

import styles from './Title.module.css';

function Title() {
    return (
        <Section>
            <div className={styles.splash}>
                <div className={styles.content}>
                    <h1 className={styles.text}>El Polo</h1>
                    <img
                        className={styles.image}
                        alt='icecream'
                        src='/icecream.png'
                    />
                </div>
                <Waves />
                <Footprints />
            </div>
        </Section>
    )
}

export default Title