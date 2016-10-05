import React from 'react';
import {Row, Col} from 'react-flexbox-grid/lib';

import styles from './ContactLinks.css';

const ContactLinks = () => {
    return (
      <Row>
        <Col className={styles.contactCol} xsOffset={0} xs={6} sm={2} smOffset={2} md={2} mdOffset={2} lg={2} lgOffset={2}>
          <section className={styles.contactLinks}>
            <a href="https://plus.google.com/u/0/+GouthamReddy5" className={styles.icon + ' ' + styles.iconCube + ' ' + styles.googleplus}>Google</a>
          </section>
        </Col>
        <Col className={styles.contactCol} xs={6} sm={2} md={2} lg={2}>
          <section className={styles.contactLinks}>
            <a href="https://twitter.com/9outham" className={styles.icon + ' ' + styles.iconCube + ' ' + styles.twitter}>Twitter</a>
          </section>
        </Col>
        <Col className={styles.contactCol} xs={6} sm={2} md={2} lg={2}>
          <section className={styles.contactLinks}>
            <a href="https://github.com/vgoutham" className={styles.icon + ' ' + styles.iconCube + ' ' + styles.github}>Github</a>
          </section>
        </Col>
        <Col className={styles.contactCol} xs={6} sm={2} md={2} lg={2}>
          <section className={styles.contactLinks}>
            <a href="https://facebook.com/goreddy" className={styles.icon + ' ' + styles.iconCube + ' ' + styles.facebook}>Facebook</a>
          </section>
        </Col>
      </Row>
    );
};

export default ContactLinks;
