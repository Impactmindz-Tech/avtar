// TimePicker.js

import React, { useState } from 'react';

const TimePicker = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isAM, setIsAM] = useState(true); // Initial value is AM

  const handleScroll = (e, type) => {
    const delta = e.deltaY;
    if (type === 'hours') {
      setHours((prevHours) => prevHours + (delta > 0 ? 1 : -1));
    } else {
      setMinutes((prevMinutes) => prevMinutes + (delta > 0 ? 1 : -1));
    }
  };

  const toggleAMPM = () => {
    setIsAM((prevIsAM) => !prevIsAM);
  };

  // Format hours and minutes to display leading zeros
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return (
    <div className="flex items-center">
      <div
        className="scrollable pr-4"
        onWheel={(e) => handleScroll(e, 'hours')}
      >
        {formattedHours}
      </div>
      <span className="pr-4">:</span>
      <div
        className="scrollable pr-4"
        onWheel={(e) => handleScroll(e, 'minutes')}
      >
        {formattedMinutes}
      </div>
      <button
        className="text-blue-500 hover:underline"
        onClick={toggleAMPM}
      >
        {isAM ? 'AM' : 'PM'}
      </button>
    </div>
  );
};

export default TimePicker;
