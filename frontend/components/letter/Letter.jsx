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

                        <a
                            href='https://www.linkedin.com/in/paul-mabillot-a4486790/'
                            rel='noreferrer noopener'
                            target='_blank'
                        >
                            <span className={styles.stamp} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Letter;