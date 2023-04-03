import React from 'react';
import Logo from "../../../utilsUI/Logo";
import stl from './authPageNewPostHeder.module.css';

const AuthPageNewPostHeader = () => {
    return (
        <div className={stl.container}>
            <Logo color={'green'} width={'142'}/>
        </div>
    );
};

export default AuthPageNewPostHeader;