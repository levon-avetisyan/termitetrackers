import { useState } from 'react';
import axios from 'axios';
import axiosClient from '../api/axiosClient';
import { IFormDataContact, IFormDataQuestions, IFormDataDate } from '../interfaces';
import { ERROR_MESSAGES } from '../constants/errorMessages';
import { GHL_ERROR_MESSAGES } from '../constants/enums';
import { timezone } from '../utils/date';
import { locations } from '../constants/constants';
import { useCheckAvailability } from './useCheckAvailability';

export const useAppointment = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [formActiveStep, setFormActiveStep] = useState(1);
  const [errors, setErrors] = useState<{ [key: string]: { message: string } }>({});
  const [isLoading, setIsLoading] = useState(false);
  const { fetchFreeSlots } = useCheckAvailability();

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
    try {
      setIsLoading(true);

      const payload = {
        locationId: import.meta.env.VITE_GHL_LOCATION_ID,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        address1: data.address1,
        city: data.city,
        state: 'Dolomite',
        timezone: timezone,
        customFields: [{ consent: true }, { location: data.location }],
      };

      const constactResponse = await axiosClient.post('/contacts/', payload);

      const selectedLocation = locations.find((location) => location.name === data.location);

      sessionStorage.setItem('calendarId', selectedLocation?.calendarId || '');

      if (selectedLocation && selectedLocation.calendarId) {
        await fetchFreeSlots(selectedLocation.calendarId);
      }

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
        calendarId: sessionStorage.getItem('calendarId'),
        locationId: import.meta.env.VITE_GHL_LOCATION_ID,
        contactId: sessionStorage.getItem('contactId'),
        selectedTimezone: timezone,
        address: data.address,
        ignoreFreeSlotValidation: true,
        assignedUserId: 'StoO9fztX1osRjECfuxx', // Add assignedUserId
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

  return {
    formError,
    formActiveStep,
    errors,
    isLoading,
    handleFormSubmitQuestions,
    handleFormSubmitContact,
    handleFormSubmitDate,
    setFormActiveStep,
    setFormError,
    setIsLoading,
  };
};
