import React, { Component } from 'react';

import ProjectCard from '../projectcard/ProjectCard';

import styles from './Portfolio.less'

class Portfolio extends Component {

    render() {
        const projects = [
            {
                name: 'Test',
                description: 'This is the description',
                image: '',
                tags: ['Lead Tech', 'FullStack', 'Docker', 'Google Cloud Platform', 'Machine Learning'],
            },
            {
                name: 'Test',
                description: 'This is the description',
                image: '',
                tags: ['FullStack', 'Google Cloud Platform', 'Java'],
            },
            {
                name: 'Test',
                description: 'This is the description',
                image: '/assets/images/owkin.jpg',
                tags: ['FullStack', 'Google Cloud Platform', 'Java'],
            },
            {
                name: 'Test',
                description: 'This is the description',
                image: '',
                tags: ['FullStack', 'Google Cloud Platform', 'Java'],
            },
            {
                name: 'Test',
                description: 'This is the description',
                image: '',
                tags: ['FullStack', 'Google Cloud Platform', 'Java'],
            },
            {
                name: 'Test',
                description: 'This is the description',
                image: '',
                tags: ['FullStack', 'Google Cloud Platform', 'Java'],
            },
        ];

        return (
            <div className={styles.portfolio}>
                {
                    projects.map((project, i) => {
                        return (
                            <ProjectCard
                                key={i}
                                name={project.name}
                                tags={project.tags}
                                image={project.image}
                                description={project.description}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default Portfolio;