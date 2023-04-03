import React from 'react';
import Logo from "../../utilsUI/Logo";
import WelcomePageFooterContacts from "./welcomePageFooterContacts/WelcomePageFooterContacts";
import WelcomePageFooterNav from "./welcomePageFooterNav/WelcomePageFooterNav";
import stl from './welcomePageFooter.module.css';
import {changeIconOnPosts} from "../../../firebase/pet-services";

const WelcomePageFooter = (props) => {
    return (
        <div className={stl.container}>
            <Logo width={'201'} color={'white'}/>
            <WelcomePageFooterContacts/>
            <WelcomePageFooterNav openPopUp={props.openPopUp}/>
        </div>
    );
};

export default WelcomePageFooter;