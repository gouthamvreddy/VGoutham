import React, {Component} from 'react';
import styles from './ScrollDown.css';
import downArrow from '../../images/chevron-down.svg';

class ScrollDown extends Component {
  render() {
    return (
      <section className={styles.scrollDown}>
        <img src={downArrow} />
      </section>
    );
  }
}

export default ScrollDown;
