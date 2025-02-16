import axios from 'axios';
import { axiosClient } from '../api/axiosClient';
import {
  IHandleFormSubmitQuestions,
  IHandleFormSubmitDate,
  IHandleFormSubmitContact,
  IFetchFreeSlots,
} from '../interfaces/formDataInterfaces';
import { ERROR_MESSAGES } from '../constants/errorMessages';
import { GHL_ERROR_MESSAGES } from '../constants/enums';
import { getAdjustedEndDate, getAdjustedStartDate, timezone } from './formatters';
import { toast } from 'react-toastify';

export const handleFormSubmitQuestions: IHandleFormSubmitQuestions = (
  data,
  setFormError,
  setFormActiveStep
) => {
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

export const handleFormSubmitContact: IHandleFormSubmitContact = async (
  data,
  setFormError,
  setFormActiveStep,
  setIsLoading,
  setErrors
) => {
  try {
    setIsLoading(true);

    const { calendarId, name, state } = data.location;

    const payload = {
      locationId: import.meta.env.VITE_GHL_LOCATION_ID,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      address1: data.address1,
      city: data.city,
      state,
      timezone: timezone,
      customFields: [{ consent: true }, { location: name }],
    };

    const response = await axiosClient.post('/contacts', payload);

    sessionStorage.setItem('calendarId', calendarId || '');

    if (calendarId) {
      await fetchFreeSlots(calendarId, setIsLoading, setErrors);
    }

    sessionStorage.setItem('contactId', response.data.contact.id);
    setFormActiveStep(3);
    setIsLoading(false);
    setFormError('');
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response?.data?.message === GHL_ERROR_MESSAGES.DuplicateContact
    ) {
      toast.warn(
        'Seems like we already have your contact information. Please contact us directly to make an appointment.',
        { theme: 'colored' }
      );
      setFormError(ERROR_MESSAGES.generic);
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

const fetchFreeSlots: IFetchFreeSlots = async (calendarId, setIsLoading, setErrors) => {
  setIsLoading(true);
  try {
    const startDate = getAdjustedStartDate();
    const endDate = getAdjustedEndDate(startDate);

    const response = await axiosClient.get(`/calendars/${calendarId}/free-slots`, {
      params: {
        startDate: startDate.getTime().toString(),
        endDate: endDate.getTime().toString(),
      },
    });

    sessionStorage.setItem('freeSlots', JSON.stringify(response.data));

    setErrors({});
  } catch (err) {
    setErrors({ freeSlots: { message: ERROR_MESSAGES.generic } });
  } finally {
    setIsLoading(false);
  }
};

export const handleFormSubmitDate: IHandleFormSubmitDate = async (
  data,
  setIsLoading,
  setFormActiveStep,
  setFormError,
  setErrors
) => {
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
    setFormError(null);
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
