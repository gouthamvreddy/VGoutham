import React from 'react';
import {Row, Col} from 'react-flexbox-grid/lib';

import styles from './ContactLinks.css';

const ContactLinks = () => {
    return (
      <Row>
        <Col className={styles.contactCol} xsOffset={2} xs={2} sm={2} smOffset={2} md={1} mdOffset={4} lg={1} lgOffset={4}>
          <section className={styles.contactLinks}>
            <a href="https://plus.google.com/u/0/+GouthamReddy5" className={styles.icon + ' ' + styles.iconCube + ' ' + styles.googleplus}>Google</a>
          </section>
        </Col>
        <Col className={styles.contactCol} xs={2} sm={2} md={1} lg={1}>
          <section className={styles.contactLinks}>
            <a href="http://twitter.com/9outham" className={styles.icon + ' ' + styles.iconCube + ' ' + styles.twitter}>Twitter</a>
          </section>
        </Col>
        <Col className={styles.contactCol} xs={2} sm={2} md={1} lg={1}>
          <section className={styles.contactLinks}>
            <a href="https://github.com/gouthamvreddy" className={styles.icon + ' ' + styles.iconCube + ' ' + styles.github}>Github</a>
          </section>
        </Col>
        <Col className={styles.contactCol} xs={2} sm={2} md={1} lg={1}>
          <section className={styles.contactLinks}>
            <a href="https://facebook.com/goreddy" className={styles.icon + ' ' + styles.iconCube + ' ' + styles.facebook}>Facebook</a>
          </section>
        </Col>
      </Row>
    );
};

export default ContactLinks;
