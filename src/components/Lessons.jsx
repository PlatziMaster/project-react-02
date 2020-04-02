import React from 'react';
import Card from './Card';
import Description from './Description';
import Info from './Info';

const Lessons = () => {
  return (
    <div className="Lessons">
      <div className="Lessons-container">
        <Card />
        <Description />
        <Info />
      </div>
    </div>
  )
}
export default Lessons;