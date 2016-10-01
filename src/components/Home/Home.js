import React, {Component} from 'react';
import styles from './Home.css';
import AnimatedChevronButton from '../AnimatedChevronButton/AnimatedChevronButton';
import TypeWriter from 'react-typewriter';
import Scroll from 'react-scroll';
import About from '../About/About';
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
          <TypeWriter typing={1} minDelay={35}>
            <span style={{fontSize: '3em', position: 'absolute', top: "10px", left: "10px"}}>
              > Hello world!<br />
              > I&apos;m Goutham Reddy<br />
              > Welcome to my personal website
            </span>
          </TypeWriter>
          <Link className="About" to="About" smooth={1} duration={500} ><AnimatedChevronButton /></Link>
        </section>
        <Element name="About" className="element">
          <About />
        </Element>
        <Footer />
      </section>

    );
  }
}
