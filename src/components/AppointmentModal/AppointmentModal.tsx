import React, { useState } from 'react';
import { IFormDataContact, IFormDataQuestions, IFormDataDate } from '../../interfaces';
import axiosClient from '../../api/axiosClient';
import './AppointmentModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { closeModal } from '../../store/modalSlice';
import AppointmentForm from './AppointmentForm';
import QuestionsForm from './QuestionsForm';
import { ERROR_MESSAGES } from '../../constants/errorMessages';
import axios from 'axios';
import { timezone } from '../../utils/date';
import ContactForm from './ContactForm';
import ThankYou from './ThankYou';
import { GHL_ERROR_MESSAGES } from '../../constants/enums';

const AppointmentModal: React.FC = () => {
  const calendarId = import.meta.env.VITE_GHL_CALENDAR_ID;
  const isModalVisible = useSelector((state: RootState) => state.modal.appointment);
  const dispatch = useDispatch();
  const [formError, setFormError] = useState<string | null>(null);
  const [formActiveStep, setFormActiveStep] = useState(1);
  const [errors, setErrors] = useState<{ [key: string]: { message: string } }>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmitQuestions = (data: IFormDataQuestions) => {
    if (
      data.ownHome === 'no' ||
      data.residenceType === 'condo' ||
      data.flatRoof === 'yes' ||
      data.presentDuringInspection === 'no'
    ) {
      setFormError(ERROR_MESSAGES.doNotQualify);
    } else {
      setFormError('');
      setFormActiveStep(2);
      setFormError(null);
    }
  };

  const handleFormSubmitContact = async (data: IFormDataContact) => {
    console.log('IFormDataContact', data);
    try {
      setIsLoading(true);
      const constactResponse = await axiosClient.post('/contacts/', {
        locationId: import.meta.env.VITE_GHL_LOCATION_ID,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address1: data.address1,
        city: data.city,
        state: 'Dolomite',
        timezone: timezone,
        customFields: [{ consent: true }],
      });

      sessionStorage.setItem('contactId', constactResponse.data.contact.id);
      setFormActiveStep(3);
      setIsLoading(false);
      setFormError('');
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response?.data?.message === GHL_ERROR_MESSAGES.DuplicateContact
      ) {
        setFormError(ERROR_MESSAGES.duplicatedContact);
        setIsLoading(false);
        return;
      }
      if (axios.isAxiosError(error) && error.response?.data?.errors) {
        setErrors(error.response.data.errors as { [key: string]: { message: string } });
      }
      setIsLoading(false);
      setFormError(ERROR_MESSAGES.generic);
    }
  };

  const handleFormSubmitDate = async (data: IFormDataDate) => {
    try {
      setIsLoading(true);
      await axiosClient.post('/calendars/events/appointments', {
        startTime: data.startTime,
        title: 'A new appointment from the website',
        appointmentStatus: 'new',
        calendarId: calendarId,
        locationId: import.meta.env.VITE_GHL_LOCATION_ID,
        contactId: sessionStorage.getItem('contactId'),
        selectedTimezone: timezone,
        address: data.address,
        ignoreFreeSlotValidation: true,
      });
      setFormActiveStep(4);
      setFormError('');
      setIsLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setFormError(`${ERROR_MESSAGES.generic} (${error.response?.data?.message})`);
        setIsLoading(false);
        return;
      }
      if (axios.isAxiosError(error) && error.response?.data?.errors) {
        setErrors(error.response.data.errors as { [key: string]: { message: string } });
      }
      setIsLoading(false);
    }
  };

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal('appointment'));
    }
  };

  const handleFinishAppointment = () => {
    console.log('handleFinishAppointment');
    dispatch(closeModal('appointment'));
    setFormActiveStep(1);
  };

  if (!isModalVisible) return null;

  return (
    <div
      className={`custom-modal-container ${isModalVisible ? 'open' : ''} fade-in-opacity`}
      onClick={handleCloseModal}>
      <div className="custom-modal fade-slide-in">
        {isLoading && (
          <div className="loading-spinner">
            <span className="spinner"></span>
          </div>
        )}

        <div className="form-header">Book Appointment</div>
        <div className="form-body">
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
            <AppointmentForm onSubmit={handleFormSubmitDate} errors={errors} />
          )}

          {formActiveStep === 4 && <ThankYou closeModal={handleFinishAppointment} />}
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
