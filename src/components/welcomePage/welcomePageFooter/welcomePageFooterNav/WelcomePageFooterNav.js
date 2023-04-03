import React from 'react';
import foundImg from '../../../../img/found.png';
import lostImg from '../../../../img/lost.svg';
import hotelsImg from '../../../../img/hotels.svg';
import walkingImg from '../../../../img/walking.png';
import fosteringImg from '../../../../img/fostering.png';
import vetHelpImg from '../../../../img/vetHelp.png';
import stl from './welcomePageFooterNav.module.css';
import {auth} from "../../../../firebase/firebase-config";
import {useNavigate} from "react-router-dom";
import {
    foundPage,
    lostPage,
    servicesFostering,
    servicesHotel,
    servicesVetHelp,
    servicesWalking
} from "../../../../utils/constants";

const WelcomePageFooterNav = (props) => {
    const navigate = useNavigate();
    return (
        <div className={stl.container}>
            <ul>
                <li onClick={()=> {
                    if(auth.currentUser)
                        navigate(`/${lostPage}`);
                    else props.openPopUp();
                }}><img src={lostImg} alt="lost"/> Lost</li>
                <li onClick={()=>{
                    if(auth.currentUser)
                        navigate(`/${foundPage}`);
                    else props.openPopUp();
                }}><img src={foundImg} alt="found"/> Found</li>
                <li onClick={()=>{
                    if(auth.currentUser)
                        navigate(`/${servicesVetHelp}`);
                    else props.openPopUp();
                }}><img src={vetHelpImg} alt="vetHelp"/> VetHelp</li>
            </ul>
            <ul>
                <li onClick={()=>{
                    if(auth.currentUser)
                        navigate(`/${servicesHotel}`);
                    else props.openPopUp();
                }}><img src={hotelsImg} alt="hotels"/> Hotels</li>
                <li onClick={()=> {
                    if (auth.currentUser)
                        navigate(`/${servicesWalking}`);
                    else props.openPopUp();
                }}><img src={walkingImg} alt="walking"/> Walking</li>
                <li onClick={()=> {
                    if (auth.currentUser)
                        navigate(`/${servicesFostering}`);
                    else props.openPopUp();
                }}><img src={fosteringImg} alt="fostering"/> Fostering</li>
            </ul>
        </div>

    );
};

export default WelcomePageFooterNav;