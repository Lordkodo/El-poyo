import Head from 'next/head'
import Title from '../components/title/Title.jsx';
import Parallax from '../components/parallax/Parallax.jsx';
import Portfolio from '../components/portfolio/Portfolio.jsx';
import Letter from '../components/letter/Letter.jsx';
import Me from '../components/me/Me.jsx';

import reset from './reset.less';
import styles from './Home.less';

export default function Home() {
    // should get this info from somewhere
    const isBusy = false;

    return (
        <div className={reset}>
            <div className={styles.container}>
            <link href="https://fonts.googleapis.com/css2?family=Fascinate+Inline&family=Raleway&display=swap" rel="stylesheet"></link>

                <Head>
                    <title>Paul Mabillot</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <Title />

                    <div className={styles.parallaxe}>
                        <Parallax />
                    </div>

                    <div className={styles.about}>
                        <h2>Get shit done!</h2>
                        <Me />
                    </div>



                    {/*
                        <div className={styles.portfolio}>
                            <h2>Previous Works</h2>
                            <Portfolio />
                        </div>
                    */}

                    <div className={styles.contact}>
                        <h2>Get in touch</h2>
                        <p>
                        {
                            isBusy ?
                                'I\'m currently busy, but reach me so we can discuss for later'
                                : 'If you have great idea or project and you are looking for someone to get it done, don\'t hesitate to send me an email or reach me from linkedin.'
                        }
                        </p>

                        <Letter />
                    </div>
                </main>
            </div>
        </div>
    )
}
