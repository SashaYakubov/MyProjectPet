import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../../../../firebase/pet-services";
import AuthPageNewPost from "../../authPageNewPost/authPageNewPost";
import AuthPageHomePost from "../authPageHomePost/AuthPageHomePost";
import {bubbleSortPosts} from "../../../../utils/functions/functions";

const AuthPageHomeMain = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        console.log(isLoading);
        getAllPosts().then(response => {
            response.forEach((doc) => {
                    setPosts(prevState => {
                        prevState.unshift({
                            postId: doc.id,
                            postData: doc.data(),
                        })
                        return prevState;
                    });
                    console.log(doc.id, " => ", doc.data());
                });

            setIsLoading(prevState => !prevState);
            console.log(posts, isLoading);
        })

    }, []);

    return (
        <div style={{width:'50vw'}}>
            {isLoading ? <p>Loading</p> : bubbleSortPosts(posts).map(post=>{
                console.log(props.ids);
                if(props.ids)
                    return props.ids.includes(post.postId) ? <AuthPageHomePost data={post} key={post.postId}/> : null;
                return <AuthPageHomePost data={post} key={post.postId}/>
            })}
        </div>
    );
};

export default AuthPageHomeMain;