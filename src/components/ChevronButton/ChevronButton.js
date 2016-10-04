import React from 'react';
import styles from './ChevronButton.css';
import downArrow from '../../images/chevron-down-black.png';

const ChevronButton = () => {
    return (
      <section className={styles.chevronButton}>
        <img src={downArrow} />
      </section>
    );
};

export default ChevronButton;
