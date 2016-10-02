import React from 'react';
import styles from './SectionTitle.css';

const Footer = (props) => {
    return <h2 className={styles.sectionTitle}>{props.title}</h2>;
};

export default Footer;
