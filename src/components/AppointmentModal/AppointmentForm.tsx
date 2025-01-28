import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IFormDataDate } from '../../interfaces';
import DatePicker, { registerLocale } from 'react-datepicker';
import { enUS } from 'date-fns/locale/en-US';
import './AppointmentModal.scss';
import '../../styles/forms.scss';
import { filterTime, isWithinNextTwoDays } from '../../utils/date';

// Register the locale
registerLocale('en-US', enUS);

interface BookingFormProps {
  onSubmit: (data: IFormDataDate) => void;
  errors: { [key: string]: { message: string } };
}

const AppointmentForm: React.FC<BookingFormProps> = ({ onSubmit, errors }) => {
  const { control, handleSubmit } = useForm<IFormDataDate>();

  return (
    <>
      <h5>Please select the time</h5>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <div className="d-flex flex-column align-items-start">
          <div className="form-group border-0 p-0 mb-2">
            <legend className="mb-1">Appointment Date (9am - 5pm)</legend>
            <Controller
              name="startTime"
              control={control}
              rules={{ required: 'This field is required' }}
              render={({ field }) => (
                <DatePicker
                  selected={field.value ? new Date(field.value) : null}
                  onChange={(date) => {
                    if (date === null) return false;
                    const isoString = date.toISOString();
                    field.onChange(isoString);
                  }}
                  showTimeSelect
                  className="form-control"
                  filterDate={isWithinNextTwoDays}
                  filterTime={filterTime}
                  placeholderText="When?"
                  locale="en-US"
                  dateFormat="h:mm aa, MMMM d"
                />
              )}
            />
            {errors.selectedSlot && (
              <div className="error-message">{errors.selectedSlot.message}</div>
            )}
          </div>
          <button type="submit" className="btn-custom-form mt-4 align-self-center">
            Book
          </button>
        </div>
      </form>
    </>
  );
};

export default AppointmentForm;
