import React from 'react';
import './sidebar.css';
import { useTranslation} from 'react-i18next';

const Sidebar = () =>{
    const [t, i18n] = useTranslation("global")

    let closeButton =()=>{
        const sideMenu = document.querySelector('aside');
        sideMenu.style.display = 'none';
    }

      return <aside>
                <div class="toggle">
                    <div class="logo">
                        <img src="../../images/logo.png" alt="logo"/>
                        <h2>Adrian Calventos Garcia <span class="danger"> drianndemyx</span></h2>
                    </div>
                    <div class="close" id="close-btn" onClick={closeButton}>
                        <span class="material-icons-sharp">
                            close
                        </span>
                    </div>
                </div>
                    <div class="sidebar">
                            <a href="#">
                                <span class="material-icons-sharp">
                                    dashboard
                                </span>  
                                <h3>{t("sideboard.dashboard")}</h3>
                            </a>
                            <a href="#">
                                <span class="material-icons-sharp">
                                    person_outline
                                </span>  
                                <h3>{t("sideboard.users")}</h3>
                            </a>
                            <a href="#">
                                <span class="material-icons-sharp">
                                    receipt_long
                                </span>  
                                <h3>{t("sideboard.history")}</h3>
                            </a>
                            <a href="#" class="active">
                                <span class="material-icons-sharp">
                                    insights
                                </span>  
                                <h3>{t("sideboard.analitycs")}</h3>
                            </a>  
                            <a href="#">
                                <span class="material-icons-sharp">
                                    mail_outline
                                </span>  
                                <h3>Tickets</h3>
                                <span class="message-count">27</span>
                            </a> 
                            <a href="#">
                                <span class="material-icons-sharp">
                                    inventory
                                </span>  
                                <h3>Sale list</h3>
                            </a> 
                            <a href="#">
                                <span class="material-icons-sharp">
                                    report_gmailerrorred
                                </span>  
                                <h3>Reports</h3>
                            </a>   
                            <a href="#">
                                <span class="material-icons-sharp">
                                    settings
                                </span>  
                                <h3>Settings</h3>
                            </a>   
                            <a href="#">
                                <span class="material-icons-sharp">
                                    add
                                </span>  
                                <h3>New Login</h3>
                            </a>  
                            <a href="#">
                                <span class="material-icons-sharp">
                                    logout
                                </span>  
                                <h3>Logout</h3>
                            </a>  
                    </div>
            </aside>
}

export default Sidebar;