import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format to IST (Indian Standard Time)
  const formatDateTime = (date) => {
    const timeOptions = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    
    const dateOptions = {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: 'short',
    };

    const timeString = new Intl.DateTimeFormat('en-IN', timeOptions).format(date).toUpperCase();
    const dateString = new Intl.DateTimeFormat('en-IN', dateOptions).format(date);
    
    return { dateString, timeString };
  };

  const { dateString, timeString } = formatDateTime(time);

  return (
    <div className="ist-clock">
      <span className="clock-date">{dateString}</span>
      <span className="clock-divider">|</span>
      <span className="clock-time">{timeString}</span>
      <span className="clock-label">IST</span>
    </div>
  );
}

export default Clock;
