import React from 'react';
import Logo from "../../../utilsUI/Logo";
import {foundNewPostPage, newLostYourBuddyPage, newPostPage} from "../../../../utils/constants";
import SubmitBtn from "../../../utilsUI/submitBtn/SubmitBtn";
import addImg from "../../../../img/found.png";
import lostImg from '../../../../img/lost.svg'
import {useNavigate} from "react-router-dom";
import stl from './authPageLostAndFoundPagesHeader.module.css';

const AuthPageLostAndFoundPagesHeader = () => {
    const navigate = useNavigate();
    return (
        <div className={stl.container}>
            <Logo color={'green'} width={'142'}/>
            <div className={stl.btnWrapper}>
                <div onClick={()=>navigate(`/${newLostYourBuddyPage}`)}>
                    <SubmitBtn img={lostImg} width={'148'} text={'I lost my pet'} color={'#FFE18B'}/>
                </div>
                <div className={stl.foundBtn} onClick={()=>navigate(`/${foundNewPostPage}`)}>
                    <SubmitBtn img={addImg} width={'148'} text={'I found a pet'}/>
                </div>
            </div>
        </div>
    );
};

export default AuthPageLostAndFoundPagesHeader;