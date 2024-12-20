import React, { useState } from 'react';
import Items from './items';
import './part6.css';

function All6() {
  const items = [
    { text: 'Facial & Cleanup', imgSrc: '/urbanclap/images/imagec4.png' },
    { text: 'Waxing', imgSrc: '/urbanclap/images/imagec2.png' },
    { text: 'Pedicure', imgSrc: '/urbanclap/images/imagec3.png' },
  ];

  const [startIndex, setStartIndex] = useState(0); // Track the starting index
  const visibleItemsCount = 3; // Number of visible items at a time

  // Function to handle the "Next" button click
  const handleNext = () => {
    if (startIndex + visibleItemsCount < items.length) {
      setStartIndex(startIndex + 1);
    }
  };

  // Function to handle the "Previous" button click
  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="outsideContainer">
      <p className="headingText">Cleaning and Pest Control</p>
      <div className="AllElementsWrapper">

        {/* Elements */}
        <div className="AllElements">
          {items.slice(startIndex, startIndex + visibleItemsCount).map((item, index) => (
            <Items key={index} text={item.text} imgSrc={item.imgSrc} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default All6;
