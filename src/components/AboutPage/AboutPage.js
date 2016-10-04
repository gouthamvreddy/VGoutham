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
        <SectionTitle title={"This is WHo I Am"} />
        <Row>
          <Col xs={12} sm={6} md={5} lg={5}>
            <img className={styles.pictureCard} src={Profile} />
          </Col>
          <Col xs={11} sm={6} md={7} lg={7}>
            <div className={styles.aboutMeText}>
              {aboutMe}
            </div>
          </Col>
        </Row>
        <Row>
          <Link className="Contact" to="Contact" smooth={Boolean(true)} duration={500} ><ChevronButton /></Link>
        </Row>
      </div>
      <Element name="Contact" className="element">
        <ContactPage />
      </Element>
    </div>
  );
};

const aboutMe = `I'm a software developeR. I've enjoyed teaching at Code Fellows
  as well as learning from other students and instructors there.`;

export default About;
