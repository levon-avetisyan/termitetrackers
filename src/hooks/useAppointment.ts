import { useState } from 'react';

export const useAppointment = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [formActiveStep, setFormActiveStep] = useState(1);
  const [errors, setErrors] = useState<{ [key: string]: { message: string } }>({});
  const [isLoading, setIsLoading] = useState(false);

  return {
    formError,
    formActiveStep,
    errors,
    isLoading,
    setFormActiveStep,
    setFormError,
    setIsLoading,
    setErrors,
  };
};
