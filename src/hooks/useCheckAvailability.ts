import { useState } from 'react';
import axiosClient from '../api/axiosClient';

const getAdjustedEndDate = (startDate: Date): Date => {
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 7);
  return endDate;
};

export const useCheckAvailability = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);

  const fetchFreeSlots = async (calendarId: string) => {
    setIsLoading(true);
    try {
      const startDate = new Date();
      const endDate = getAdjustedEndDate(startDate);

      const response = await axiosClient.get(`/calendars/${calendarId}/free-slots`, {
        params: {
          startDate: startDate.getTime().toString(),
          endDate: endDate.getTime().toString(),
        },
      });

      sessionStorage.setItem('freeSlots', JSON.stringify(response.data));

      setErrors(null);
    } catch (err) {
      setErrors(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, errors, fetchFreeSlots };
};
