import React from 'react';
import { useDispatch } from 'react-redux';
import './ScheduleAppointment.scss';
import { openModal } from '../../store/modalSlice';

const ScheduleAppointment: React.FC = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal('appointment'));
  };

  return (
    <>
      <div className="schedule-today">
        <div className="container text-center my-5">
          <h2>Schedule an Appointment Today</h2>
          <p>
            Don’t wait until termites cause damage to your home. Contact Termite Trackers now to
            schedule an inspection or learn more about our services. Together, let’s build a strong
            defense against termites and ensure your property stays protected.
          </p>
          <a href="#appointment" className="btn-custom-primary" onClick={handleOpenModal}>
            Make an appointment
          </a>
        </div>
      </div>
    </>
  );
};

export default ScheduleAppointment;
