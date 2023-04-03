import React from 'react';
import doggy from '../../../../img/Welcome_doggy.png';
import searchButton from '../../../../img/searchButton.svg';
import stl from './welcomePageDoggy.module.css';
import {auth} from "../../../../firebase/firebase-config";
import {useNavigate} from "react-router-dom";
import {foundPage, homePage, lostPage} from "../../../../utils/constants";


const WelcomePageDoggy = (props) => {
    console.log('props-----=====<', props)
    const navigate = useNavigate();
    return (
        <div className={stl.welcomePage}>
            <div className={stl.welcomeMainDoggy}>
                <div className={stl.welcomeMain}>
                    Welcome to your <span className={stl.highlight}>pawfessional</span> community
                </div>
                <div className={"welcome-main_buttons"}>
                    <button className={stl.buttonLost} onClick={() => {
                        if(!auth.currentUser)
                            props.openPopUp();
                        else navigate(`/${lostPage}`)
                    }}>
                        I lost my pet!
                        <img src={searchButton} alt="search"/>
                    </button>
                    <button className={stl.buttonFound} onClick={() => {
                        if(!auth.currentUser)
                            props.openPopUp();
                        else navigate(`/${foundPage}`)
                    }}>
                        I found a pet!
                    </button>
                </div>
                <div className={stl.welcomeMainJoin}>
                    I'm okay, just want to <span className={stl.highlight}
                                                 onClick={() => {
                                                     if (!auth.currentUser)
                                                         props.openPopUp();
                                                     else
                                                         navigate(`/${homePage}`);
                                                 }}>JOIN</span> the pawsome community!
                </div>
            </div>
            <div className={stl.welcomeMainDoggyImg}>
                <img src={doggy} alt='doggy_Main' className={stl.doggyImg}/>
            </div>
        </div>
    );
};

export default WelcomePageDoggy;