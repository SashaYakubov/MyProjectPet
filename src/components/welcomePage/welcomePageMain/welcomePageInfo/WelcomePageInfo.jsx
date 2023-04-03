import React from 'react';
import pets from '../../../../img/welcomePageInfoPets.png';
import stl from './welcomePageInfo.module.css';

const WelcomePageInfo = () => {
    return (
        <div className={stl.container}>
            <div>
                <img src={pets} alt="Pets"/>
            </div>
            <div className={stl.infoContainer}>
                <span className={stl.info}>Here is collected everything that your pet needs:</span>
                <ul className={stl.list}>
                    <li>professional veterinarian tips;</li>
                    <li>useful information about education and care;</li>
                    <li>fostering home search;</li>
                    <li>information about pet-sitting and walking service;</li>
                    <li>and of course, great communication with new friends in your social network!</li>
                </ul>
            </div>
        </div>
    );
};

export default WelcomePageInfo;