import React, {useEffect, useState} from 'react';
import stl from './authPageNewPostMain.module.css';
import SubmitBtn from "../../../utilsUI/submitBtn/SubmitBtn";
import foundImg from './../../../../img/found.png';
import {auth} from "../../../../firebase/firebase-config";
import {
    deletePhotoFromStorage,
    getRefForPhoto,
    uploadPicture,
    writeNewPostData
} from "../../../../firebase/pet-services";
import {getUid} from "../../../../firebase/auth-service";
import CancelBtn from "../../../utilsUI/cancelBtn/CancelBtn";
import {useNavigate} from "react-router-dom";
import {homePage} from "../../../../utils/constants";


const AuthPageNewPostMain = () => {
    const [text, setText] = useState(false);
    const [update, setUpdate] = useState(false);
    const [photos, setPhotos] = useState({
        photo1: false,
        photo2: false,
        photo3: false,
        photo4: false,
    });
    const [photoCounter, setPhotoCounter] = useState(0);
    const userName = auth.currentUser.displayName;
    const userIconRef = auth.currentUser.photoURL;
    const uid = getUid();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('rerender-------->');
    })

    function handleFileSelect(event) {
        console.log(uid)
        console.log((new Date()).getTime())
        const ref = `${uid}.${(new Date()).getTime()}`;
        const file = event.target.files[0];
        if (!file)
            return;

        uploadPicture(ref, file)
            .then(response => {
                if (response) {
                    console.log('is upload done?--------->', response);
                    getRefForPhoto(ref)
                        .then((url) => {
                            console.log('URL----->', url);
                            setPhotos(prevState => {
                                for (let photo in prevState) {
                                    if (!prevState[photo]) {
                                        prevState[photo] = {
                                            ref: url,
                                            file,
                                            name: file.name,
                                            refForDelete: ref,
                                        };
                                        setPhotoCounter(prevState => prevState + 1);
                                        return prevState;
                                    }
                                }
                                return prevState;
                            });
                        });
                }
            });
    }

    const handlerSubmitCLick = () => {

        let time = new Date();
        let data = {
            userIcon: userIconRef,
            date: time.getTime(),
            userName,
            text,
            photo1: !photos.photo1 ? false : photos.photo1.ref,
            photo2: !photos.photo2 ? false : photos.photo2.ref,
            photo3: !photos.photo3 ? false : photos.photo3.ref,
            photo4: !photos.photo4 ? false : photos.photo4.ref,
        };
        console.log(data);
        writeNewPostData(uid, data).catch(e => console.log(e));
        navigate(`/${homePage}`);
    };


    function checkAmountPhotos() {
        let flag = false;
        for (let i in photoCounter) {
            flag = !!photoCounter[i];
        }
        return flag ? (<p>Max Photos</p>) : null;
    }

    function deletePhoto(element) {
        deletePhotoFromStorage(element[1].refForDelete).then(() => {
            console.log('delete------->uspeh');
            setUpdate(prevState => !prevState);// без этой строки не происходит ререндер(просто обновление стейта)
            setPhotos(prevState => {//Это изменение стейта не приводит к ререндеру
                prevState[element[0]] = false;
                return prevState;
            })
        })
            .catch(e => console.log(e))
    }

    return (
        <div className={stl.container}>
            <div className={stl.header}>
                <p><b>Your new post!</b> Simply text, add photos and publish.</p>
            </div>
            <div className={stl.containerChild}>
                <form method="post">
                    <div className={stl.post}>
                        <div className={stl.textPost}>
                            <label htmlFor="text-input">Text:</label>
                            <p>up to 150 char</p>
                        </div>
                        <div className={stl.inputText}>
                            <input className={stl.pls} type="text" id="text-input" name="text-input"
                                   placeholder={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.'}
                                   onChange={(e) => setText(e.currentTarget.value)}
                            />
                        </div>
                    </div>
                    <div className={stl.photoZone}>
                        <div className={stl.textPost}>
                            <label htmlFor="photoInput">Photos:</label>
                            <p>up to 4 images</p>
                        </div>

                        <div className={stl.photos}>
                            {Object.entries(photos).map((element) => {
                                return element[1] ? <img src={element[1].ref} alt="picture" key={element[0]}/> : null
                            })}
                        </div>


                        <div className={stl.browBtn}>
                            <input type="file" id="photoInput" name="photo1" onChange={e => handleFileSelect(e)}
                                   style={{display: 'none'}}/>
                            <div onClick={() => {
                                const photoInput = document.getElementById('photoInput');
                                photoInput.click();
                            }}>
                                <CancelBtn width={'77'} text={'Browse'}/>
                            </div>
                        </div>
                        <div className={stl.photoNames}>
                            {Object.entries(photos).map((element) => {
                                return element[1] ? (
                                        <div className={stl.x} key={element[0]}>
                                            <p>{element[1].name}</p>
                                            <p onClick={() => deletePhoto(element)}>&#215;</p>
                                        </div>
                                    )
                                    : null
                            })}
                        </div>


                    </div>
                    <div className={stl.subForm}>

                        <div className={stl.user}>
                            <img className={stl.userImg} src={auth.currentUser ? auth.currentUser.photoURL : ''}
                                 alt=""/>
                            <div className={stl.userName}>
                                <p>
                                    {auth.currentUser ? auth.currentUser.displayName : ''}
                                </p>
                            </div>
                        </div>


                        <div className={stl.publishBtn} onClick={() => handlerSubmitCLick()}>
                            <SubmitBtn img={foundImg} width={'148'} text={'Publish'}/>
                            {checkAmountPhotos()}
                        </div>

                    </div>
                </form>
            </div>

            {/*<button onClick={() => {*/}
            {/*    console.log(photos);*/}
            {/*}}>check photos*/}
            {/*</button>*/}
            {/*<button onClick={() => setUpdate(prevState => !prevState)}>update</button>*/}

        </div>
    );
};

export default AuthPageNewPostMain;
