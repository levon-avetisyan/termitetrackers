import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.scss';
import useModal from '../../../hooks/useModal';
import { IFormDataSelectDate } from '../../../interfaces/formDataInterfaces';

interface IProps {
  onSubmit: (data: IFormDataSelectDate) => void;
  errors: { [key: string]: { message: string } };
}

const CalendarComponent: React.FC<IProps> = ({ onSubmit }) => {
  const localizer = momentLocalizer(moment);
  const freeSlots = sessionStorage.getItem('freeSlots');
  const events = [];
  const [selectedDate, setSelectedDate] = useState<IFormDataSelectDate | null>(null);

  const confirmSelection = () => {
    if (selectedDate) {
      onSubmit(selectedDate);
    }
    closeModal();
  };

  const cancelSelection = () => {
    setSelectedDate(null);
    closeModal();
  };

  const dayPropGetter = (date) => {
    const day = moment(date).day(); // Get the day of the week (0 = Sunday, 6 = Saturday)
    if (day === 0 || day === 6) {
      return {
        style: {
          backgroundColor: '#f0f0f0',
          pointerEvents: 'none',
          opacity: 0.5,
        },
      };
    }
    return {};
  };

  if (!freeSlots) return null;

  const parsedSlots = JSON.parse(freeSlots);

  Object.keys(parsedSlots).forEach((date) => {
    if (parsedSlots[date] && parsedSlots[date].slots) {
      parsedSlots[date].slots.forEach((slot) => {
        const start = new Date(slot);
        const end = new Date(start.getTime() + 60 * 60 * 1000);
        events.push({
          start,
          end,
          title: 'Available',
        });
      });
    }
  });
  console.log(events);

  const handleSelectEvent = (event: any) => {
    const selectedDate = {
      startTime: event.start,
      endTime: event.end,
    };

    setSelectedDate(selectedDate);
    openModal();
  };

  const scrollToTime = new Date();
  scrollToTime.setHours(8, 0, 0);

  const { openModal, closeModal, ModalComponent } = useModal(
    'Confirm Date Selection',
    confirmSelection,
    cancelSelection,
    new Date(selectedDate?.startTime)
  );

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable={false} // Disable slot selection
        onSelectEvent={handleSelectEvent} // Add onSelectEvent handler
        style={{ height: 500 }}
        culture="en-US" // Set locale to US
        scrollToTime={scrollToTime}
        dayPropGetter={dayPropGetter}
        step={60}
        timeslots={1}
        views={['month', 'day']}
      />
      {ModalComponent}
    </>
  );
};

export default CalendarComponent;
