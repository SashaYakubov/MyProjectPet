import React from 'react';
import WelcomePageDoggy from "./welcomePageDoggy/WelcomePageDoggy";
import WelcomePageFluffy from "./welcomePageFluffy/WelcomePageFluffy";
import WelcomePageInfo from "./welcomePageInfo/WelcomePageInfo";
import WelcomePageComingSoon from "./welcomePageComingSoon/WelcomePageComingSoon";

const WelcomePageMain = (props) => {
    return (
        <div>
            <WelcomePageDoggy openPopUp={props.openPopUp}/>
            <WelcomePageFluffy/>
            <WelcomePageInfo/>
            <WelcomePageComingSoon/>
        </div>
    );
};

export default WelcomePageMain;