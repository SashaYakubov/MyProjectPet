import React, {useEffect, useState} from 'react';
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api';
import {key} from "../../../utils/constants";
import {useSelector} from "react-redux";
import lapkaImg from './../../../img/Lapka.png';


const MyMap = () => {
    //32.0534864527 34.7747602343
    const center = {lat: 32.0534, lng: 34.7747};
    const posts = useSelector(state => state.popUp.posts);
    console.log(posts);
    console.log('map-------rerender');
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: key,
        libraries: ['places'],
    });

    const [map, setMap] = useState(/** @type google.maps.Map*/null);
    return (<div>
            {(isLoaded) ?
                <div>
                    <GoogleMap center={center} zoom={12.59} mapContainerStyle={{width: '100%', height: '70vh'}}
                               options={{
                                   streetViewControl: false,
                                   fullscreenControl: false,
                                   mapTypeControl: false,
                               }}
                               onLoad={(map) => setMap(map)}
                    >
                        {posts.length ?
                            posts.map((post) => post.postData.locationCord ?
                                <Marker position={post.postData.locationCord} key={post.postId}
                                        setIcon={lapkaImg}
                                        icon={{
                                            url: lapkaImg,
                                            scaledSize: new window.google.maps.Size(100, 100),
                                            origin: new window.google.maps.Point(0, 0),
                                            anchor: new window.google.maps.Point(0, 0),
                                        }}

                                /> : null)
                            : null}
                    </GoogleMap>
                </div>
                : <p>loading...</p>}
            <button onClick={() => map.panTo(center)}>Click</button>
        </div>
    );
};

export default MyMap;