import React, {Component} from 'react';
import styles from './HomePage.css';
import AnimatedChevronButton from '../AnimatedChevronButton/AnimatedChevronButton';
import Typist from 'react-typist';
import Scroll from 'react-scroll';
import AboutPage from '../AboutPage/AboutPage';
import Footer from '../Footer/Footer';

const Link       = Scroll.Link;
const DirectLink = Scroll.DirectLink;
const Element    = Scroll.Element;
const Events     = Scroll.Events;
const scroll     = Scroll.animateScroll;
const scrollSpy  = Scroll.scrollSpy;

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
        <Footer />
      </section>

    );
  }
}
