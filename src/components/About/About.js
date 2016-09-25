import React from 'react';
import styles from './About.css';
import Profile from '../../images/profile.jpg';

const About = () => {
  return (
    <div className={styles.about}>
      <h2>THIS IS WHAT I DO</h2>
      <img src={Profile} />
      I&apos;m a software developer
    </div>
  );
};

export default About;
