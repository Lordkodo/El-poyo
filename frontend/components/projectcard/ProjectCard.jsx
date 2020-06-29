import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectCard.less'

class ProjectCard extends Component {
    static propTypes = {
        name: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
    }

    state = {
        side: null,
    }

    onMouseEnter = event => {
        let side = null;
        const MARGE = 40;
        const { x, y, width, height } = event.target.getBoundingClientRect();

        if (x - MARGE <= event.clientX && event.clientX <= x + MARGE) {
            console.log('LEFT');
            side = 'left';
        } else if (x + width - MARGE <= event.clientX && event.clientX <= x + width + MARGE) {
            console.log('RIGHT');
            side = 'right';
        } else if (y - MARGE <= event.clientY && event.clientY <= y + MARGE) {
            console.log('UP');
            side = 'up';
        } else if (y + height - MARGE <= event.clientY && event.clientY <= y + height + MARGE) {
            console.log('DOWn');
            side = 'down';
        }

        this.setState({
            side,
        });
    }

    render() {
        const {
            name,
            tags,
            image,
            description,
        } = this.props;
        const { side } = this.state;

        const cx = side ? `${side}-mod`: '';

        return (
            <div
                className={styles.project}
                onMouseEnter={this.onMouseEnter}
            >
                <div>
                    <p>{name}</p>
                    <p>{description}</p>
                </div>
                <div className={`${styles.hovered} ${styles[cx]} `}>
                    {
                        tags.map((tag, i) => <p key={i}>{tag}</p>)
                    }
                </div>
            </div>
        );
    }
}

export default ProjectCard;