import Navbar from '../components/Navbar/Navbar';
import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Services from '../sections/Services/Services';
import Footer from '../sections/Footer/Footer';
import AppointmentModal from './../components/AppointmentModal/AppointmentModal';
import GetAQuote from '../sections/GetAQuote/GetAQuote';
import Map from '../sections/Map/Map.tsx';

const Home = () => {
  return (
    <>

       
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Map />
      <GetAQuote/>
      <Footer />
      <AppointmentModal />
    </>
  );
};

export default Home;
