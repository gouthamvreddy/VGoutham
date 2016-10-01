import React from 'react';
import styles from './AnimatedChevronButton.css';
import downArrow from '../../images/chevron-down.svg';

const AnimatedChevronButton = () => {
    return (
      <section className={styles.animatedChevronButton}>
        <img src={downArrow} />
      </section>
    );
};

export default AnimatedChevronButton;
