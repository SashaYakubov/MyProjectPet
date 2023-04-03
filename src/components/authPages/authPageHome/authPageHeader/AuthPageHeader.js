import React from 'react';
import stl from './authPageHeader.module.css';
import Logo from "../../../utilsUI/Logo";
import SubmitBtn from "../../../utilsUI/submitBtn/SubmitBtn";
import addImg from './../../../../img/found.png';
import {useNavigate} from "react-router-dom";
import {newPostPage} from "../../../../utils/constants";

const AuthPageHeader = () => {
    const navigate = useNavigate();

    return (
        <div className={stl.container}>
            <Logo color={'green'} width={'142'}/>
            <div onClick={()=>navigate(`/${newPostPage}`)}>
                <SubmitBtn img={addImg} width={'148'} text={'Add new'}/>
            </div>
        </div>
    );
};

export default AuthPageHeader;