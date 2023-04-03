import React from 'react';
import stl from './popUpInfo.module.css';

const PopUpAuthInfo = () => {
    return (
        <div className={stl.container}>
            <div>
                <span className={stl.bold}>Welcome!</span>
                <span>Please sign in / sign up to continue or </span>
            </div>
            <div className={stl.facebookBtn}>Enter with Facebook</div>
        </div>
    );
};

export default PopUpAuthInfo;