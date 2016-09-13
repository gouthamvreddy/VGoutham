import React, {Component} from 'react';
import styles from './Home.css';
import ScrollDown from '../ScrollDown/ScrollDown';
import TypeWriter from 'react-typewriter';

export default class Main extends Component {
  render() {
    return (
      <section style={{height: "100%"}}>
        <section className={styles.home} >
          <div className={styles.homeOverlay} />
          <TypeWriter typing={1} minDelay={35}>
            <span style={{fontSize: '3em', position: 'absolute', top: "10px", left: "10px"}}>
              > Hello world!<br />
              > I'm Goutham Reddy<br />
              > Welcome to my personal website
            </span>
          </TypeWriter>
          <ScrollDown />
        </section>
      </section>
    );
  }
}
