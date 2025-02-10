import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { closeModal } from '../../store/modalSlice';
import CalendarComponent from './componenets/Calendar';
import QuestionsForm from './QuestionsForm';
import ContactForm from './ContactForm';
import ThankYou from './ThankYou';
import { useAppointment } from '../../hooks/useAppointment';

const AppointmentModal: React.FC = () => {
  const isModalVisible = useSelector((state: RootState) => state.modal.appointment);
  const dispatch = useDispatch();
  const {
    formError,
    formActiveStep,
    errors,
    isLoading,
    handleFormSubmitQuestions,
    handleFormSubmitContact,
    handleFormSubmitDate,
    setFormActiveStep,
  } = useAppointment();

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal('appointment'));
    }
  };

  const handleFinishAppointment = () => {
    dispatch(closeModal('appointment'));
    setFormActiveStep(1);
  };

  if (!isModalVisible) return null;

  return (
    <div
      className={`custom-modal-container ${isModalVisible ? 'open' : ''} fade-in-opacity`}
      onClick={handleCloseModal}
    >
      <div className={`${formActiveStep === 3 ? 'calendar-step' : ''} custom-modal fade-slide-in`}>
        {isLoading && (
          <div className="loading-spinner">
            <span className="spinner"></span>
          </div>
        )}

        <div className="form-header">New Appointment</div>
        <div className={`${formActiveStep === 3 ? 'calendar-step' : ''} form-body`}>
          {formError && (
            <div className="form-error-message">
              <i className="bi bi-exclamation-triangle-fill me-1"></i>
              {formError}
            </div>
          )}
          {formActiveStep === 1 && (
            <QuestionsForm onSubmit={handleFormSubmitQuestions} errors={formError} />
          )}

          {formActiveStep === 2 && <ContactForm onSubmit={handleFormSubmitContact} />}

          {formActiveStep === 3 && (
            <CalendarComponent onSubmit={handleFormSubmitDate} errors={errors} />
          )}

          {formActiveStep === 4 && <ThankYou closeModal={handleFinishAppointment} />}
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
