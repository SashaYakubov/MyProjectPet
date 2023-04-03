import React from 'react';
import stl from './authPageLostAndFoundYourBuddyHeader.module.css';
import Logo from "../../../utilsUI/Logo";

const AuthPageLostAndFoundYourBuddyHeader = () => {

    return (
        <div className={stl.container}>
            <Logo color={'green'} width={'142'}/>

        </div>
    );
};

export default AuthPageLostAndFoundYourBuddyHeader;