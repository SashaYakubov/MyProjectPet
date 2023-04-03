import React from 'react';
import AuthPageFavoritesHeader from "../../../authPageFavorites/authPageFavoritesHeader/AuthPageFavoritesHeader";
import AuthPageSideBarLeft from "../../../authPageSideBarLeft/AuthPageSideBarLeft";
import ServicesHotelMain from "./servicesHotelMain/ServicesHotelMain";
import AuthPageSideBarRight from "../../../authPageSideBarRight/AuthPageSideBarRight";
import ServicesHeader from "../../servicesHeader/ServicesHeader";
import stl from './servicesHotel.module.css';

const ServicesHotel = () => {
    return (
        <div>
            <ServicesHeader/>
            <div className={stl.container}>
                <AuthPageSideBarLeft/>
                <ServicesHotelMain/>
                <AuthPageSideBarRight/>
            </div>
        </div>
    );
};

export default ServicesHotel;