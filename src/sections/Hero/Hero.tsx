import React from 'react';
import './Hero.scss';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/modalSlice';

const Hero: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <section className="hero">
        <div className="hero-text-content">
          <h1 className="display-4">Whats Going On Inside Your Walls?</h1>
          <p>Get the peace of mind that your home is protected against termites.</p>
          <button
            className="btn-custom-primary btn-hero"
            onClick={() => dispatch(openModal('appointment'))}
          >
            BOOK AN APPOINTMENT
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
