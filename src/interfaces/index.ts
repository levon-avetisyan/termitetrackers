import { Control, FieldErrors } from 'react-hook-form';

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

export interface IFreeSlot {
  startTime: string;
  endTime: string;
}

export interface ITokenRequestPayload {
  client_id: string;
  client_secret: string;
  grant_type: 'authorization_code' | 'refresh_token';
  code?: string;
  refresh_token?: string;
  user_type: 'Company' | 'Location';
  redirect_uri: string;
}
