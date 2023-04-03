import React from 'react';
import logoWhiteImg from "../../img/logoWhite.png";
import logoGreenImg from '../../img/logoGreen.svg';
import {useNavigate} from "react-router-dom";

const Logo = (props) => {
    const navigate = useNavigate();
    return (
        <img onClick={e=>{navigate('/')}} src={props.color === 'green' ? logoGreenImg : logoWhiteImg} alt="Logo"
             style={{width: `${props.width}px`, cursor:'pointer'}}/>
    );
};

export default Logo;