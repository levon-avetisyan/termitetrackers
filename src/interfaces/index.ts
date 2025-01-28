import { Control, FieldErrors } from 'react-hook-form';

export interface IFormDataQuestions {
  ownHome: string;
  residenceType: string;
  flatRoof: string;
  presentDuringInspection: string;
}

export interface IFormDataContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  address1: string;
  city: string;
  state: string;
  selectedTimezone: string;
  calendarId: string;
  consent: boolean;
}

export interface IFormDataDate {
  startTime: string;
  endTime?: string;
  title: string;
  meetingLocationType?: string;
  appointmentStatus: string;
  assignedUserId?: string;
  calendarId: string;
  locationId: string;
  contactId: string;
  selectedTimezone: string;
  address: string;
  ignoreDateRange?: false;
  toNotify?: false;
  ignoreFreeSlotValidation: true;
  rrule?: 'RRULE:FREQ=DAILY;INTERVAL=1;COUNT=5';
}

export interface IAppointmentModalProps {
  isOpen: boolean;
  closeModal: () => void;
  handleFormSubmit: (values: FormData) => void;
  activeStep: number;
}

export interface IStep1Props {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  handleFormSubmit: (data: FormData) => void;
}
