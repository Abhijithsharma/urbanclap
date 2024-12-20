import React from 'react';
import './rating.css';

function Ratings() {
    return (
        <>
            <div className="elements">
                <div className="firstdiv">
                    <i className="fa-solid fa-star"></i>
                    <div className="text">
                        <p className='heading'>4.8</p>
                        <p className='caption'>Service Rating</p>
                    </div>
                </div>
                <div className="seconddiv">
                    <i className="fa-solid fa-user"></i>
                    <div className="text">
                        <p className='heading'>12M+</p>
                        <p className='caption'>Customers Globally</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ratings;
