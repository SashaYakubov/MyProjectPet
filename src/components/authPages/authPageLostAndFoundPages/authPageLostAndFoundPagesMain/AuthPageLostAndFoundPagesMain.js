import React, {useEffect, useState} from 'react';
import {getAllFoundPosts, getAllLostPosts} from "../../../../firebase/pet-services";
import AuthPageLostAndFoundPagesPost from "../authPageLostAndFoundPagesPost/AuthPageLostAndFoundPagesPost";
import {useDispatch} from "react-redux";
import {setPostsAction} from "../../../../redux/actions/popUpActions";
import stl from './authPageLostAndFoundPagesMain.module.css';
import {bubbleSortPosts} from "../../../../utils/functions/functions";

const AuthPageLostAndFoundPagesMain = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [color, setColor] = useState('');
    const [distinctive, setDistinctive] = useState('');
    const [type, setType] = useState('');
    const dispatch = useDispatch();
    dispatch(setPostsAction(posts));
    const setAllData = (response) => {
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

    function searchPosts() {
        const results = [];
        for (const item of posts) {
            if (type.trim() !== '' && item.postData.animal.toLowerCase().includes(type.trim()))
                results.push(item);
            if (color.trim() !== '' && item.postData.color.toLowerCase().includes(color.trim()))
                results.push(item);
            if (distinctive.trim() !== '' && item.postData.distinctive.toLowerCase().includes(distinctive.trim())) {
                results.push(item);
            }
            if (color.trim() === '' && type.trim() === '' && distinctive.trim() === '')
                return posts;
        }

        return results;
    }

    useEffect(() => {
        setIsLoading(true);
        setPosts([]);
        if (props.type === 'lost')
            getAllLostPosts().then(response => setAllData(response));
        else
            getAllFoundPosts().then(response => setAllData(response));

    }, [props.type]);
    return (isLoading ? <p>loading...</p> :
            <div className={stl.container}>
                <div className={stl.searchForm}>
                    <input type="text" id={'animal'} placeholder={'Type'} onChange={(e) => {
                        setType(e.currentTarget.value);
                    }}/>
                    <input type="text" id={'color'} placeholder={'Color'} onChange={(e) => {
                        setColor(e.currentTarget.value);
                    }}/>
                    <input type="text" id={'distinctive'} placeholder={'Additional features'} onChange={(e) => {
                        setDistinctive(e.currentTarget.value);
                    }}/>
                </div>
                {/*<p>{props.type === 'lost' ? 'Lost pets:' : 'Found pets:'}</p>*/}
                {bubbleSortPosts(searchPosts()).map(post => <AuthPageLostAndFoundPagesPost key={post.postId} type={props.type}
                                                                          data={post}/>)}

            </div>
    );
};

export default AuthPageLostAndFoundPagesMain;