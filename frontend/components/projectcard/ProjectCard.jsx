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

    render() {
        const {
            name,
            tags,
            image,
            description,
        } = this.props;

        return (
            <div className={styles.project}>
                <div>
                    <span
                        className={styles.bg}
                        style={{
                            background: `url(${image}) no-repeat center / cover`,
                        }}
                    />
                    <p>{name}</p>
                    <p>{description}</p>
                </div>
                <div className={styles.hovered}>
                    {
                        tags.map((tag, i) => <p key={i}>{tag}</p>)
                    }
                </div>
            </div>
        );
    }
}

export default ProjectCard;