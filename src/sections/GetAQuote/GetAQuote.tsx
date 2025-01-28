import React from 'react';
import './GetAQuote.scss';
import GetQuoteForm from '../../components/GetQuoteForm/GetQuoteForm.tsx';

const GetAQuote: React.FC = () => {
  return (
    <section className="getaquote">
      <div className="container">
        <h2 className="section-title">Get a Quote</h2>
        <GetQuoteForm />
      </div>
    </section>
  );
};

export default GetAQuote;
