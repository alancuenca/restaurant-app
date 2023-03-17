import React from 'react';
import { format, addDays, isAfter } from 'date-fns';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Events.css';
import murderMysteryImage from '../../assets/images/murder-mystery.jpeg';
import comingSoon from '../../assets/images/coming-soon.png'



function Events() {

  const events = [
    { name: 'Murder Mystery', date: new Date(2023, 2, 20), imageUrl: murderMysteryImage },
    { name: 'Mothers Day', date: new Date(2023, 4, 14), imageUrl: murderMysteryImage },
    { name: 'Fathers Day', date: new Date(2023, 5, 18), imageUrl: murderMysteryImage },
    { name: 'Murder Mystery', date: new Date(2023, 7, 20), imageUrl: murderMysteryImage },
    { name: 'Murder Mystery', date: new Date(2023, 9, 20), imageUrl: murderMysteryImage },
    { name: 'Murder Mystery', date: new Date(2023, 11, 20), imageUrl: murderMysteryImage },
    { name: 'Murder Mystery', date: new Date(2024, 1, 20), imageUrl: murderMysteryImage },
    { name: `Valentine's Day`, date: new Date(2024, 1, 14), imageUrl: murderMysteryImage },
    { name: 'Murder Mystery', date: new Date(2024, 5, 20), imageUrl: murderMysteryImage },
    { name: 'Murder Mystery', date: new Date(2024, 7, 20), imageUrl: murderMysteryImage },
    { name: 'Murder Mystery', date: new Date(2024, 9, 20), imageUrl: murderMysteryImage },
    { name: 'Murder Mystery', date: new Date(2024, 11, 20), imageUrl: murderMysteryImage },
    { name: 'Murder Mystery', date: new Date(2025, 1, 20), imageUrl: murderMysteryImage },
    { name: 'Murder Mystery', date: new Date(2025, 3, 20), imageUrl: murderMysteryImage },
    { name: 'Murder Mystery', date: new Date(2025, 5, 20), imageUrl: murderMysteryImage },

  ];

  const upcomingEvents = events.filter((event) => {
    const today = new Date();
    const futureDate = addDays(today, 300);
    return isAfter(event.date, today) && isAfter(futureDate, event.date);
  });

  const upcomingEvent = upcomingEvents[0];

  return (
    <div id="events">
      <div className="events-header">
        <h2 className="events-header-h2">Upcoming Events</h2>
      </div>

      <div className="events">

        <div className="events-calendar">
          {upcomingEvents.length > 0 ? (
            <ul>
              {upcomingEvents.map((event, index) => (
                <li key={index}>
                  {format(event.date, 'MMM d, yyyy')} - {event.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-events">No upcoming events</p>
          )}
        </div>

        {upcomingEvent ? (
          <div className="upcoming-event">
            <img src={upcomingEvent.imageUrl} alt={upcomingEvent.name} />
            <div className="event-name">{upcomingEvent.name}</div>
          </div>
        ) : (
            <img src={comingSoon} alt="coming_soon" className="coming_soon"/>
        )}

      </div>

      <div className="calendar">
        <Calendar
          tileContent={({ date }) => {
            const event = events.find((event) => event.date.toDateString() === date.toDateString());

            return event && <div className="event-indicator">{event.name}</div>;

          }}
        />
      </div>
    </div>
  );
}

export default Events;
