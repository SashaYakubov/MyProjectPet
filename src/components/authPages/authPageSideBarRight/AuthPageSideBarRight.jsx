import React from 'react';
import stl from './authPageSideBarRight.module.css'
import ad1 from '../../../img/ad1.png';
import ad2 from '../../../img/ad2.png';
import ad3 from '../../../img/ad3.png';
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {foundPage, lostPage} from "../../../utils/constants";
import MyMap from "../myMap/MyMap";

const AuthPageSideBarRight = () => {
    const location = useLocation().pathname.slice(1);
    if(location === lostPage || location=== foundPage)
        return (
            <div className={stl.container}>
                <MyMap/>
            </div>
        );



    return (
        <div className={stl.container}>
            <div className={stl.adBlock}>
                <div>
                    <img src={ad3} alt="ad3"/>
                </div>
                <div>
                    <img src={ad1} alt="ad1"/>
                </div>
                <div>
                    <img src={ad2} alt="ad2"/>
                </div>
            </div>
        </div>
    );
};

export default AuthPageSideBarRight;