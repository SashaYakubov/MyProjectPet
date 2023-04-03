import './App.css';
import WelcomePage from "./components/welcomePage/WelcomePage";
import AuthPageHome from "./components/authPages/authPageHome/authPageHome";
import {useEffect, useState} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {
    authCabinet,
    favoritesPage,
    foundNewPostPage,
    foundPage,
    homePage, hotelPage,
    lostPage,
    newLostYourBuddyPage,
    newPostPage, servicesFostering, servicesHotel, servicesVetHelp, servicesWalking
} from "./utils/constants";
import {auth} from "./firebase/firebase-config";
import {useDispatch, useSelector} from "react-redux";
import {changeIsLoadingAction, showPopUpAction} from "./redux/actions/popUpActions";
import AuthPageNewPost from "./components/authPages/authPageNewPost/authPageNewPost";
import AuthPageLostAndFoundYourBuddy from "./components/authPages/authPageLostAndFoundYourBuddy/AuthPageLostAndFoundYourBuddy";
import AuthPageLostAndFoundPages from "./components/authPages/authPageLostAndFoundPages/AuthPageLostAndFoundPages";
import AuthPageFavorites from "./components/authPages/authPageFavorites/AuthPageFavorites";
import AuthCabinet from "./components/authPages/authCabinet/AuthCabinet";
import ServicesHotel from "./components/authPages/authPageServices/services/servicesHotel/ServicesHotel";
import MyMap from "./components/authPages/myMap/MyMap";
import ServicesWalking from "./components/authPages/authPageServices/services/servicesWalking/ServicesWalking";
import ServicesVetHelp from "./components/authPages/authPageServices/services/servicesVetHelp/ServicesVetHelp";
import ServicesFostering from "./components/authPages/authPageServices/services/servicesFostering/ServicesFostering";

function App() {
    const [update, setUpdate] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.popUp.isLoading);
    const isShowPopUp = useSelector(state => state.popUp.isShowPopUp);
    const location = useLocation();

    useEffect(() => {
        // console.log(location.pathname)
        auth.onAuthStateChanged(() => {
            console.log('auth Changed', auth);
            if (auth)
                dispatch(changeIsLoadingAction(false));
            if (!auth.currentUser)
                navigate(`/`);
            else {
                if (location.pathname === '/' || location.pathname===''){
                        navigate(`/${homePage}`);
                }else {
                    navigate(location.pathname);
                }
            }


            // if (auth.currentUser) {
            //     navigate(`/${homePage}`);
            //     console.log(auth.currentUser);
            // } else if (!auth.currentUser){
            //
            //     navigate(`/`);
            //     console.log('currentUser - null');
            // }
        });
    }, []);

    return isLoading ? (<p>Loading...</p>) : (
        <Routes>
            <Route path={`/`} element={<WelcomePage/>}/>
            <Route path={`/${homePage}`} element={<AuthPageHome/>}/>
            <Route path={`/${newPostPage}`} element={<AuthPageNewPost/>}/>
            <Route path={`/${newLostYourBuddyPage}`} element={<AuthPageLostAndFoundYourBuddy type={'lost'}/>}/>
            <Route path={`/${foundNewPostPage}`} element={<AuthPageLostAndFoundYourBuddy type={'found'}/>}/>
            <Route path={`/${lostPage}`} element={<AuthPageLostAndFoundPages type={'lost'}/>}/>
            <Route path={`/${foundPage}`} element={<AuthPageLostAndFoundPages type={'found'}/>}/>
            <Route path={`/${favoritesPage}`} element={<AuthPageFavorites/>}/>
            <Route path={`/${authCabinet}`} element={<AuthCabinet/>}/>
            <Route path={`/${servicesHotel}`} element={<ServicesHotel/>}/>
            <Route path={`/${servicesWalking}`} element={<ServicesWalking/>}/>
            <Route path={`/${servicesVetHelp}`} element={<ServicesVetHelp/>}/>
            <Route path={`/${servicesFostering}`} element={<ServicesFostering/>}/>
            <Route path={'/map'} element={<MyMap/>}/>
        </Routes>
    );
}

export default App;
