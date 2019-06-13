import React from 'react';
import User from './User';

class UsersList extends React.Component {

    render() {
        const listOfUsers = this.props.users.map((user, index)=><User user={user} key={index}/>)

        return(
            <div className="ui items">{listOfUsers}</div>
        );
    };
};

export default UsersList;
