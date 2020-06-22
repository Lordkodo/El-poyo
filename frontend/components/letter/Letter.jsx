import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from "./Letter.less"

class Letter extends Component {
    render() {
        return (
            <div className={styles.letter}>
                <div className={styles.content}>
                    <textarea
                        className={styles.text}
                        defaultValue='It was a dark and stormy night...'
                    >
                    </textarea>
                    <button type='submit'>
                        Send
                    </button>

                </div>
            </div>
        );
    }
}

export default Letter;