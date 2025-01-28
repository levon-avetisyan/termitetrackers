import React from 'react';
import './About.scss';
import AboutImg from '../../assets/about.webp';

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">Who we are</h2>
        <h3 className="section-subtitle">Termite Inspection & Treatment Experts</h3>

        <div className="row">
          <div className="offset-lg-1 col-lg-5 d-flex align-items-center">
            <p className="section-article">
              Termite Trackers is a termite inspection brokerage company that connects homeowners
              with the best local termite treatment providers. We offer free termite inspections and
              provide customized treatment options to protect your home from these destructive
              pests.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={AboutImg} alt="About Termite Trackers" className="about-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
