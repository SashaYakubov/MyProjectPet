import React from 'react';
import stl from './cancelBtn.module.css';

const CancelBtn = (props) => {
    return (
        <div className={stl.btn} style={{width: `${props.width}px`}}>{props.img ?
            <img src={props.img} style={{height:'16px'}} alt={'*'}/> : null}<div>{props.text}</div></div>
    );
};

export default CancelBtn;