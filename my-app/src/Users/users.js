import React from 'react';
import '../Users/users.css';
import userData from '../data/userList.js'
import User from './User/user.js';
 
class Users extends React.Component {
    render() {
      return <div class="new-users">
                <h2>New Users</h2>
                <div class="user-list">
                    {userData.map((usersItem) => (
                        <User 
                            imgUrl={usersItem.imgUrl}
                            name={usersItem.name}
                            timeAgo={usersItem.timeAgo}/>
                        ))}
                </div>
              </div>
    }
  }

export default Users;