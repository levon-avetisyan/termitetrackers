import React from 'react';
import './GetAQuote.scss';
import GetQuoteForm from '../../components/GetQuoteForm/GetQuoteForm.tsx';

const GetAQuote: React.FC = () => {
  return (
    <section className="getaquote">
      <div className="container">
        <h2 className="section-title">Get a Quote</h2>
        <h3 className='section-subtitle'>Tell us your needs, and we'll send a tailored quote fast</h3>
        <GetQuoteForm />
      </div>
    </section>
  );
};

export default GetAQuote;
