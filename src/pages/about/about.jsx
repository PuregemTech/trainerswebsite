import Header from '../../components/header';
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css';

const About = () => {
  return (
    <>
      <Header title="About US" image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium excepturi consequuntur rerum veniam, accusantium sapiente nostrum placeat!
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt atque veniam quam quaerat. Est vitae modi at nisi tempora enim dolor necessitatibus eligendi impedit blanditiis explicabo, quo eaque rem possimus!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, pariatur asperiores alias minima inventore consectetur maiores impedit sapiente ratione at in aliquid eum amet itaque! Asperiores ipsa ad itaque id.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, optio eaque. Vero tempore nisi error.
            </p>
           </div>
         </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt atque veniam quam quaerat. Est vitae modi at nisi tempora enim dolor necessitatibus eligendi impedit blanditiis explicabo, quo eaque rem possimus!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, pariatur asperiores alias minima inventore consectetur maiores impedit sapiente ratione at in aliquid eum amet itaque! Asperiores ipsa ad itaque id.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our vision" />
          </div>
         </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt atque veniam quam quaerat. Est vitae modi at nisi tempora enim dolor necessitatibus eligendi impedit blanditiis explicabo, quo eaque rem possimus!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, pariatur asperiores alias minima inventore consectetur maiores impedit sapiente ratione at in aliquid eum amet itaque! Asperiores ipsa ad itaque id.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, optio eaque. Vero tempore nisi error.
            </p>
           </div>
         </div>
      </section>
    </>
  )
};

export default About;
