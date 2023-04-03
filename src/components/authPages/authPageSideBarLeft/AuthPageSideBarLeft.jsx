import React, {useEffect, useState} from 'react';
import stl from './authPageSideBarLeft.module.css';
import lostImg from '../../../img/lost.svg';
import lostImgAct from '../../../img/icons8-search (1).svg';
import foundImg from '../../../img/found.png';
import foundImgAct from '../../../img/icons8-cat-footprint-48.png';
import homeImg from '../../../img/hotels.svg';
import homeImgAct from '../../../img/icons8-home (1).svg';
import servicesImg from '../../../img/services.svg';
import servicesImgAct from '../../../img/icons8-scroll (1).svg';
import favoritesImg from '../../../img/icons8-for-you.svg';
import favoritesImgAct from '../../../img/icons8-for-you (1).svg';
import logOut from '../../../img/icons8-external-link.svg';
import hotelImg from '../../../img/hotels.svg';
import walkingImg from '../../../img/walking.png';
import fosteringImg from '../../../img/fostering.png';
import vetHelpImg from '../../../img/vetHelp.png';
import {auth} from "../../../firebase/firebase-config";
import {useLocation, useNavigate} from "react-router-dom";
import {
    authCabinet,
    favoritesPage,
    foundPage,
    homePage,
    lostPage, servicesFostering,
    servicesHotel, servicesVetHelp, servicesWalking
} from "../../../utils/constants";
import {logout} from "../../../firebase/auth-service";





const AuthPageSideBarLeft = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const path = location.pathname.slice(1);
    const servicesArr = [servicesHotel, servicesWalking, servicesFostering, servicesVetHelp];
    useEffect(() => {
        if (!auth.currentUser.photoURL)
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
        else setIsLoading(false);
    }, []);



    return (
        <aside className={stl.aside}>
            <ul>

                <li className={path === homePage ? stl.active : ''}
                    onClick={e => {
                        navigate(`/${homePage}`);
                    }}>
                    <img
                        src={path === homePage ? homeImgAct : homeImg}
                        alt="home"/>
                    <p>
                    Home
                    </p>
                </li>


                <li className={path === lostPage ? stl.active : ''}
                    onClick={e => {
                        navigate(`/${lostPage}`);
                    }}><img
                    src={path === lostPage  ? lostImgAct : lostImg}
                    alt="home"/>
                    <p>
                    Lost
                    </p>
                </li>


                <li className={path === foundPage ? stl.active : ''}
                    onClick={e => {
                        navigate(`/${foundPage}`);
                    }}><img
                    src={path === foundPage ? foundImgAct : foundImg}
                    alt="home"/>Found
                </li>
                <li className={servicesArr.includes(path) ? `${stl.active}` : ''}
                    onClick={e => {
                        navigate(`/${servicesHotel}`);
                    }}>
                    <img
                        src={path === servicesHotel ? servicesImgAct : servicesImg }
                        alt="home"/>Services
                </li>
                <div style={servicesArr.includes(path) ? {display: 'block'} : {display: 'none'}}>
                    <ul className={stl.extraList}>
                        <li className={path === servicesHotel ? stl.activeService : ''}
                            onClick={e => {
                                navigate(`/${servicesHotel}`)
                            }}><img src={hotelImg} alt="hotel"/>Hotels
                        </li>
                        <li className={path === servicesWalking ? stl.activeService : ''}
                            onClick={e => {
                                navigate(`/${servicesWalking}`)
                            }}><img src={walkingImg} alt="walking"/>Walking
                        </li>
                        <li className={path === servicesFostering ? stl.activeService : ''}
                            onClick={e => {
                                navigate(`/${servicesFostering}`)
                            }}><img src={fosteringImg} alt="fostering"/> Fostering
                        </li>
                        <li className={path === servicesVetHelp ? stl.activeService : ''}
                            onClick={e => {
                                navigate(`/${servicesVetHelp}`)
                            }}><img src={vetHelpImg} alt="vetHelp"/> VetHelp
                        </li>
                    </ul>
                </div>
                <li className={path === favoritesPage ? stl.active : ''}
                    onClick={e => {
                        navigate(`/${favoritesPage}`)
                    }}><img
                    src={path === favoritesPage ? favoritesImgAct : favoritesImg }
                    alt="home"/>Favorites
                </li>
            </ul>
            <p className={stl.hr}>
                <hr/>
            </p>
            {isLoading ? null :
                <div className={`${stl.user} ${path === authCabinet ? stl.active : ''}`} onClick={e => {
                    navigate(`/${authCabinet}`)
                }}>
                    <img className={stl.userImg} src={auth.currentUser ? auth.currentUser.photoURL : ''} alt=""/>
                    <div className={stl.userName}>
                        <p>
                            {auth.currentUser ? auth.currentUser.displayName : ''}
                        </p>
                    </div>
                </div>}
            <div className={stl.logout} onClick={e => {
                logout()
            }}>
                <img className={stl.logoutImg} src={logOut} alt=""/>
                Logout
            </div>
            <p className={stl.hr}>
                <hr/>
            </p>

        </aside>);
};

export default AuthPageSideBarLeft;