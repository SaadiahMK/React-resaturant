import React from "react";

import './Hero.css'

const Hero = () => {
    return (
        <div className= 'hero-img container'>
            <div className= 'hero-content'>
                <h1 className= 'heading-primary'>
                    <span>Welcome</span> To Home Restaurant
                </h1>

                <p className='text-black'> The best home gourmet in the comfort of your home</p>
                <p className= 'text-black'>
                    Book online or call <span className= 'special-word'> 347-755-1566</span>
                </p>

            </div>

        </div>
    )
}

export default Hero