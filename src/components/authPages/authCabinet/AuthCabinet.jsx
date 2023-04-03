import React from 'react';
import stl from './authCabinet.module.css';
import AuthPageSideBarLeft from "../authPageSideBarLeft/AuthPageSideBarLeft";
import AuthPageSideBarRight from "../authPageSideBarRight/AuthPageSideBarRight";
import AuthCabunetMain from "./authCabinetMain/AuthCabunetMain";
import AuthPageLostAndFoundYourBuddyHeader
    from "../authPageLostAndFoundYourBuddy/authPageLostAndFoundYourBuddyHeader/AuthPageLostAndFoundYourBuddyHeader";

const AuthCabinet = () => {
    return (
        <div>
            <AuthPageLostAndFoundYourBuddyHeader/>
            <div className={stl.container}>
                <AuthPageSideBarLeft/>
                <AuthCabunetMain/>
                <AuthPageSideBarRight/>
            </div>
        </div>
    );
};

export default AuthCabinet;