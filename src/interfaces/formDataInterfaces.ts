export interface IFormDataQuestions {
  ownHome: string;
  residenceType: string;
  flatRoof: string;
  presentDuringInspection: string;
}

export interface IFormDataCreateContact {
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
  location: {
    name: string;
    lat: number;
    lng: number;
    address: string;
    state: string;
    calendarId: string;
  };
}

export interface IFormDataSelectDate {
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

export interface IHandleFormSubmitQuestions {
  (
    data: IFormDataQuestions,
    setFormError: (error: string | null) => void,
    setFormActiveStep: (step: number) => void
  ): void;
}

export interface IHandleFormSubmitContact {
  (
    data: IFormDataCreateContact,
    setFormError: (error: string | null) => void,
    setFormActiveStep: (step: number) => void,
    setIsLoading: (loading: boolean) => void,
    setErrors: (errors: { [key: string]: { message: string } }) => void
  ): Promise<void>;
}

export interface IHandleFormSubmitDate {
  (
    data: IFormDataSelectDate,
    setIsLoading: (value: boolean) => void,
    setFormActiveStep: (step: number) => void,
    setFormError: (error: string | null) => void,
    setErrors: (errors: { [key: string]: { message: string } }) => void
  ): Promise<void>;
}

export interface IFetchFreeSlots {
  (
    calendarId: string,
    setIsLoading: (value: boolean) => void,
    setErrors: (errors: { [key: string]: { message: string } }) => void
  ): Promise<void>;
}
