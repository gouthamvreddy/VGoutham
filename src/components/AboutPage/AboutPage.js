import React from 'react';
import {Row, Col} from 'react-flexbox-grid/lib';
import Scroll from 'react-scroll';
import ChevronButton from '../ChevronButton/ChevronButton';

import styles from './AboutPage.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Profile from '../../images/profile.jpg';
import ContactPage from '../ContactPage/ContactPage';

const Link       = Scroll.Link;
const Element    = Scroll.Element;

const About = () => {
  return (
    <div>
      <div className={styles.about}>
        <SectionTitle title={"About Me"} />
        <Row>
          <Col xs={12} sm={6} md={5} lg={5}>
            <img className={styles.pictureCard} src={Profile} />
          </Col>
          <Col xs={12} sm={6} md={7} lg={7}>
            <div className={styles.aboutMeText}>
              <p>
              After leaving my job in the Bay area, I spent a year traveling -
              backpacked Southeast Asia, lived in Berlin or a couple months, did
              a roadtrip around New England & up the West Coast. My trip to the
              Pacific Northwest got me to move up to Seattle.
              </p>
              <p>
              For the past year, I&apos;ve focused on learning JavaScript and web development.
              I&apos;ve enjoyed teaching at Code Fellows as well as learning from
              other students and instructors. In my free time I like hiking/backpacking and
              participating in hackathons.
              </p>
            </div>
          </Col>
          <Col xs={12}>
            <Link className="Contact" to="Contact" smooth={Boolean(true)} duration={500} ><ChevronButton /></Link>
          </Col>
        </Row>
      </div>
      <Element name="Contact" className="element">
        <ContactPage />
      </Element>
    </div>
  );
};

export default About;
