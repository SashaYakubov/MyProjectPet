import React from 'react';
import AuthPageNewPostHeader from "./authPageNewPostHeader/AuthPageNewPostHeader";
import AuthPageSideBarLeft from "../authPageSideBarLeft/AuthPageSideBarLeft";
import AuthPageNewPostMain from "./authPageNewPostMain/AuthPageNewPostMain";
import stl from './authPageNewPost.module.css';
import AuthPageSideBarRight from "../authPageSideBarRight/AuthPageSideBarRight";

const AuthPageNewPost = () => {
    return (
        <div>
            <AuthPageNewPostHeader/>
            <div className={stl.wrapper}>
                <AuthPageSideBarLeft/>
                <AuthPageNewPostMain/>
                <AuthPageSideBarRight/>
            </div>
        </div>
    );
};

export default AuthPageNewPost;