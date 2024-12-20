import React from 'react'
import './All2item.css'

function Items(props){
  const { text, imgSrc,heading } = props;

  return (
    <>
    <div className="con">
    <div className='containerItem'>
      <img className='itemImg' src={imgSrc} alt={text} />
      <p className='text'>{text}</p>
    </div>
    <p>{heading}</p>
    </div>
    </>
  );
}

export default Items;
    
    
    
    
    
