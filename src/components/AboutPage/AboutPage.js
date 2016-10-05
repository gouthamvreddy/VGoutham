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
                Hi there, I&apos;m Goutham. I grew up in the midwest and
                spent 8 years working as an <a href="https://en.wikipedia.org/wiki/Actuary">actuary</a>.
                 While I enjoyed analyzing data and examining risks, I didn&apos;t feel being an actuary
                 was the right career for me (also got tired of explaining what an actuary was, haha).
                  Being surrounded by all the tech companies in SF, I wanted to employ my
                  engineering skills to solve problems and work in a more exciting field.
                  I left my job a couple years ago to travel and find my true passion.
              </p>
              <p>
                After leaving my job in the Bay area, I spent a year traveling -
                backpacked Southeast Asia, lived in Berlin for a couple months, did
                a roadtrip around New England & up the West Coast. During my trip to the
                Pacific Northwest I decided I wanted to live in Seattle and work in the tech industry.
              </p>
              <p>
                For the past year, I&apos;ve focused on learning full-stack JavaScript and web
                development. I&apos;ve enjoyed teaching at Code Fellows as well as learning from
                other students & instructors. In my free time, I like hiking/backpacking
                (been to 19 nationals parks so far) and participating in hackathons.
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
