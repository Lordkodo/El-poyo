import Section from '../section/Section.jsx';
import Vignette from '../vignette/Vignette.jsx';

import styles from './Me.module.css'

function Me(props) {
    return (
        <Section>
            <div className={styles.content}>
                <div>
                    <p>Paul Mabillot</p>
                    <p>Lead dev and fullstack developer</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <Vignette
                    src={'/parasol.png'}
                    alt={'Parasol'}
                />
            </div>
        </Section>
    )
}

export default Me