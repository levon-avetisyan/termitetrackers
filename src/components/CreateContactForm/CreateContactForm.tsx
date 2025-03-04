import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IFormDataCreateContact } from '../../interfaces/formDataInterfaces';
import { Link } from 'react-router-dom'; // Correct import
import '../../styles/forms.scss';
import { locations } from '../../constants/constants';

interface ICreateContactForm {
  onSubmit: (data: IFormDataCreateContact) => void;
}

const CreateContactForm: React.FC<ICreateContactForm> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormDataCreateContact>({
    mode: 'onChange',
  });

  const onSubmitForm = (data: IFormDataCreateContact) => {
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
          <div className="form-group border-0 p-0 mb-2">
            <legend className="mb-1">Location*</legend>
            <Controller
              name="location"
              control={control}
              rules={{ required: 'This field is required' }}
              render={({ field }) => (
                <select
                  className="form-control"
                  id="location"
                  value={field.value?.name || ''}
                  onChange={(e) =>
                    field.onChange(locations.find((loc) => loc.name === e.target.value))
                  }
                  onBlur={field.onBlur}
                  ref={field.ref}
                >
                  <option value="">Select a location</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location.name}>
                      {location.name}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.location && <div className="error-message">{errors.location.message}</div>}
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
                By clicking Next, you agree to receive marketing communications from Termite
                Trackers, including emails, phone calls, and automated text messages. SMS frequency
                varies. Message & data rates apply. Reply STOP to unsubscribe. Reply HELP for help.
                You also agree to our privacy policy and our terms and conditions.
              </b>
            </label>
            {errors.consent && <div className="error-message">{errors.consent.message}</div>}
            <div className="d-flex justify-content-center mt-2 privacy-terms">
              <Link
                target="_blank"
                to="/privacy-policy"
                className="text-link text-dark me-2 text-decoration-underline"
              >
                Privacy Policy
              </Link>
              <Link
                target="_blank"
                to="/terms-and-conditions"
                className="text-link text-dark text-decoration-underline"
              >
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

export default CreateContactForm;
