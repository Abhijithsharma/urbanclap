import React from 'react';
import Comp from './typecomp'; // Assuming you have some styles for the container
import './first.css';

function Main() {
    // Data array for images and texts
    const data = [
        { image: '/urbanclap/images/type1.png', text: "Women's Salon & Spa" },
        { image: '/urbanclap/images/type2.png', text: "Men's Salon & Massage" },
        { image: '/urbanclap/images/type3.png', text: "AC & Appaliance Repair" },
        { image: '/urbanclap/images/type4.png', text: "Cleaning" },
        { image: '/urbanclap/images/type5.png', text: "Electrician, Plumber & Carpenter" },
        { image: '/urbanclap/images/type6.png', text: "Native Water Purifier" },
        { image: '/urbanclap/images/type7.png', text: "Painting & Waterproofing" },
    ];

    return (
        <>
            <div className='container'>
                <div className='firstDivision'>
                    <div className='texth'>
                        <p>Home services at your<br />doorstep</p>
                    </div>
                    <div className='components'>
                        <p className='serviceshead'>What are you looking for?</p>
                        <div className='services'>
                            {data.map((item, index) => (
                                <Comp key={index} image={item.image} text={item.text} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='secondDivision'>
                    <img src='/urbanclap/images/d2type1.png' alt="second section" />
                </div>
            </div>
        </>
    );
}

export default Main;
