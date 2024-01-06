import React from 'react';
import '../Reminder/reminder.css';

class Reminder extends React.Component {
    render() {
        return  <div class="notification">
                    <div class="icon">
                        <span class="material-icons-sharp">
                            volume_up
                        </span> 
                    </div>
                    <div class="content">
                        <div class="info">
                            <h3>{this.props.name}</h3>
                            <small class="text_muted">
                                {this.props.time}
                            </small>
                        </div>
                        <span class="material-icons-sharp">
                            more_vert
                        </span>
                    </div>
                </div>
    }
}

export default Reminder;    