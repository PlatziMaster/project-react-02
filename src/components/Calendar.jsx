import React from 'react';
import Lessons from '../components/Lessons';

const Calendar = () => {
  return (
    <div className="Calendar">
      <div className="Calendar-container">
        <div className="Calendar-content">
          <Lessons />
        </div>
      </div>
    </div>
  )
}

export default Calendar;