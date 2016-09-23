import React from 'react';
import styles from './About.css';
import Profile from '../../images/profile.jpg';

const About = () => {
  return (
    <div className={styles.about}>
      <img src={Profile} />
      <h1>Im a software developer</h1>
    </div>
  );
};

export default About;
