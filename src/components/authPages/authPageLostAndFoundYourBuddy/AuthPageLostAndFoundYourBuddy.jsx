import React from 'react';
import AuthPageSideBarLeft from "../authPageSideBarLeft/AuthPageSideBarLeft";
import AuthPageLostAndFoundYourBuddyHeader from "./authPageLostAndFoundYourBuddyHeader/AuthPageLostAndFoundYourBuddyHeader";
import AuthPageLostAndFoundYourBuddyMain from "./authPageLostAndFoundYourBuddyMain/AuthPageLostAndFoundYourBuddyMain";
import AuthPageSideBarRight from "../authPageSideBarRight/AuthPageSideBarRight";
import stl from './authPageLostAndFoundYourBuddy.module.css';

const AuthPageLostAndFoundYourBuddy = (props) => {
    return (
        <div>
            <AuthPageLostAndFoundYourBuddyHeader/>
            <div className={stl.container}>
                    <AuthPageSideBarLeft/>
                    <AuthPageLostAndFoundYourBuddyMain type={props.type}/>
                    <AuthPageSideBarRight/>
            </div>
        </div>
    );
};

export default AuthPageLostAndFoundYourBuddy;