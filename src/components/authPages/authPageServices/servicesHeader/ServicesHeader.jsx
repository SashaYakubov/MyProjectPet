import React from 'react';
import stl from './servicesHeader.module.css';
import Logo from "../../../utilsUI/Logo";
import SubmitBtn from "../../../utilsUI/submitBtn/SubmitBtn";
import plusImg from '../../../../img/plus.png';

const ServicesHeader = () => {

    return (
        <div className={stl.container}>
            <Logo color={'green'} width={'142'}/>
        </div>
    );
};

export default ServicesHeader;