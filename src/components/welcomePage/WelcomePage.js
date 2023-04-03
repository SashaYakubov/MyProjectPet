import React, {useEffect, useState} from 'react';
import WelcomePageHeader from "./welcomePageHeader/WelcomePageHeader";
import WelcomePageFooter from "./welcomePageFooter/WelcomePageFooter";
import WelcomePageMain from "./welcomePageMain/WelcomePageMain";
import PopUp from "./popUp/PopUp";
import ReactModal from "react-modal";
import stl from './welcomePage.module.css';
import {useDispatch, useSelector} from "react-redux";
import {showPopUpAction} from "../../redux/actions/popUpActions";

const WelcomePage = () => {
    const [showPopUp, setShowPopUp] = useState(false);
    const isShowPopUp = useSelector(state => state.popUp.isShowPopUp);
    const dispatch = useDispatch();


    if (isShowPopUp)
        document.body.style.overflow = "hidden";
    else
        document.body.style.overflow = "";
    const openPopUp = () => {
        document.body.style.overflow = "hidden";
        // document.getElementById('welcomePage').style.filter = 'blur(10px)';
        // setShowPopUp(true);
        dispatch(showPopUpAction(true));
    };

    const closePopUp = () => {
        document.body.style.overflow = "";
        // document.getElementById('welcomePage').style.filter = 'blur(0)';
        // setShowPopUp(false);
        dispatch(showPopUpAction(false));

    };
    useEffect(() => {
        return () => {
            document.body.style.overflow = "";
            closePopUp();
        }
    },[])

    return (
        <div>
            <div id={'welcomePage'}>
                <WelcomePageHeader openPopUp={openPopUp}/>
                <WelcomePageMain openPopUp={openPopUp}/>
                <WelcomePageFooter openPopUp={openPopUp}/>
            </div>
            <ReactModal
                isOpen={isShowPopUp}
                onRequestClose={closePopUp}
                className={stl.ReactModal__Content}
            >
                <PopUp closePopUp={closePopUp}/>
            </ReactModal>
        </div>
    );
};
export default WelcomePage;