import Head from 'next/head'
import Title from '../components/title/Title.jsx';
import Parallax from '../components/parallax/Parallax.jsx';
import Portfolio from '../components/portfolio/Portfolio.jsx';
import Letter from '../components/letter/Letter.jsx';
import Me from '../components/me/Me.jsx';

import styles from './Home.less';
import reset from './reset.less';

export default function Home() {
    return (
        <div className={reset}>
            <div className={styles.container}>
            <link href="https://fonts.googleapis.com/css2?family=Fascinate+Inline&display=swap" rel="stylesheet"></link>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <Title />

                    <div className={styles.parallaxe}>
                        <Parallax />
                    </div>

                    <div className={styles.about}>
                    <h2>About Me</h2>
                        <Me />
                    </div>



                    <div className={styles.portfolio}>
                        <h2>Portfolio</h2>
                        <Portfolio />
                    </div>

                    <div className={styles.contact}>
                        <h2>Contact</h2>
                        <Letter />
                    </div>



                </main>

                <footer>
                    Footer
                </footer>
            </div>
        </div>
    )
}
