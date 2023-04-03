import React, {useState} from 'react';
import stl from './photoLoader.module.css';
import {
    getRefForPhotoFound,
    getRefForPhotoLost,
    uploadPictureFound,
    uploadPictureLost
} from "../../../../firebase/pet-services";
import {getUid} from "../../../../firebase/auth-service";


const PhotoLoader = (props) => {

    const [drag, setDrag] = useState(false)


    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)

    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)

    }

    function onDropHandler(e) {
        e.preventDefault()
        let files = [...e.dataTransfer.files]
        setDrag(false)

        const uid = getUid();
        const newref = `${uid}.${(new Date()).getTime()}`;
        if (props.type === 'lost')
            uploadPictureLost(newref, files[0])
                .then(() => getRefForPhotoLost(newref)
                    .then(url => props.changeUrl(url))
                )
                .catch(e => console.log(e));
        else
            uploadPictureFound(newref, files[0])
                .then(() => getRefForPhotoFound(newref)
                    .then(url => props.changeUrl(url))
                )
                .catch(e => console.log(e));
    }

    return (
        <div className={stl.dragAndDrop}>
            {drag
                ? <div className={stl.dropAreaWait}
                       onDragStart={e => dragStartHandler(e)}
                       onDragLeave={e => dragLeaveHandler(e)}
                       onDragOver={e => dragStartHandler(e)}
                       onDrop={e => onDropHandler(e)}
                >Release the button</div>
                : <div className={stl.dropArea}
                       onDragStart={e => dragStartHandler(e)}
                       onDragLeave={e => dragLeaveHandler(e)}
                       onDragOver={e => dragStartHandler(e)}
                >Drag and drop files here</div>}
        </div>
    );
};

export default PhotoLoader;

