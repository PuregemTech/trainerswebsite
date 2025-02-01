import { MdEmail } from 'react-icons/md';
import Header from '../../components/header';
import HeaderImage from '../../images/header_bg_2.jpg';


import './contact.css';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minima consequatur nesciunt quisquam soluta deserunt!
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:ademolatoheebopeyemi@gmail.com" target="_blank" rel='noreferrer noopener'><MdEmail /></a>
            <a href="http://m.me/ademola" target="_blank" rel='noreferrer noopener'><BsMessenger/></a>
            <a href="https://wa.me/+2348132933439" target="_blank" rel='noreferrer noopener'><IoLogoWhatsapp /></a>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
