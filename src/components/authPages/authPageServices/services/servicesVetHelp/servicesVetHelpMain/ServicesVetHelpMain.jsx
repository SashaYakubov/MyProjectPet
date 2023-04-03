import React, {useEffect, useState} from 'react';
import stl from './servicesVetHelpMain.module.css'
import {getAllLostPostsVetServices, getAllLostPostsWalkingServices} from "../../../../../../firebase/pet-services";
import AuthPageHomePost from "../../../../authPageHome/authPageHomePost/AuthPageHomePost";

const ServicesVetHelpMain = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const setAllData =  (response) => {
        response.forEach((doc) => {
            setPosts(prevState => {
                prevState.unshift({
                    postId: doc.id,
                    postData: doc.data(),
                })
                return prevState;
            });
        });
        setIsLoading(false);
    };

    useEffect(() => {
        setIsLoading(true);
        setPosts([]);
        getAllLostPostsVetServices().then(response=>setAllData(response));

    },[]);
    return (isLoading ? <p>loading...</p> :
            <div style={{width: '50vw'}}>
                <p className={stl.header}><b>VetHelp.</b> They deserve it.</p>
                {posts.map(post =><AuthPageHomePost key={post.postId} data={post}/>)}
            </div>
    );
};

export default ServicesVetHelpMain;