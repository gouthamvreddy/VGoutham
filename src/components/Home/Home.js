import React, {Component} from 'react';
import styles from './Home.css';
import ScrollDown from '../ScrollDown/ScrollDown';

export default class Main extends Component {
  render() {
    return (
      <section className={styles.home}>
        <div className={styles.homeOverlay} />
        <ScrollDown />
      </section>
    );
  }
}
