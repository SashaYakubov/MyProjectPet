import React from 'react';
import ServicesHeader from "../../servicesHeader/ServicesHeader";
import AuthPageSideBarLeft from "../../../authPageSideBarLeft/AuthPageSideBarLeft";
import ServicesVetHelpMain from "./servicesVetHelpMain/ServicesVetHelpMain";
import AuthPageSideBarRight from "../../../authPageSideBarRight/AuthPageSideBarRight";
import stl from './servicesVetHelp.module.css'

const ServicesVetHelp = () => {
    return (
        <div>
            <ServicesHeader/>
            <div className={stl.container}>
                <AuthPageSideBarLeft/>
                <ServicesVetHelpMain/>
                <AuthPageSideBarRight/>
            </div>
        </div>
    );
};

export default ServicesVetHelp;