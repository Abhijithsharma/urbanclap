import React from 'react'

function Items(props){
  const { text, imgSrc,heading } = props;

  return (
    <>
    <div className="con">
    <p>{heading}</p>
    <div className='containerItem'>
      <p className='text'>{text}</p>
      <img className='itemImg' src={imgSrc} alt={text} />
    </div>
    </div>
    </>
  );
}

export default Items;
    
    
    
    
    
