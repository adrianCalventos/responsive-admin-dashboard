import React from 'react';
import '../User/user.css';

class User extends React.Component {
    render() {
      return  <div class="user">
                <img src={this.props.imgUrl}/>
                <h2>{this.props.name}</h2>
                <p>{this.props.timeAgo}</p>
            </div>
    }
  }

export default User;