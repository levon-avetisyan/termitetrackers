import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IFormDataContact } from '../../interfaces';
import { Link } from 'react-router-dom'; // Correct import
import './AppointmentModal.scss';
import '../../styles/forms.scss';

interface IContactFormProps {
  onSubmit: (data: IFormDataContact) => void;
}

const ContactForm: React.FC<IContactFormProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormDataContact>({
    mode: 'onChange',
  });

  const onSubmitForm = (data: IFormDataContact) => {
    if (!data.consent) {
      setError('consent', {
        type: 'manual',
        message: 'You must agree to the terms and conditions',
      });
      return;
    }
    onSubmit(data);
  };

  return (
    <>
      <h5>Please provide your appointment details</h5>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="d-flex flex-column align-items-start">
          <div className="form-group border-0 p-0 mb-2">
            <div className="row">
              <div className="col">
                <legend className="mb-1">First name*</legend>
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: 'This field is required' }}
                  render={({ field }) => (
                    <input type="text" className="form-control" id="firstName" {...field} />
                  )}
                />
                {errors.firstName && (
                  <div className="error-message">{errors.firstName.message}</div>
                )}
              </div>
              <div className="col">
                <legend className="mb-1">Last name*</legend>
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: 'This field is required' }}
                  render={({ field }) => (
                    <input type="text" className="form-control" id="lastName" {...field} />
                  )}
                />
                {errors.lastName && <div className="error-message">{errors.lastName.message}</div>}
              </div>
            </div>
          </div>
          <div className="form-group border-0 p-0 mb-2">
            <legend className="mb-1">City*</legend>
            <Controller
              name="city"
              control={control}
              rules={{ required: 'This field is required' }}
              render={({ field }) => (
                <input type="text" className="form-control" id="city" {...field} />
              )}
            />
            {errors.city && <div className="error-message">{errors.city.message}</div>}
          </div>
          <div className="form-group border-0 p-0 mb-2">
            <legend className="mb-1">Address*</legend>
            <Controller
              name="address1"
              control={control}
              rules={{ required: 'This field is required' }}
              render={({ field }) => (
                <input type="text" className="form-control" id="address" {...field} />
              )}
            />
            {errors.address1 && <div className="error-message">{errors.address1.message}</div>}
          </div>
          <div className="form-group border-0 p-0 mb-2">
            <legend className="mb-1">Email*</legend>
            <Controller
              name="email"
              control={control}
              rules={{ required: 'This field is required' }}
              render={({ field }) => (
                <input type="email" className="form-control" id="email" {...field} />
              )}
            />
            {errors.email && <div className="error-message">{errors.email.message}</div>}
          </div>
          <div className="form-group border-0 p-0 mb-2">
            <legend className="mb-1">Phone*</legend>
            <Controller
              name="phone"
              control={control}
              rules={{ required: 'This field is required' }}
              render={({ field }) => (
                <input type="tel" className="form-control" id="phone" {...field} />
              )}
            />
            {errors.phone && <div className="error-message">{errors.phone.message}</div>}
          </div>
          <div className="form-group form-check consent">
            <Controller
              name="consent"
              control={control}
              rules={{ required: 'You must accept the terms and privacy policy to continue' }}
              render={({ field }) => (
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="consent"
                  checked={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                />
              )}
            />
            <label htmlFor="consent" className="form-check-label terms-text">
              <b>
              By clicking Next, you agree to receive marketing communications from Termite Trackers, including 
              emails, phone calls, and automated text messages. SMS frequency varies. Message & data rates apply. 
              Reply STOP to unsubscribe. Reply HELP for help. You also agree to our privacy policy and our terms and conditions.
              </b>
            </label>
            {errors.consent && <div className="error-message">{errors.consent.message}</div>}
            <div className="d-flex justify-content-center mt-2 privacy-terms">
              <Link target="_blank" to="/privacy-policy" className="text-link text-dark me-2">
                Privacy Policy
              </Link>
              <Link target="_blank" to="/terms-and-conditions" className="text-link text-dark">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <button type="submit" className="btn-custom-form mt-4 align-self-center">
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
