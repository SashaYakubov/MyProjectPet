import React from 'react';
import ServicesHeader from "../../servicesHeader/ServicesHeader";
import AuthPageSideBarLeft from "../../../authPageSideBarLeft/AuthPageSideBarLeft";
import ServicesHotelMain from "../servicesHotel/servicesHotelMain/ServicesHotelMain";
import AuthPageSideBarRight from "../../../authPageSideBarRight/AuthPageSideBarRight";
import stl from './servicesWalking.module.css'
import ServicesWalkingMain from "./servicesWalkingMain/ServicesWalkingMain";

const ServicesWalking = () => {
    return (
        <div>
            <ServicesHeader/>
            <div className={stl.container}>
                <AuthPageSideBarLeft/>
                <ServicesWalkingMain/>
                <AuthPageSideBarRight/>
            </div>
        </div>
    );
};

export default ServicesWalking;