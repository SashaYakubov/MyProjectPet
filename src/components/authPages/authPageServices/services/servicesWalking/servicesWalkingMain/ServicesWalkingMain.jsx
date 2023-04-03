import React, {useEffect, useState} from 'react';
import stl from './servicesWalkingMain.module.css';
import {getAllLostPostsWalkingServices} from "../../../../../../firebase/pet-services";
import AuthPageHomePost from "../../../../authPageHome/authPageHomePost/AuthPageHomePost";

const ServicesWalkingMain = () => {
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
        getAllLostPostsWalkingServices().then(response=>setAllData(response));

    },[]);
    return (isLoading ? <p>loading...</p> :
            <div style={{width: '50vw'}}>
                <p className={stl.header}><b>Walking. </b>No time tonight? We have a solution!</p>
                {posts.map(post =><AuthPageHomePost key={post.postId} data={post}/>)}
            </div>
    );
};

export default ServicesWalkingMain;