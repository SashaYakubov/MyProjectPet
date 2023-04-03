import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth, db} from "./firebase-config"
import {getAuth, updateProfile} from "firebase/auth";
import {homePage} from "../utils/constants";
import {useDispatch} from "react-redux";
import {doc, setDoc} from "firebase/firestore";


export function registration(email, password, name) {
    let res;
    createUserWithEmailAndPassword(auth, email, password)
        .then(response => {
            res = response;
            console.log(response);
        })
        .then(() => {
            const auth = getAuth();
            setDoc(doc(db, "favorites", `${auth.currentUser.uid}`), {
                postIds: ['0','1'],
            }).catch(e=>console.log(e));
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL:'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            })
                .then(res => console.log(res))
        }).catch(e => console.log(e))
    return res;
}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

export function logout() {
    signOut(auth)
        .then(response => console.log(response))
        .catch(e => console.log(e))
}

export function getUid() {
    const user = auth.currentUser;
    if (user != null) {
        return user.uid;
    }
}







