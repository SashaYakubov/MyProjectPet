import React, {useEffect, useState} from 'react';
import AuthPageSideBarLeft from "../authPageSideBarLeft/AuthPageSideBarLeft";
import AuthPageLostAndFoundPagesHeader from "./authPageLostAndFoundPagesHeader/AuthPageLostAndFoundPagesHeader";
import AuthPageLostAndFoundPagesMain from "./authPageLostAndFoundPagesMain/AuthPageLostAndFoundPagesMain";
import AuthPageSideBarRight from "../authPageSideBarRight/AuthPageSideBarRight";
import stl from './authPageLostAndFoundPages.module.css';
import {getAllFoundPosts, getAllLostPosts} from "../../../firebase/pet-services";

const AuthPageLostAndFoundPages = (props) => {
    return (
        <div>
            <AuthPageLostAndFoundPagesHeader/>
            <div className={stl.container}>
                <AuthPageSideBarLeft/>
                <AuthPageLostAndFoundPagesMain type={props.type}/>
                <AuthPageSideBarRight/>
            </div>
        </div>
    );
};

export default AuthPageLostAndFoundPages;