import React from 'react';
import {Row, Col} from 'react-flexbox-grid/lib';

import styles from './About.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Profile from '../../images/profile.jpg';

const About = () => {
  return (
    <div className={styles.about}>
      <SectionTitle title={"This is WHo I Am"} />
      <Row>
        <Col xs={12} sm={6} md={5} lg={5}>
          <img src={Profile} />
        </Col>
        <Col xs={11} sm={6} md={7} lg={7}>
          <div className={styles.aboutMeText}>
            I&apos;m a software developer
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
