import React, { useState } from 'react';
import Items from './items.jsx';
import './AllElements.css';

function AllElemnts() {
  const items = [
    {  imgSrc: '/images/im1.png' },
    {  imgSrc: '/images/im2.png' },
    {  imgSrc: '/images/im3.png' },
    {  imgSrc: '/images/im4.png' },
    {  imgSrc: '/images/im5.png' },
    {  imgSrc: '/images/im6.png' },
    {  imgSrc: '/images/img7.png' },
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

export default AllElemnts;