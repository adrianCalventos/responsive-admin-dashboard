import React from 'react';
import '../RightSection/rightSection.css';
import Reminders from './Reminders/reminders';
import IconButton from '@material-ui/core/IconButton';
import ReactCountryFlag from "react-country-flag"
import {useTranslation} from "react-i18next";
import Dropdown from 'react-dropdown';

const RightSection = () => {
    const [t, i18n] = useTranslation("global");

    let handleChangeLanguage = () =>{
        const langicons = document.querySelector('.lang-icons');

        if(i18n.language ==="es"){
            i18n.changeLanguage("en");
            langicons.querySelector('span:nth-child(1)').classList.toggle('active');
        }          
        else{
            i18n.changeLanguage("es");
            langicons.querySelector('span:nth-child(1)').classList.toggle('active');

        }
    }
    let toggleDarkMode =() => {
        document.body.classList.toggle('dark-mode-variables');
        const darkMode = document.querySelector('.dark-mode');
        darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
        darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
    };


    let showMenu = () =>{ 
        const sideMenu = document.querySelector('aside');
        sideMenu.style.display = 'block';

    }

      return <div class="right-section">
                <div class="nav">
                    <button id="menu-btn" onClick={showMenu}>
                    <span class="material-icons-sharp">
                        menu
                    </span>
                    </button>
                    <div>
                        
                        <Dropdown onChange={handleChangeLanguage} placeholder="Select an option" options={i18n.languages}/>
                    </div>
                    <div class="lang-icons" onClick={()=>handleChangeLanguage()}>
                        <span class="active">
                            <ReactCountryFlag class="us-icon" countryCode="US" />
                        </span>
                        <span>
                        <   ReactCountryFlag  class="es-icon" countryCode="ES"/>
                        </span>
                    </div> 
                    <div class="dark-mode"   onClick={toggleDarkMode}>
                        <span class="material-icons-sharp active">
                            light_mode
                        </span>
                        <span class="material-icons-sharp">
                            dark_mode
                        </span>
                    </div> 
                    <div class="profile">
                        <div class="info">
                            <p>Hey, <b>Reza</b></p>
                            <small class="text-muted">Admin</small>
                        </div>
                        <div class="profile-photo">
                            <img src="images/profile-1.jpg" alt="profile-1"/>
                        </div>
                    </div>                
                </div>

                {/*End of nav*/}
                <div class="user-profile">
                    <div class="logo">
                        <img src="images/logo.png"/>
                        <h2>drianndemyx</h2>
                        <p>Fullstack developer</p>
                    </div>
                </div>
                <Reminders/>
            </div>
  }

export default RightSection;