import React, {useEffect, useState} from 'react';
import stl from './servicesFosteringMain.module.css';
import {
    getAllLostPostsFosteringServices,
} from "../../../../../../firebase/pet-services";
import AuthPageHomePost from "../../../../authPageHome/authPageHomePost/AuthPageHomePost";

const ServicesFosteringMain = () => {
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
        getAllLostPostsFosteringServices().then(response=>setAllData(response));

    },[]);
    return (isLoading ? <p>loading...</p> :
            <div style={{width: '50vw'}}>
                <p className={stl.header}><b>Fostering.</b> In adoption we trust.</p>
                {posts.map(post =><AuthPageHomePost key={post.postId} data={post}/>)}
            </div>
    );
};

export default ServicesFosteringMain;