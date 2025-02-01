import Card from '../UI/card';
const Trainer = props => {
  return (
    <Card className="trainer">
      <div className="trainer__img">
        <img src={props.image} alt={props.name} />
      </div>
      <h3>{props.name}</h3>
      <p>{props.job}</p>
      <div className="trainer__socials">
        {props.socials.map ((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            {social.icon}
          </a>
        ))}
      </div>

    </Card>
  );
};

export default Trainer;
