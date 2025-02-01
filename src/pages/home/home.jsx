import FAQs from '../../components/FAQs';
import Footer from '../../components/footer';
import MainHeader from '../../components/mainHeader';
import Programs from '../../components/programs';
import Testimonials from '../../components/testimonials';
import Values from '../../components/values';
import './home.css';

const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
      {/* <Footer/> */}
    </> )

};

export default Home;
