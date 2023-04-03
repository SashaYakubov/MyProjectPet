import React, {useState} from 'react';
import Logo from "../../utilsUI/Logo";
import PopUpSignUp from "./popUpSignUp/PopUpSignUp";
import PopUpSignIn from "./popUpSignIn/PopUpSignIn";
import stl from './popUp.module.css';
import PopUpButtons from "./popUpButtons/PopUpButtons";
import PopUpAuthInfo from "./popUpAuthInfo/PopUpAuthInfo";
import {mailFormat, specialCharacters} from "../../../utils/constants";
import {useDispatch} from "react-redux";
import {changeTypePopUpAction} from "../../../redux/actions/popUpActions";

const PopUp = (props) => {
    const [showSignIn, setShowSignIn] = useState(false);
    const dispatch = useDispatch();

    const setSignUp = () => {
        setShowSignIn(false);
        dispatch(changeTypePopUpAction('signUp'));
    };

    const setSignIn = () => {
        setShowSignIn(true);
        dispatch(changeTypePopUpAction('signIn'));
    };


    return (
        <div className={stl.container}>
            <div><Logo color={'green'} width={'200'}/></div>
            <div className={stl.closeBtn} onClick={() => props.closePopUp()}>&#215;</div>
            <PopUpAuthInfo/>
            <div className={stl.signChoose}>
                <div className={`${stl.signInBtn} ${!showSignIn ? stl.activeBtn : ''}`}
                     onClick={() => setSignUp()}>
                    <p>Sign up</p>
                </div>
                <div className={`${stl.signUpBtn} ${showSignIn ? stl.activeBtn : ''}`}
                     onClick={() => setSignIn()}>
                    <p>Sign in</p>
                </div>

            </div>
            {!showSignIn ? <PopUpSignUp/> : <PopUpSignIn/>}
            <PopUpButtons/>
        </div>
    );
};

export default PopUp;