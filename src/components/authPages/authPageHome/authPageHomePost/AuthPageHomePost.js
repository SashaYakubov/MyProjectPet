import React, {useEffect, useState} from 'react';
import stl from './authPageHomePost.module.css';
import {getAuth} from "firebase/auth";
import emptyStarRImg from './../../../../img/emptyStarR.svg';
import greenStarImg from './../../../../img/greenStar.svg';
import {
    isPostFavorite,
    updateProfileAddFavoriteIdPost,
    updateProfileDeleteFavoriteIdPost,
} from "../../../../firebase/pet-services";

const AuthPageHomePost = (props) => {
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const auth = getAuth();
    const postId = props.data.postId;
    const [activePhoto, setActivePhoto] = useState(0);
    // for(props.data.postData.photo1)
    let photoArr = [];
    if (props.data.postData.photo1)
        photoArr.push(props.data.postData.photo1);
    if (props.data.postData.photo2)
        photoArr.push(props.data.postData.photo2);
    if (props.data.postData.photo3)
        photoArr.push(props.data.postData.photo3);
    if (props.data.postData.photo4)
        photoArr.push(props.data.postData.photo4);
    console.log(photoArr);


    useEffect(() => {
        isPostFavorite(auth.currentUser.uid, postId).then(res => setIsFavorite(res));
        let hours1 = (Date.now() - props.data.postData.date) / 1000 / 60 / 60;
        let days1 = Math.floor(hours1 / 24);
        setDays(days1);
        let remainingHours = hours1 % 24;
        setHours(Math.trunc(remainingHours));
        let minutes1 = Math.round((remainingHours - Math.floor(remainingHours)) * 60);
        setMinutes(minutes1);
    }, []);


    return (
        <div className={stl.container}>
            <div className={stl.userIconBox}>
                <img className={stl.userIcon} src={props.data.postData.userIcon} alt=""/>
            </div>
            <div className={stl.wrapper}>
                <div className={stl.userInfo}>
                    <p className={stl.name}>{props.data.postData.userName}</p>
                    <p className={stl.time}>{`${days ? `${days}d` : ''} ${hours ? `${hours}h` : ''} ${minutes ? `${minutes}m` : ''}`}</p>
                </div>
                <div>
                    {photoArr.length ?
                        <div className={stl.imgBox}>
                            {!(photoArr.length === 1) ?
                                <div className={`${stl.arr} ${stl.right}`}
                                     onClick={() => setActivePhoto(prevState => {
                                         if (prevState === photoArr.length - 1)
                                             return 0;
                                         return prevState + 1;
                                     })}
                                >&#8594;</div>
                                : null
                            }
                            {!(photoArr.length === 1) ?
                                <div className={`${stl.arr} ${stl.left}`}
                                     onClick={() => setActivePhoto(prevState => {
                                         if (prevState === 0)
                                             return photoArr.length - 1;
                                         return prevState - 1;
                                     })}
                                >&#8592;</div>
                                : null
                            }
                            <img src={photoArr[activePhoto]} alt="photo"/>
                        </div>
                        : null
                    }
                    <p className={stl.text}>{props.data.postData.text}</p>
                </div>
            </div>
            <img className={stl.starImg} onClick={() => {
                if (!isFavorite) {
                    updateProfileAddFavoriteIdPost(auth.currentUser.uid, props.data.postId).then(res => {
                        setIsFavorite(res);
                    }).catch(e => console.log(e));
                } else {
                    updateProfileDeleteFavoriteIdPost(auth.currentUser.uid, props.data.postId).then(res => {
                        setIsFavorite(res);
                    }).catch(e => console.log(e));
                }

            }} src={isFavorite ? greenStarImg : emptyStarRImg} style={{width: '18px', height: '16px'}} alt={'star'}/>
            {/*{isFavorite ? <p>Favorite</p> : <p>Lo favorite</p>}*/}
        </div>
    );
};

export default AuthPageHomePost;