import React from 'react';

const UsersCounter = (props) => {
    let howManyUsers = props.users.length;
    const oneOrMany = () => {
        return (howManyUsers === 1) ? 'user' : 'users';
    };
    return(
        <div className="counter-container">
            <div className="counter">
                {howManyUsers}
            </div>
            <div className="counter-txt">
                <p>{oneOrMany()}</p>
            </div>
        </div>
    );
};

export default UsersCounter;
