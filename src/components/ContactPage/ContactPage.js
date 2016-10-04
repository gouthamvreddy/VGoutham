import React from 'react';
import {Row, Col} from 'react-flexbox-grid/lib';

import styles from './ContactPage.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <div>
      <div className={styles.contactPage}>
        <SectionTitle title={"Get In TOuch"} />
        <Row>
          <Col xs={11} sm={6} md={7} lg={7}>
            <div className={styles.aboutMeText}>
              I&apos;m a software developer
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default About;
