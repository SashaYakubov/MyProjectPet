import React from 'react';
import stl from './welcomePageComingSoon.module.css';
import heart from '../../../../img/heart.png'

const WelcomePageComingSoon = () => {
    return (
        <div className={stl.container}>
            <div className={stl.mainText}>
                Coming soon
            </div>
            <div className={stl.containerChildren}>
            <div className={stl.description}>
                We are planing to open a new service, <br/> where your cats and dogs can find their love!
            </div>
                <div className={stl.heart}>
                    <img src={heart} alt="heart"/>
                    <div className={stl.heartText}>LOVE</div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePageComingSoon;