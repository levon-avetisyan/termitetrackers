import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/modalSlice';
import { RootState } from '../../store/store';
import { useAppointment } from '../../hooks/useAppointment';
import CalendarComponent from './componenets/Calendar';
import QuestionsForm from './QuestionsForm';
import ContactForm from '../CreateContactForm/CreateContactForm';
import ThankYou from './ThankYou';
import './AppointmentModal.scss';
import {
  handleFormSubmitContact,
  handleFormSubmitDate,
  handleFormSubmitQuestions,
} from '../../utils/formHandlers';
import {
  IFormDataCreateContact,
  IFormDataQuestions,
  IFormDataSelectDate,
} from '../../interfaces/formDataInterfaces';

const AppointmentModal: React.FC = () => {
  const isModalVisible = useSelector((state: RootState) => state.modal.appointment);
  const dispatch = useDispatch();
  const {
    formError,
    formActiveStep,
    errors,
    isLoading,
    setFormActiveStep,
    setIsLoading,
    setErrors,
    setFormError,
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

  const formSubmitQuestions = (data: IFormDataQuestions) => {
    handleFormSubmitQuestions(data, setFormError, setFormActiveStep);
  };

  const formSubmitContact = (data: IFormDataCreateContact) => {
    handleFormSubmitContact(data, setFormError, setFormActiveStep, setIsLoading, setErrors);
  };

  const formSubmitDate = (data: IFormDataSelectDate) => {
    handleFormSubmitDate(data, setFormError, setFormActiveStep, setIsLoading, setErrors);
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
          {formError && <div className="form-error-message">{formError}</div>}

          {formActiveStep === 1 && (
            <QuestionsForm onSubmit={formSubmitQuestions} errors={formError} />
          )}

          {formActiveStep === 2 && <ContactForm onSubmit={formSubmitContact} />}

          {formActiveStep === 3 && <CalendarComponent onSubmit={formSubmitDate} errors={errors} />}

          {formActiveStep === 4 && <ThankYou closeModal={handleFinishAppointment} />}
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
