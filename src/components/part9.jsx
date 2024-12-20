import React, { useState } from 'react';
import Items from './items';
import './AllElements.css';

function All9() {
  const items = [
    { text: 'Facial & Cleanup', imgSrc: '/images/imagemk1.png' },
    { text: 'Waxing', imgSrc: '/images/imagemk2.png' },
    { text: 'Pedicure', imgSrc: '/images/imagemk3.png' },
    { text: 'Manicure', imgSrc: '/images/imagemk4.png' },
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
      <p className='headingText ' style={{margin:"60px 0px 30px 110px"}}>Salon for Kids and Mens</p>
    <div className="AllElementsWrapper">
      {/* Left button */}
    

      {/* Elements */}
      <div className="AllElements">
        {items.slice(startIndex, startIndex + visibleItemsCount).map((item, index) => (
          <Items  key={index} text={item.text} imgSrc={item.imgSrc} />
        ))}
      </div>

      {/* Right button */}
    
    </div>
    </div>
    </>
  );
}

export default All9;