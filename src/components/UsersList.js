import React from 'react';
import User from './User';

class UsersList extends React.Component {
    deleteUser(index){
        this.props.deleteUser(index);
    };

    render() {
        const listOfUsers = this.props.users.map((user, index)=><User user={user} key={index} deleteUser={this.deleteUser.bind(this, user)} index={index}/>)

        return(
            <div className="ui items container">{listOfUsers}</div>
        );
    };
};

export default UsersList;
