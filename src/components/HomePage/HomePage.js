import React, {Component} from 'react';
import styles from './HomePage.css';
import AnimatedChevronButton from '../AnimatedChevronButton/AnimatedChevronButton';
import Typist from 'react-typist';
import Scroll from 'react-scroll';
import AboutPage from '../AboutPage/AboutPage';

const Link       = Scroll.Link;
const Element    = Scroll.Element;

export default class Main extends Component {
  render() {
    return (
      <section style={{height: "100%"}}>
        <section className={styles.home} >
          <div className={styles.homeOverlay} />
          <Typist className={styles.typist}>
              > Hello world!<br />
              > I&apos;m Goutham Reddy<br />
              > Welcome to my personal website
          </Typist>
          <Link className="About" to="About" smooth={Boolean(true)} duration={500} ><AnimatedChevronButton /></Link>
        </section>
        <Element name="About" className="element">
          <AboutPage />
        </Element>
      </section>

    );
  }
}
