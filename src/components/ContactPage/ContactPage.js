import React from 'react';
import {Row, Col} from 'react-flexbox-grid/lib';

import styles from './ContactPage.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import ContactLinks from '../ContactLinks/ContactLinks';
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <div>
      <div className={styles.contactPage}>
        <SectionTitle title={"Get In TOuch"} />
        <ContactLinks />
        <Row>
          <Col className={styles.contactInfo} xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3} lg={6} lgOffset={3}>
            I&apos;m currently available for full-time or contract software developer positions in the Seattle region.
            If you have questions or would like to work with me on a project, please feel free to connect or send me an
             email: <a href="mailto:gouthamvreddy@gmail.com?Subject=Hello" target="_top">gouthamvreddy@gmail.com</a>.
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default About;
