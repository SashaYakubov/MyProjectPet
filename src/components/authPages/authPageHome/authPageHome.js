import React, {useState} from 'react';
import {getUid} from "../../../firebase/auth-service";
import AuthPageHeader from "./authPageHeader/AuthPageHeader";
import AuthPageSideBarLeft from "../authPageSideBarLeft/AuthPageSideBarLeft";
import AuthPageHomeMain from "./authPageHomeMain/AuthPageHomeMain";
import AuthPageSideBarRight from "../authPageSideBarRight/AuthPageSideBarRight";
import stl from './authPageHome.module.css';

const AuthPageHome = () => {
    return (
        <div>
            <AuthPageHeader/>
            <div className={stl.container}>
                <AuthPageSideBarLeft/>
                <AuthPageHomeMain/>
                <AuthPageSideBarRight/>
            </div>
        </div>
    );
};

export default AuthPageHome;