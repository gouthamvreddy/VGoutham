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
            I&apos;m available for contract or full-time roles in the Seattle area.
            If you have questions or need help on a project please feel free to contact me.
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default About;
