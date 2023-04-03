import React from 'react';
import AuthPageLostAndFoundYourBuddyHeader
    from "../authPageLostAndFoundYourBuddy/authPageLostAndFoundYourBuddyHeader/AuthPageLostAndFoundYourBuddyHeader";
import stl from "./authPageServices.module.css";
import AuthPageSideBarLeft from "../authPageSideBarLeft/AuthPageSideBarLeft";
import AuthPageSideBarRight from "../authPageSideBarRight/AuthPageSideBarRight";
import AuthPageServicesMain from "./authPageServicesMain/AuthPageServicesMain";

const AuthPageServices = () => {
    return (
        <div>
            <AuthPageLostAndFoundYourBuddyHeader/>
            <div className={stl.container}>
                <AuthPageSideBarLeft/>
                <AuthPageServicesMain/>
                <AuthPageSideBarRight/>
            </div>
        </div>
    );
};

export default AuthPageServices;