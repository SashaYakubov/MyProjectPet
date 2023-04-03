import React, {useState} from 'react';
import stl from './authCabinetMain.module.css';
import {auth} from "../../../../firebase/firebase-config";
import diskImg from '../../../../img/disk.png';
import editImg from '../../../../img/edit.png';
import CancelBtn from "../../../utilsUI/cancelBtn/CancelBtn";
import SubmitBtn from "../../../utilsUI/submitBtn/SubmitBtn";
import {
    deletePhotoCabinetFromStorage,
    getRefForPhotoCabinet,
    uploadPictureCabinet
} from "../../../../firebase/pet-services";
import {getUid} from "../../../../firebase/auth-service";
import {useNavigate} from "react-router-dom";
import {homePage} from "../../../../utils/constants";
import {updateProfile} from "firebase/auth";


const AuthCabunetMain = () => {

    const uid = getUid();
    const [photoLoad, setPhotoLoad] = useState(false);
    const [photo, setPhoto] = useState('');
    const [photoName, setPhotoName] = useState('');
    const navigate = useNavigate();

    const getData = () => {
        const email = document.getElementById('email').value
        const phone = document.getElementById('phone').value
        const fb = document.getElementById('fb').value

        const data = {
            email: email !== '' ? email : false,
            phone: phone !== '' ? phone : false,
            fb: fb !== '' ? fb : false
        }
        console.log(data)
        updateProfile(auth.currentUser, {
            photoURL: photo,
        }).catch(e=>console.log(e));

    }

    function handleFileSelect(event) {
        console.log(uid)
        console.log((new Date()).getTime())
        const ref = `${uid}.${(new Date()).getTime()}`;
        const file = event.target.files[0];
        console.log(file);
        if (!file)
            return
        uploadPictureCabinet(ref, file)
            .then(response => {
                if (response) {
                    getRefForPhotoCabinet(ref)
                        .then((url) => {
                            if (photoName !== '')
                                deletePhotoCabinetFromStorage(photoName).catch(e => console.log(e));
                            setPhotoName(ref);
                            setPhotoLoad(true);
                            setPhoto(url);
                        });
                }
            });
    }

    return (
        <div className={stl.containerMain}>
            <p className={stl.header}><b>Your profile.</b> Change, edit and manage your data.</p>
            <div className={stl.container}>
                <div className={stl.user}>
                    <img className={stl.userImg} src={photoLoad ? photo : auth.currentUser.photoURL} alt=""/>
                    <input id={'inputImg'} className={stl.inputImg} type={'file'}
                           onChange={(event) => handleFileSelect(event)}/>
                    <img onClick={() => {
                        const input = document.getElementById('inputImg');
                        input.click();
                    }} className={stl.editImg} src={editImg} alt="edit"/>
                    <div className={stl.userName}>
                        <p>
                            {auth.currentUser ? auth.currentUser.displayName : ''}
                        </p>
                    </div>
                </div>
                <div className={stl.contacts}>
                    <div className={stl.contact}>
                        <p className={stl.label}>Email</p>
                        <textarea id={'email'} className={stl.textareaWOBorder} rows={1}
                                  placeholder={"youremail@gmail.com"}>
                </textarea>
                    </div>
                    <div className={stl.contact}>
                        <p className={stl.label}>Phone</p>
                        <textarea id={'phone'} className={stl.textareaWOBorder} rows={1}
                                  placeholder={"+042069420"}>
                </textarea>
                    </div>
                    <div className={stl.contact}>
                        <p className={stl.label}>Facebook</p>
                        <textarea id={'fb'} className={stl.textareaWOBorder} rows={1}
                                  placeholder={"your fb profile"}>
                </textarea>
                    </div>
                </div>
            </div>
            <div className={stl.buttons}>
                <div className={stl.btn} onClick={()=> navigate(`/${homePage}`)}>
                    <CancelBtn text={'Cancel'} width={105}/>
                </div>
                <div onClick={() => getData()}>
                    <SubmitBtn img={diskImg} text={'Save changes'} width={148}/>
                </div>
            </div>
        </div>
    );
};

export default AuthCabunetMain;
