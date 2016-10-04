import React from 'react';
import {Row, Col} from 'react-flexbox-grid/lib';

import styles from './ContactLinks.css';
import twitterLogo from '../../images/twitter-logo.svg';
import linkedinLogo from '../../images/linkedin-sign.svg';
import facebookLogo from '../../images/facebook-logo.svg';
import githubLogo from '../../images/github-sign.svg';
import mailLogo from '../../images/mail-logo.svg';

const ContactLinks = () => {
    return (
      <Row>
        <Col className={styles.contactCol} xsOffset={0} xs={3} md={3} lg={1} lgOffset={4}>
          <section className={styles.contactLinks}>
            <a href="https://www.linkedin.com/in/gouthamvreddy"><img src={linkedinLogo} /></a>
          </section>
        </Col>
        <Col className={styles.contactCol} xs={3} md={3} lg={1}>
          <section className={styles.contactLinks}>
            <a href="http://twitter.com/9outham"><img src={twitterLogo} /></a>
          </section>
        </Col>
        <Col className={styles.contactCol} xs={3} md={3} lg={1}>
          <section className={styles.contactLinks}>
            <a href="https://github.com/gouthamvreddy"><img src={githubLogo} /></a>
          </section>
        </Col>
        <Col className={styles.contactCol} xs={3} md={3} lg={1}>
          <section className={styles.contactLinks}>
            <a href="mailto:gouthamvreddy@gmail.com?Subject=Hello" target="_top"><img src={mailLogo} /></a>
          </section>
        </Col>
      </Row>
    );
};

export default ContactLinks;
