import Section from '../section/Section.jsx';
import Vignette from '../vignette/Vignette.jsx';

import styles from './Me.less'

function Me(props) {
    return (
        <Section>
            <div className={styles.content}>
                <div className={styles.me}>
                    <div>
                        <div>
                            <h3>Hi, I'm Paul Mabillot</h3>

                            <p>
                                I've been a <i>FullStack</i> developer for four years and also a <i>Tech Lead</i> since a couple years.<br/>
                                I like to work in human sized company, where every ideas can be hear and take into account.
                            </p>

                            <p>
                                I'm happy to work with existing team, learning and sharing knowledge and ideas with people and helping to build a project together.<br/>
                                I also like to start a project from scratch and creating a first stable and evolutive version of your idea.
                            </p>
                        </div>

                        <div>
                            <h3>What can I do for you?</h3>
                            <p>
                                As a FullStack my fields of expertise is exended. I can do:
                            </p>
                            <ul>
                                <li>- Frontend: Make you project beautiful and easy to use</li>
                                <li>- Backend: To make you product quick and robust</li>
                                <li>- CICD: Integrate it in a process of automatitation for test, build and deployment</li>
                            </ul>


                            <p>
                                As a Tech Lead:
                            </p>
                            <ul>
                                <li>- team management and growing</li>
                                <li>- work directly with the Product Owner for roadmap preparation</li>
                                <li>- bring technical expertise.</li>
                                <li>- take responsibility for project management and features development.</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div>
                    <Vignette
                        src={'/me.jpeg'}
                        alt={'Paul Mabillot'}
                    />
                </div>
            </div>
        </Section>
    )
}

export default Me