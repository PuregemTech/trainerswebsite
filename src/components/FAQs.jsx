import SectionHead from './sectionHead';
import {FaQuestion} from 'react-icons/fa6';
import {faqs} from '../data';
import FAQ from './FAQ';
const FAQs = () => {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionHead icon={<FaQuestion />} title="FAQS" />
        <div className="faqs__wrapper">
          {faqs.map (faq => (
            <FAQ key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
