import React, { useState } from 'react';
import Items from './All2item.jsx';
import './AllElements.css';

function AllElemnts1() {
  const items = [
    { imgSrc: '/images/imi1.png', text: 'Wall Panels' },
    { imgSrc: '/images/imi2.png', text: 'Native Water Purifier' },
    { imgSrc: '/images/imi3.png', text: 'Bathroom & kitchen cleaning' },
    { imgSrc: '/images/imi4.png', text: 'Full home painting' },
    { imgSrc: '/images/imi5.png', text: 'Native Smart Locks' },
    { imgSrc: '/images/imi6.png', text: 'Hair Studio for Women' }
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
    <>
    <div className='outsideContainer'>
    <p className='headingText' style={{margin:"60px 0px 30px 110px"}}>New and noteworthy</p>
    <div className="AllElementsWrapper">
      {/* Left button */}
      <button
        className="sideArrowButton left"
        onClick={handlePrevious}
        disabled={startIndex === 0} // Disable button at the start
      >
        &#x2B05; {/* Unicode for left arrow */}
      </button>

      {/* Elements */}
      <div className="AllElements">
        {items.slice(startIndex, startIndex + visibleItemsCount).map((item, index) => (
          <Items  key={index} text={item.text} imgSrc={item.imgSrc} />
        ))}
      </div>

      {/* Right button */}
      <button
        className="sideArrowButton right"
        onClick={handleNext}
        disabled={startIndex + visibleItemsCount >= items.length} // Disable button at the end
      >
        &#x27A4; {/* Unicode for right arrow */}
      </button>
    </div>
    </div>
    </>
  );
}

export default AllElemnts1;