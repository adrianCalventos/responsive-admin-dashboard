import React from 'react';
import '../Reminders/reminders.css';
import reminderData from '../../../data/reminderList';
import Reminder from './Reminder/reminder';

const Reminders = () =>{
      return <div class="reminders">
                <div class="header">
                    <h2>Reminders</h2>
                    <span class="material-icons-sharp">
                        notifications_none
                    </span>
                </div>
                {reminderData.map((reminderItem) => (
                        <Reminder 
                            name={reminderItem.name}
                            time={reminderItem.time}/>                        
                      ))}
                <div class="notification add-reminder">
                    <div>
                        <span class="material-icons-sharp">
                            add
                        </span>
                        <h3>Add Reminder</h3>
                    </div>
                </div>

            </div>
}

export default Reminders;