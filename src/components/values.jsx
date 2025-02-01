import Image from '../images/values.jpg';
import SectionHead from './sectionHead';
import {GiCutDiamond} from 'react-icons/gi';
import {values} from '../data';
import Card from '../UI/card';

const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="Values" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} title="values" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugit impedit, necessitatibus eos quaerat pariatur tempora non.
          </p>
          <div className="values__wrapper">
            {values.map (value => (
              <Card className="values__value" key={value.id}>
                <span>{value.icon}</span>
                <h4>{value.title}</h4>
                <small>{value.desc}</small>
              </Card>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Values;
