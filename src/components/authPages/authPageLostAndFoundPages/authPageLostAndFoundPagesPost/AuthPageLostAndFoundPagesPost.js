import React from 'react';
import foundImg from './../../../../img/found.png';
import stl from './authPageLostAndFoundPagesPost.module.css';

const AuthPageLostAndFoundPagesPost = (props) => {
    return (
        <div className={stl.container}>
            <div className={stl.mainImgBox}>
                <img src={props.data.postData.photo ? props.data.postData.photo : null} alt="no photo" />
            </div>
            <div className={stl.wrapper}>
                <p className={stl.typeAndBreed}>{`${props.data.postData.animal}, ${props.data.postData.breed}`}</p>
                <div>
                    <div className={stl.featuresBox}>
                        <div>
                            <p><span>Color:</span> {props.data.postData.color}</p>
                            <p><span>Sex:</span> {props.data.postData.sex}</p>
                            <p><span>Height:</span> {props.data.postData.height}</p>
                        </div>
                        <p><span className={stl.distinctive}>Distinctive features:</span> {props.data.postData.distinctive}</p>
                    </div>
                    <p className={stl.description}><span>Description</span> {props.data.postData.description}</p>
                    <hr/>
                    <div className={stl.location}>
                        <div>x</div>
                        <p>{props.data.postData.location}</p>
                    </div>
                    <div className={stl.personalInfo}>
                        <div className={stl.userInfo}>
                            <img src={props.data.postData.userIcon} alt=""/>
                            <div>
                                <p className={stl.name}>{props.data.postData.userName}</p>
                                <p className={stl.date}>{(new Date(props.data.postData.date)).toLocaleDateString()}</p>
                            </div>
                        </div>
                        <div className={stl.imgLinks}>
                            <div className={stl.imgLink} onClick={()=>window.alert(props.data.postData.phone)}>
                                <img src={foundImg} alt=""/>
                            </div>
                            <div className={stl.imgLink} onClick={()=>window.alert(props.data.postData.facebook)}>
                                <img src={foundImg} alt=""/>
                            </div>
                            <div className={stl.imgLink} onClick={()=>window.alert(props.data.postData.email)}>
                                <img src={foundImg} alt=""/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPageLostAndFoundPagesPost;