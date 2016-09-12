import React, {Component} from 'react';
import styles from './Home.css';

export default class Main extends Component {
  render() {
    return (
      <section className={styles.home}>
        <div className={styles.homeOverlay} />
      </section>
    );
  }
}
