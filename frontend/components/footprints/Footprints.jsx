import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Footprints.less'

class Footprints extends Component {
    state = {
        intervalId: null,
        foots: [],
        count: 0,
    }

    componentDidMount() {
        this.setState({
            intervalId: setInterval(this.walk, 750),
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    walk = () => {
        const loop = [-40, -95, -140, -175, -222, -273, -319, -360]
        let NavWidth = this.container.clientWidth;
		let NavHeight = 400; // this.container.clientHeight;

        const { foots, count } = this.state;
        const previous = foots.length > 0 ? foots[foots.length - 1] : { x: 0, y: NavHeight, rotation: 0 };

        let random;
        if (previous.x < NavWidth / 2 && count === 0) {
            random = Math.floor(Math.random() * 60) - 30;
        } else if (count < loop.length) {
            random = loop[count] + Math.floor(Math.random() * 10) - 5;
            this.setState({ count: count + 1 });
        } else {
            // Rotation between -45 and 45 deg
            random = Math.floor(Math.random() * 70) - 35;
        }

        let footsies = [ ...this.state.foots, {
                x: Math.cos(random / 180 * Math.PI) * 40 + previous.x,
                y: Math.sin(random / 180 * Math.PI) * 40 + previous.y,
                rotation: random + 90,
            },
        ];

        if (Math.cos(random / 180 * Math.PI) * 45 + previous.x > (NavWidth * 1.5)) {
            this.setState({
                foots: [],
                count: 0
            });
        } else {
            this.setState({
                foots: footsies,
            });
        }
    }


    render() {
        const { foots } = this.state;

        return (
            <div
                className={styles.footprints}
                ref={(container) => this.container = container}
            >
                {
                    foots.map((foot, i) => {
                        const scale = (i % 2) === 0 ? -1 : 1;
                        return (
                            <img
                                key={i}
                                alt='step'
                                src='/assets/images/footprint.svg'
                                style={{
                                    transform: `rotate(${foot.rotation}deg) scaleX(${scale})  `,
                                    position: 'absolute',
                                    left: `${foot.x}px`,
                                    top: `${foot.y}px`,
                                }}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default Footprints;