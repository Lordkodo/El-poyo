import Head from 'next/head'
import Title from '../components/title/Title.jsx';
import Parallax from '../components/parallax/Parallax.jsx';
import Portfolio from '../components/portfolio/Portfolio.jsx';
import Letter from '../components/letter/Letter.jsx';
import Me from '../components/me/Me.jsx';

export default function Home() {
    return (
        <div className="container">
        <link href="https://fonts.googleapis.com/css2?family=Fascinate+Inline&display=swap" rel="stylesheet"></link>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Title />

                <div className='parallaxe'>
                    <Parallax />
                </div>

                <div className='about'>
                <h2>About Me</h2>
                    <Me />
                </div>



                <div className='portfolio'>
                    <h2>Portfolio</h2>
                    <Portfolio />
                </div>

                <div className='contact'>
                    <h2>Contact</h2>
                    <Letter />
                </div>



            </main>

            <footer>
                Footer
            </footer>

            <style jsx>{`
                .container {
                    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;

                    margin: 0;
                    padding: 0;
                    text-align: center;
                }
                h2 {
                    font-family: 'Fascinate Inline', cursive;
                    font-size: 52px;
                    margin: 16px auto;
                }
                .about {
                    background-color: #96ceb4;
                    padding: 16px 0;
                }
                .parallaxe {
                }
                .portfolio {
                    background-color: #ff6f69;
                    padding: 16px 0;
                }
                .contact {
                    background-color: #ffcc5c;
                    padding: 16px 0;
                }
            `}</style>
        </div>
    )
}
