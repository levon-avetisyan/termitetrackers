import React from 'react';
import './Services.scss';
import ServiceImg1 from '../../assets/service 1.webp';
import ServiceImg4 from '../../assets/service 4.webp';
import ServiceImg5 from '../../assets/service 5.webp';
import ServiceImg6 from '../../assets/service 6.webp';
import House from '../../assets/house.png';
import Shield from '../../assets/shield.png';
import Time from '../../assets/time.png';
import Assesement from '../../assets/assesement.png';
import Rodent from '../../assets/rodent.png';
import Ribbon from '../../assets/ribbon.png';
import Report from '../../assets/report.png';

const cardData = [
  {
    img: House,
    alt: 'House',
    title: 'Home Inspections',
    text: 'Schedule a thorough inspection to detect any signs of termites and ensure your home is safe.',
  },
  {
    img: Shield,
    alt: 'Shield',
    title: 'Termite Treatment',
    text: 'Effective treatments to eliminate termites and protect your property from damage.',
  },
  {
    img: Time,
    alt: 'Time',
    title: 'Infestation Tracking',
    text: 'Stay updated with real-time termite tracking and data for your area.',
  },
];

const offerData = [
  {
    icon: <img src={Assesement} alt="Assesement"/>,
    title: 'Assessment',
    text: 'Our team conducts comprehensive assessments to identify signs of termite activity and evaluate the extent of any infestation.',
  },
  {
    icon: <img src={Rodent} alt="Rodent"/>,
    title: 'Bait Stations',
    text: 'We utilize advanced baiting systems to monitor and eliminate termites, ensuring continuous protection and peace of mind.',
  },
  {
    icon: <img src={Ribbon} alt="Ribbon"/>,
    title: 'Awareness Sessions',
    text: 'Our sessions educate you about termites, their signs, and best practices to prevent infestations effectively.',
  },
  {
    icon: <img src={Report} alt="Report"/>,
    title: 'Activity Reports',
    text: 'Stay informed with detailed reports on termite activity and updates on the effectiveness of our solutions.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">What we do</h2>
        <h3 className="section-subtitle">
          At Termite Trackers, we specialize in getting your home inspected for termites.
          <br />
          We partner you with local professionals, who use the latest techniques and equipment to
          ensure a termite-free environment.
        </h3>
      </div>
      <div className="container my-5">
        <div className="text-center mb-4"></div>
        <div className="row g-4 mb-5 justify-content-center">
          {cardData.map((card, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card h-100 text-center">
                <div className="card-body">
                  <img src={card.img} alt={card.alt} />
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid">
        <h3 className="section-subtitle">
          Our mission is to provide a comprehensive solutions to protect your home and keep termites
          away. Contact us now to schedule an appointment.
        </h3>
        <div className="d-flex justify-content-center">
          <div className="service-img-wrapper">
            <img src={ServiceImg1} className="card-img-top" alt="Image 1" />
          </div>
          <div className="service-img-wrapper">
            <img src={ServiceImg4} className="card-img-top" alt="Image 4" />
          </div>
          <div className="service-img-wrapper">
            <img src={ServiceImg5} className="card-img-top" alt="Image 5" />
          </div>
          <div className="service-img-wrapper">
            <img src={ServiceImg6} className="card-img-top" alt="Image 6" />
          </div>
        </div>
      </div>
      <div className="what-we-offer">
        <div className="container">
          <h2 className="section-title text-center mb-5">What we offer</h2>
          <div className="row justify-content-center">
            {offerData.map((offer, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card-offer">
                
                  <h5>
                  <span className="icon">{offer.icon}</span>
                    {offer.title}
                  </h5>
                  <p>{offer.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="schedule-today">
        <div className="container text-center my-5">
          <h2>Schedule an Appointment Today</h2>
          <p>
            Don’t wait until termites cause damage to your home. Contact Termite Trackers now to
            schedule an inspection or learn more about our services. Together, let’s build a strong
            defense against termites and ensure your property stays protected.
          </p>
          <a href="#appointment" className="btn-custom-primary">
            Make an appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
