import {useState} from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

const FAQ = props => {
  const [isAnswerShowing, setIsAnswerShowing] = useState (false);

  return (
    <article className="faq" onClick={() => setIsAnswerShowing (prev => !prev)}>
      {/* setIsAnswerShowing (!isAnswerShowing) */}

      <div>
        <h4>{props.question}</h4>
        <button className="faq__icon">
          {isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}

        </button>
      </div>
      {isAnswerShowing &&
        <p>
          {props.answer}
        </p>}
    </article>
  );
};

export default FAQ;
