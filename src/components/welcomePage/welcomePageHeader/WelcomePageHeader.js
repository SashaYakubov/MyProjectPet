import React from 'react';
import Logo from "../../utilsUI/Logo";
import stl from './welcomePageHeder.module.css';
import {auth} from "../../../firebase/firebase-config";
import {useNavigate} from "react-router-dom";
import {homePage} from "../../../utils/constants";

const WelcomePageHeader = (props) => {
    const navigate = useNavigate();

    return (
        <div className={stl.container}>
            <Logo width={'142'} color={'white'}/>
            {!auth.currentUser ?
                <div className={`signInBtn ${stl.btn}`} onClick={() => props.openPopUp()}>Sign in</div>
                :
                <div className={stl.personalInfo} onClick={()=>navigate(`/${homePage}`)}>
                    <img src={auth.currentUser.photoURL} alt=""/>
                    <p>{auth.currentUser.displayName}</p>
                </div>
            }
        </div>
    );
};

export default WelcomePageHeader;