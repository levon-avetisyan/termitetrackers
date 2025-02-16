export const formatDate = (date: Date) => {
  const timezoneOffset = date.getTimezoneOffset();
  const adjustedDate = new Date(date.getTime() - timezoneOffset * 60 * 1000);
  const isoString = adjustedDate.toISOString();
  const offset = new Date().toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2];
  return isoString.slice(0, -1) + offset;
};

export const convertToISOString = (dateString: string): string => {
  const date = new Date(dateString.replace('GMT', ''));
  return date.toISOString();
};

export const convertToISOStringWithOffset = (
  dateString: string,
  offsetHours: number = 1
): string => {
  const date = new Date(dateString);
  const timezoneOffset = date.getTimezoneOffset();
  date.setHours(date.getHours() + offsetHours - timezoneOffset / 60);
  return date.toISOString();
};

export const isWithinNextTwoDays = (date: Date) => {
  const today = new Date();
  const twoDaysFromNow = new Date();
  twoDaysFromNow.setDate(today.getDate() + 2);
  return date >= today && date <= twoDaysFromNow;
};

export const filterTime = (time: Date) => {
  const hour = time.getHours();
  return hour >= 9 && hour <= 17;
};

export const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const getAdjustedEndDate = (startDate: Date): Date => {
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 7);
  return endDate;
};

export const getAdjustedStartDate = (): Date => {
  const startDate = new Date();
  const day = startDate.getDay();
  if (day === 6) {
    // Saturday
    startDate.setDate(startDate.getDate() + 2);
  } else if (day === 0) {
    // Sunday
    startDate.setDate(startDate.getDate() + 1);
  }
  return startDate;
};
