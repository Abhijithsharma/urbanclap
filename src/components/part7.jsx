import React, { useState } from 'react';
import Items from './items';
import './AllElements.css';

function All7() {
  const items = [
    { text: 'Facial & Cleanup', imgSrc: '/images/imageac1.png' },
    { text: 'Waxing', imgSrc: '/images/imageac2.png' },
    { text: 'Pedicure', imgSrc: '/images/imageac3.png' },
    { text: 'Manicure', imgSrc: '/images/imageac4.png' },
    { text: 'Hair care', imgSrc: '/images/imageac5.png' },
    { text: 'Bleach & Detan', imgSrc: '/images/imageac6.png' },
    { text: 'Threading & Face Waxing', imgSrc: '/images/imageac7.png' },
  ];

  const [startIndex, setStartIndex] = useState(0); // Track the starting index
  const visibleItemsCount = 5; // Number of visible items at a time

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
      <p className="headingText">AC and Appliance Repair</p>
      <div className="AllElementsWrapper">
        {/* Left button */}
        <button
          className="sideArrowButton left"
          onClick={handlePrevious}
          disabled={startIndex === 0} // Disable button at the start
        >
          &#x2B05; {/* Left arrow */}
        </button>

        {/* Elements */}
        <div className="AllElements">
          {items.slice(startIndex, startIndex + visibleItemsCount).map((item, index) => (
            <Items key={index} text={item.text} imgSrc={item.imgSrc} />
          ))}
        </div>

        {/* Right button */}
        <button
          className="sideArrowButton right"
          onClick={handleNext}
          disabled={startIndex + visibleItemsCount >= items.length} // Disable button at the end
        >
          &#x27A4; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
}

export default All7;
