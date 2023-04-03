import React, {useEffect, useState} from 'react';
import AuthPageSideBarRight from "../authPageSideBarRight/AuthPageSideBarRight";
import AuthPageHomeMain from "../authPageHome/authPageHomeMain/AuthPageHomeMain";
import AuthPageSideBarLeft from "../authPageSideBarLeft/AuthPageSideBarLeft";
import {getFavoriteIdPosts} from "../../../firebase/pet-services";
import {getUid} from "../../../firebase/auth-service";
import stl from './authPageFavorites.module.css';
import AuthPageLostAndFoundYourBuddyHeader
    from "../authPageLostAndFoundYourBuddy/authPageLostAndFoundYourBuddyHeader/AuthPageLostAndFoundYourBuddyHeader";

const AuthPageFavorites = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [ids, setIds] = useState(null);
    const uid = getUid();
    useEffect(() => {
        getFavoriteIdPosts(uid).then(res => {
            console.log('favorites--------->', res.data());
            setIds(res.data());
            setIsLoading(false);
        })
    }, []);
    return (
        <div>
            <AuthPageLostAndFoundYourBuddyHeader/>
            <div className={stl.containerMain}>
                <AuthPageSideBarLeft/>
                <div className={stl.container}>
                    <div className={stl.header}>
                        <p><b>Your favorites.</b>Find them here anytime.</p>
                    </div>
                    {isLoading ? <p>Loading...</p> : <AuthPageHomeMain
                        ids={ids.postIds}
                    />}
                </div>
                <AuthPageSideBarRight/>
            </div>
        </div>
    );
};

export default AuthPageFavorites;