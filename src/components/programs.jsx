import {FaCrown} from 'react-icons/fa6';
import {AiFillCaretRight} from 'react-icons/ai';
import SectionHead from './sectionHead';
import {programs} from '../data';
import Card from '../UI/card';
import {Link} from 'react-router-dom';

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown />} title="Programs" />

        <div className="programs__wrapper">
          {programs.map (program => (
            <Card className="programs__program" key={program.id}>
              <span>{program.icon}</span>
              <h4>{program.title}</h4>
              <small>{program.info}</small>
              <Link to={program.path} className="btn sm">
                Learn More <AiFillCaretRight />
              </Link>
            </Card>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Programs;
