import React, {PropTypes} from 'react';
import styles from './SectionTitle.css';

const Footer = (props) => {
    return (
      <div>
        <h2 className={styles.sectionTitle}>{props.title}</h2>
        <div className={styles.sectionUnderline} />
      </div>
    );
};

Footer.propTypes = {
  title: PropTypes.string.isRequired
};

export default Footer;
