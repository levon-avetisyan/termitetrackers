import Navbar from '../components/Navbar/Navbar';
import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Services from '../sections/Services/Services';
import Footer from '../sections/Footer/Footer';
import ScheduleAppointment from '../sections/ScheduleAppointment/ScheduleAppointment';
import AppointmentModal from './../components/AppointmentModal/AppointmentModal';
import GetAQuote from '../sections/GetAQuote/GetAQuote';
import Map from '../sections/Map/Map.tsx';
import Loader from '../components/Loaders/Loader';
import { ToastContainer } from 'react-toastify';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Map />
      <ScheduleAppointment />
      <GetAQuote />
      <Footer />
      <AppointmentModal />
      <Loader />
      <ToastContainer />
    </>
  );
};

export default Home;
