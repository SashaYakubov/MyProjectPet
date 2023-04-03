import React from 'react';
import ServicesHeader from "../../servicesHeader/ServicesHeader";
import stl from "../servicesHotel/servicesHotel.module.css";
import AuthPageSideBarLeft from "../../../authPageSideBarLeft/AuthPageSideBarLeft";
import ServicesHotelMain from "../servicesHotel/servicesHotelMain/ServicesHotelMain";
import AuthPageSideBarRight from "../../../authPageSideBarRight/AuthPageSideBarRight";
import ServicesFosteringMain from "./servicesFosteringMain/ServicesFosteringMain";

const ServicesFostering = () => {
    return (
        <div>
            <ServicesHeader/>
            <div className={stl.container}>
                <AuthPageSideBarLeft/>
                <ServicesFosteringMain/>
                <AuthPageSideBarRight/>
            </div>
        </div>
    );
};

export default ServicesFostering;