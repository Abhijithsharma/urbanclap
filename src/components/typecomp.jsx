import React from 'react';
import './typecomp.css';

function Comp({ image, text }) {
    return (
        <>
            <div className='container1'>
                <div className='imgDiv'>
                    <img className='img1' src={image} alt={text} />
                </div>
                <div className='textDiv'>
                    <p className='text'>{text}</p>
                </div>
            </div>
        </>
    );
}

export default Comp;