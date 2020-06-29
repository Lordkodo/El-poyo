import React, { Component } from 'react';

import styles from "./Letter.less"

class Letter extends Component {
    render() {
        return (
            <div className={styles.letter}>
                <div className={styles.card}>
                    <div className={styles.content}>

                        <div className={styles.address}>
                            <p>Paul Mabillot</p>
                            <p><a
                                href='mailto:mabillot.paul@gmail.com'
                                rel='noreferrer noopener'
                                target='_blank'
                            >
                                mabillot.paul@gmail.com
                            </a></p>
                            <p>France</p>
                        </div>


                        <span className={styles.stamp}/>
                        <span className={styles.circle}/>

                        <div className={styles.social}>
                            <a
                                href='https://github.com/Lordkodo'
                                rel='noreferrer noopener'
                                target='_blank'
                                className={styles.github}
                            />
                            <a
                                href='https://www.linkedin.com/in/paul-mabillot-a4486790/'
                                rel='noreferrer noopener'
                                target='_blank'
                                className={styles.linkedin}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Letter;