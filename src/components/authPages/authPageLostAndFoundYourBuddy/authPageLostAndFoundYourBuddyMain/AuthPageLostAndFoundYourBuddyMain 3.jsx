import React, {useState} from 'react';
import stl from './authPageLostAndFoundYourBuddyMain.module.css';
import lostYourBuddy from '../../../../img/lostYourBuddy.jpeg';
import btnImg from "../../../../img/found.png";
import SubmitBtn from "../../../utilsUI/submitBtn/SubmitBtn";
import {auth} from "../../../../firebase/firebase-config";
import PhotoLoader from "./PhotoLoader";
import {writeNewFoundPostData, writeNewLostPostData} from "../../../../firebase/pet-services";
import {getUid} from "../../../../firebase/auth-service";
import {useNavigate} from "react-router-dom";
import {foundPage, key, lostPage} from "../../../../utils/constants";
import {useJsApiLoader, Autocomplete} from '@react-google-maps/api';
import {add} from "react-modal/lib/helpers/classList";


const AuthPageLostAndFoundYourBuddyMain = (props) => {
    const [url, setUrl] = useState(false);
    const changeUrl = (url) => {
        setUrl(url);
    };
    const userName = auth.currentUser.displayName;
    const userIconRef = auth.currentUser.photoURL;
    const uid = getUid();
    const navigate = useNavigate();
    const [isDataOk, setIsDataOk] = useState(true);

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: key,
        libraries: ['places'],
    });


    const getData = () => {
        const animal = document.getElementById('animal').value
        const sex = document.getElementById('sex').value
        const breed = document.getElementById('breed').value
        const color = document.getElementById('color').value
        const height = document.getElementById('height').value
        const distinctive = document.getElementById('distinctive').value
        const description = document.getElementById('description').value
        const location = document.getElementById('location').value
        const phone = document.getElementById('phone').value
        const email = document.getElementById('email').value
        const facebook = document.getElementById('facebook').value

        const data = {
            animal,
            sex,
            breed: breed !== '' ? breed : false,
            color: color !== '' ? color : false,
            height,
            distinctive: distinctive !== '' ? distinctive : false,
            description: description !== '' ? description : false,
            location: location !== '' ? location : false,
            phone: phone !== '' ? phone : false,
            email: email !== '' ? email : false,
            facebook: facebook !== '' ? facebook : false,
            photo: url,
            userIcon: userIconRef,
            userName,
            date: (new Date()).getTime(),
        }
        for (const datum in data) {
            if (!data[datum]) {
                setIsDataOk(false);
                return;
            }
        }

        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${key}`)
            .then(response => response.json())
            .then(info => {
                console.log(info);
                if (info.status === 'OK')
                    data.locationCord = info.results[0].geometry.location;
                else
                    data.locationCord = false;
                setIsDataOk(true);
                if (props.type === 'lost') {
                    writeNewLostPostData(uid, data).catch(e => console.log(e));
                    navigate(`/${lostPage}`);
                } else {
                    writeNewFoundPostData(uid, data).catch(e => console.log(e));
                    navigate(`/${foundPage}`);
                }
            })
            .catch(e => console.log(e));
    };

    if (!isLoaded)
        return (<p>Loading...</p>)

    return (
        <div className={stl.container}>
            <div className={stl.header}>
                {props.type === 'lost' ?
                    <span><b>Lost your buddy?</b> Keep calm and complete the form.</span> :
                    <span><b>Found a pet?</b> Please complete the form to help.</span>
                }
            </div>
            <div className={stl.containerChild}>
                <form className={stl.lostForm}>
                    <div>
                        <div className={stl.divContainer}>
                      <span>
                          Type:
                      </span>
                            <select id={'animal'} className={stl.lostList}>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className={stl.divContainer}>
                      <span>
                          Sex:
                      </span>
                            <select id={'sex'} className={stl.lostList}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>

                        </div>
                    </div>
                    <div className={stl.divContainer}>
                    <span>
                        Breed:
                    </span>
                        <textarea id={'breed'} className={stl.textareaWOBorder} rows={1}
                                  placeholder={"English Bulldog"}>
                </textarea>
                    </div>
                    <div className={stl.divContainer}>
                    <span>
                        Color:
                    </span>
                        <textarea id={'color'} className={stl.textareaWOBorder} rows={1} placeholder={"Black & White"}>
                </textarea>
                    </div>
                    <div className={stl.divContainer}>
                      <span>
                          Height:
                      </span>
                        <select id={'height'} className={stl.lostList}>
                            <option value="20-40">20-40</option>
                            <option value="40-70">40-70</option>
                            <option value="70-...">70-...</option>
                        </select>
                    </div>
                    <div className={stl.containerText}>
                        <div className={stl.distinkt}>
                            <p>
                                Distinctive features:
                            </p>
                            <p className={stl.clue}>
                                up to 60 char
                            </p>
                        </div>
                        <textarea id={'distinctive'} className={stl.distinktArea} rows={2} cols={34}
                                  placeholder={"blue collar with stars, no left ear, damaged tail."}>
                </textarea>
                    </div>
                    <div className={stl.containerText}>
                        <div className={stl.distinkt}>
                            <p>
                                Description:
                            </p>
                            <p className={stl.clue}>
                                up to 150 char
                            </p>
                        </div>
                        <textarea id={'description'} className={stl.distinktArea} rows={7} cols={34}
                                  placeholder={"brown fox jumps over a lazy dog. DJs flock by when jhkjk jhgMTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs."}>
                </textarea>
                    </div>
                    <div className={stl.containerText}>
                        <div className={stl.distinkt}>
                            <p>
                                Location:
                            </p>
                        </div>
                        <Autocomplete>
                            <input id={'location'} className={stl.distinktArea}
                                   style={{width: '300px'}}
                                   placeholder={"Florentin Street, Tel Aviv"}/>
                        </Autocomplete>
                    </div>
                </form>
                <div className={stl.lostPicFile}>
                    <div>
                        <img className={stl.lbImg} src={lostYourBuddy} alt="LB"/>
                    </div>

                    <PhotoLoader changeUrl={changeUrl} type={props.type}/>

                </div>
            </div>
            <div className={stl.lostContacts}>
                <hr/>
                <form className={stl.contacts}>
                    <div className={stl.contactsText}>
                        <p>
                            Contacts:
                        </p>
                    </div>
                    <div>
                        <textarea id={'phone'} className={stl.textareaWOBorder} rows={1} placeholder={"Phone*"}>
                </textarea>
                    </div>
                    <div>
                        <textarea id={'email'} className={stl.textareaWOBorder} rows={1} placeholder={"Email"}>
                </textarea>
                    </div>
                    <div>
                        <textarea id={'facebook'} className={stl.textareaWOBorder} rows={1}
                                  placeholder={"Facebook Profile"}>
                </textarea>
                    </div>
                </form>
                <div className={stl.user}>
                    <img className={stl.userImg} src={auth.currentUser ? auth.currentUser.photoURL : ''} alt=""/>
                    <div className={stl.userName}>
                        <p>
                            {auth.currentUser ? auth.currentUser.displayName : ''}
                        </p>
                    </div>
                </div>
                <div onClick={() => getData()} className={stl.subBtn}>
                    <SubmitBtn width={'148'} height={'34'} text={'Submit'} img={btnImg}/>
                </div>
                {isDataOk ? null : <p>Fill all fields</p>}
            </div>
        </div>
    );
};

export default AuthPageLostAndFoundYourBuddyMain;
