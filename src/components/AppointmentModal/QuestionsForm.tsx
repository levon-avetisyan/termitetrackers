import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IFormDataQuestions } from '../../interfaces/formDataInterfaces';

interface QuestionsFormProps {
  onSubmit: (data: IFormDataQuestions) => void;
  errors?: string | null;
}

const QuestionsForm: React.FC<QuestionsFormProps> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm<IFormDataQuestions>();

  return (
    <>
      <h5>We'd love to know a bit more about your home!</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-column align-items-start">
          <div className="form-group">
            <legend>Do you own the home?</legend>
            <Controller
              name="ownHome"
              control={control}
              rules={{ required: 'This field is required' }}
              render={({ field }) => (
                <div className="d-flex">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="ownHomeYes"
                      {...field}
                      checked={field.value === 'yes'}
                      onChange={() => field.onChange('yes')}
                      required
                    />
                    <label className="form-check-label" htmlFor="ownHomeYes">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="ownHomeNo"
                      {...field}
                      checked={field.value === 'no'}
                      onChange={() => field.onChange('no')}
                      required
                    />
                    <label className="form-check-label" htmlFor="ownHomeNo">
                      No
                    </label>
                  </div>
                </div>
              )}
            />
          </div>

          <div className="form-group">
            <legend>Type of residence</legend>
            <Controller
              name="residenceType"
              control={control}
              rules={{ required: 'This field is required' }}
              render={({ field }) => (
                <div className="d-flex">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="residenceTypeTownhome"
                      {...field}
                      checked={field.value === 'townhome'}
                      onChange={() => field.onChange('townhome')}
                      required
                    />
                    <label className="form-check-label" htmlFor="residenceTypeTownhome">
                      Townhome
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="residenceTypeCondo"
                      {...field}
                      checked={field.value === 'condo'}
                      onChange={() => field.onChange('condo')}
                      required
                    />
                    <label className="form-check-label" htmlFor="residenceTypeCondo">
                      Condo
                    </label>
                  </div>
                </div>
              )}
            />
          </div>

          <div className="form-group">
            <legend>Does the house have a flat roof?</legend>
            <Controller
              name="flatRoof"
              control={control}
              rules={{ required: 'This field is required' }}
              render={({ field }) => (
                <div className="d-flex">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="flatRoofYes"
                      {...field}
                      checked={field.value === 'yes'}
                      onChange={() => field.onChange('yes')}
                      required
                    />
                    <label className="form-check-label" htmlFor="flatRoofYes">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="flatRoofNo"
                      {...field}
                      checked={field.value === 'no'}
                      onChange={() => field.onChange('no')}
                      required
                    />
                    <label className="form-check-label" htmlFor="flatRoofNo">
                      No
                    </label>
                  </div>
                </div>
              )}
            />
          </div>

          <div className="form-group">
            <legend>Will you be present during the inspection?</legend>
            <Controller
              name="presentDuringInspection"
              control={control}
              rules={{ required: 'This field is required' }}
              render={({ field }) => (
                <div className="d-flex">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="presentDuringInspectionYes"
                      {...field}
                      checked={field.value === 'yes'}
                      onChange={() => field.onChange('yes')}
                      required
                    />
                    <label className="form-check-label" htmlFor="presentDuringInspectionYes">
                      Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="presentDuringInspectionNo"
                      {...field}
                      checked={field.value === 'no'}
                      onChange={() => field.onChange('no')}
                      required
                    />
                    <label className="form-check-label" htmlFor="presentDuringInspectionNo">
                      No
                    </label>
                  </div>
                </div>
              )}
            />
          </div>

          <button type="submit" className="btn-custom-form mt-4 align-self-end">
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default QuestionsForm;
