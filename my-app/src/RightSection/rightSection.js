import React from 'react';
import '../RightSection/rightSection.css';

class RightSection extends React.Component {
    render() {
      return <div class="right-section">
                <div class="nav">
                    <button id="menu-btn">
                    <span class="material-icons-sharp">
                        menu
                    </span>
                    </button>
                    <div class="dark-mode">
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
                            <img src="images/profile-1.jpg"/>
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
                <div class="reminders">

                </div>
            </div>
    }
  }

export default RightSection;