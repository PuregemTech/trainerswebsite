import React from 'react';
import Header from '../../components/header';
import HeaderImage from '../../images/header_bg_5.jpg';
import Trainer from '../../components/trainer';
import {trainers} from '../../data';
import './trainers.css';
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa';

const Trainers = () => {
  return (
    <React.Fragment>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore natus, incidunt ipsam distinctio nisi numquam?
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map (trainer => (
            <Trainer
              key={trainer.id}
              image={trainer.image}
              name={trainer.name}
              job={trainer.job}
              socials={[
                {
                  icon: <BsInstagram />,
                  link: trainer.socials[0],
                },
                {
                  icon: <AiOutlineTwitter />,
                  link: trainer.socials[1],
                },
                {
                  icon: <FaFacebookF />,
                  link: trainer.socials[2],
                },
                {
                  icon: <FaLinkedinIn />,
                  link: trainer.socials[3],
                },
              ]}
            />
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Trainers;
