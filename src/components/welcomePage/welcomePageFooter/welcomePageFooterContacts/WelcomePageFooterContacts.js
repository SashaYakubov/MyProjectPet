import React from 'react';
import foundImg from '../../../../img/found.png';
import stl from './welcomePageFooterContacts.module.css';

const WelcomePageFooterContacts = () => {
    return (
        <div className={stl.container}>
            <div>
                <img src={foundImg} alt="facebook"/>
                <img src={foundImg} alt="instagram" className={stl.instIcon}/>
            </div>
            <p>
                <span>1600 Amphitheater Pkwy</span>
                <br/>
                <span>Mountain view, CA 94043, USA</span>
            </p>
        </div>
    );
};

export default WelcomePageFooterContacts;