import {db} from "./firebase-config";
import {doc, getDocs, setDoc, collection, getDoc} from "firebase/firestore";
// import {getDatabase, set, ref, get, child} from "firebase/database";
import {getStorage, ref, uploadBytes, getDownloadURL, deleteObject} from "firebase/storage";
import {getAuth, updateProfile} from "firebase/auth";


// export async function addTodo(title, uid){
//     const ref = doc(db, 'petsAccounts', uid);
//     const temp = await getDoc(ref);
//     if(temp.exists()){
//         await updateDoc(ref, {todo:arrayUnion(title)})
//     } else {
//         await setDoc(ref, {todo:[title]})
//     }
// }
//
// export async function getAllTasks(uid){
//     const ref = doc(db, 'todos', uid)
//     const temp = await getDoc(ref);
//     return temp.exists()?temp.data():{todo:[]};
// }
//
// export async function updateTask(uid, tasks){
//     const ref = doc(db, 'todos', uid);
//     await updateDoc(ref, {todo:tasks});
//
// }

export async function writeNewPostData(uid, data) {
    //const db = getDatabase();
    await setDoc(doc(db, "posts", `${uid}.${data.date}`), {
        userIcon: data.userIcon,
        date: data.date,
        userName: data.userName,
        text: data.text,
        photo1: data.photo1,
        photo2: data.photo2,
        photo3: data.photo3,
        photo4: data.photo4,
    });
}

export async function getAllPosts() {
    const docRef = collection(db, "posts");
    return await getDocs(collection(db, 'posts'));
}


// export async function getPosts(uid) {
//     const docRef = doc(db, "posts", uid);
//     const docSnap = await getDoc(docRef);
//
//     if (docSnap.exists()) {
//         console.log("Document data:", docSnap.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
//     return docSnap.data();
// }


export async function uploadPicture(newref, file) {
    const storageLocal = getStorage();
    const storageRef = ref(storageLocal, `images/${newref}`);
    return await uploadBytes(storageRef, file);
}

export async function getRefForPhoto(name) {
    const storageLocal = getStorage();
    const pathReference = ref(storageLocal, `images/${name}`);
    return getDownloadURL(pathReference)
}

export async function deletePhotoFromStorage(name) {
    const storageLocal = getStorage();
    const pathReference = ref(storageLocal, `images/${name}`);
    return deleteObject(pathReference);
}


export async function isPostFavorite(uid, id) {
    let i = null;
    await getFavoriteIdPosts(uid).then(res => {
        // setFavorites(res.data().postIds);
        i = !!res.data().postIds.includes(id);
    }).catch(e => console.log(e));
    return i;
}


export async function updateProfileAddFavoriteIdPost(uid, id) {
    await getFavoriteIdPosts(uid).then(async res => {
        let newAr = [...res.data().postIds];
        newAr.unshift(id);
        await setDoc(doc(db, "favorites", `${uid}`), {
            postIds: newAr,
        });
    });
    return await isPostFavorite(uid, id);
}

export async function updateProfileDeleteFavoriteIdPost(uid, id) {
    await getFavoriteIdPosts(uid).then(async res => {
        let newAr = [...res.data().postIds];
        await setDoc(doc(db, "favorites", `${uid}`), {
            postIds: newAr.filter((element) => element !== id)
        });
    });
    return await isPostFavorite(uid, id);
}

export async function getFavoriteIdPosts(uid) {
    const docRef = doc(db, "favorites", `${uid}`);
    return await getDoc(docRef);
}


export async function uploadPictureLost(newref, file) {
    const storageLocal = getStorage();
    const storageRef = ref(storageLocal, `imagesLost/${newref}`);
    return await uploadBytes(storageRef, file);
}

export async function getRefForPhotoLost(name) {
    const storageLocal = getStorage();
    const pathReference = ref(storageLocal, `imagesLost/${name}`);
    return getDownloadURL(pathReference)

}

export async function writeNewLostPostData(uid, data) {
    //const db = getDatabase();
    await setDoc(doc(db, "postsLost", `${uid}.${data.date}`), {...data});
}

export async function getAllLostPosts() {
    const docRef = collection(db, "postsLost");
    return await getDocs(collection(db, 'postsLost'));
}


export async function uploadPictureFound(newref, file) {
    const storageLocal = getStorage();
    const storageRef = ref(storageLocal, `imagesFound/${newref}`);
    return await uploadBytes(storageRef, file);
}

export async function getRefForPhotoFound(name) {
    const storageLocal = getStorage();
    const pathReference = ref(storageLocal, `imagesFound/${name}`);
    return getDownloadURL(pathReference)

}

export async function writeNewFoundPostData(uid, data) {
    //const db = getDatabase();
    await setDoc(doc(db, "postsFound", `${uid}.${data.date}`), {...data});
}

export async function getAllFoundPosts() {
    const docRef = collection(db, "postsFound");
    return await getDocs(collection(db, 'postsFound'));
}


export async function uploadPictureCabinet(newref, file) {
    const storageLocal = getStorage();
    const storageRef = ref(storageLocal, `imagesIcon/${newref}`);
    return await uploadBytes(storageRef, file);
}

export async function getRefForPhotoCabinet(name) {
    const storageLocal = getStorage();
    const pathReference = ref(storageLocal, `imagesIcon/${name}`);
    return getDownloadURL(pathReference)
}


export async function changeIconOnPosts(uid, ref) {
    getAllFoundPosts().then(response => {
        response.forEach((doc) => {
            let postUid = doc.id.split('.')[0];
            if (postUid === uid) {
                let newData = {...doc.data(), userIcon: ref};
                writeNewFoundPostData(uid, newData);
            }
        });
    });
    getAllPosts().then(response => {
        response.forEach((doc) => {
            let postUid = doc.id.split('.')[0];
            if (postUid === uid) {
                let newData = {...doc.data(), userIcon: ref};
                writeNewPostData(uid, newData);
            }
        });
    });
    getAllLostPosts().then(response => {
        response.forEach((doc) => {
            let postUid = doc.id.split('.')[0];
            if (postUid === uid) {
                let newData = {...doc.data(), userIcon: ref};
                writeNewLostPostData(uid, newData);
            }
        });
    });
}

export async function deletePhotoCabinetFromStorage(name) {
    const storageLocal = getStorage();
    const pathReference = ref(storageLocal, `imagesIcon/${name}`);
    return deleteObject(pathReference);
}


//services

export async function getAllLostPostsHotelServices() {
    return await getDocs(collection(db, 'hotelServices'));
}

export async function getAllLostPostsWalkingServices() {
    return await getDocs(collection(db, 'walkingServices'));
}

export async function getAllLostPostsVetServices() {
    return await getDocs(collection(db, 'vetServices'));
}

export async function getAllLostPostsFosteringServices() {
    return await getDocs(collection(db, 'fosteringServices'));
}