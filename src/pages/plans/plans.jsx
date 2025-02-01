import HeaderImage from '../../images/header_bg_4.jpg';
import {plans} from '../../data';
import './plans.css';
import React from 'react';
import Header from '../../components/header';
import Card from '../../UI/card';

const Plans = () => {
  return (
    <React.Fragment>
      <Header title="Membership Plans" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reprehenderit dolore, minima perspiciatis explicabo facere consequuntur ea nihil nemo cumque.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map (plan => (
            <Card key={plan.id} className="plan">
              <h3>{plan.name}</h3>
              <small>{plan.desc}</small>
              <h1>{`$${plan.price}`}</h1>
              <h2>/mo</h2>
              <h4>Features</h4>
              {plan.features.map ((feature, index) => (
                <p key={index} className={!feature.available ? 'disabled' : ''}>
                  {feature.feature}
                </p>
              ))}
              <button className="btn lg">Choose Plan</button>
            </Card>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Plans;
