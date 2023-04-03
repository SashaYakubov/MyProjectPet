import React, {useEffect, useState} from 'react';
import { getAllLostPostsHotelServices} from "../../../../../../firebase/pet-services";
import AuthPageHomePost from "../../../../authPageHome/authPageHomePost/AuthPageHomePost";
import stl from './servicesHotelMain.module.css';

const ServicesHotelMain = () => {
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
        getAllLostPostsHotelServices().then(response=>setAllData(response));

    },[]);
    return (isLoading ? <p>loading...</p> :
            <div style={{width: '50vw'}}>
                <p className={stl.header}><b>Hotels.</b> Go to vacations - we'll take care of your pet!</p>
                {posts.map(post =><AuthPageHomePost key={post.postId} data={post}/>)}
            </div>
    );
};

export default ServicesHotelMain;