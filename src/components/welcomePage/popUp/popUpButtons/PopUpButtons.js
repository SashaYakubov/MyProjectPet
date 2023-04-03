import React, {useEffect} from 'react';
import foundImg from "../../../../img/found.png";
import CancelBtn from "../../../utilsUI/cancelBtn/CancelBtn";
import SubmitBtn from "../../../utilsUI/submitBtn/SubmitBtn";
import stl from './popUpButtons.module.css';
import {useDispatch, useSelector} from "react-redux";
import {signInAsyncAction, signUpAsyncAction} from "../../../../redux/actions/popUpActions";
import {logout} from "../../../../firebase/auth-service";

const PopUpButtons = () => {
    const data = useSelector(state => state.popUp.data);
    const type = useSelector(state => state.popUp.type);
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log(type);
    })
    return (
        <div className={stl.wrapper}>
            <hr/>
            <div className={stl.container}>
                <p>By clicking "Submit", you agree to us processing your information in accordance with <u>these
                    terms</u>
                </p>
                <div className={stl.btns}>
                    <div className={stl.cancelBtn} onClick={()=>logout()}><CancelBtn width={'105'} text={'Cancel'}/></div>
                    <div onClick={() => {
                        switch (type) {
                            case 'signUp':
                                dispatch(signUpAsyncAction(data));
                                break;
                            case 'signIn':
                                dispatch(signInAsyncAction(data));
                                break;
                            default:
                                console.log('132');
                        }
                    }}>
                        <SubmitBtn width={'148'} text={'Submit'} img={foundImg}/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PopUpButtons;