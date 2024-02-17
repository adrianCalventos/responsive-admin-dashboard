import React from 'react';
import '../Users/users.css';
import userData from '../../data/userList.js'
import User from './User/user.js';
import { useTranslation} from 'react-i18next';

const Users = () => {
  const [t, i18n] = useTranslation("global")

      return <div class="new-users">
                <h2>{t("users.title")}</h2>
                <div class="user-list">
                    {userData.map((usersItem) => (
                        <User 
                            imgUrl={usersItem.imgUrl}
                            name={usersItem.name}
                            timeAgo={usersItem.timeAgo}/>                        
                      ))}
                </div>
              </div>
//    }
  }

export default Users;