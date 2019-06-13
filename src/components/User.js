import React from 'react';
import faker from 'faker';

const User = (props) => {
    const avatar = faker.image.avatar();
    return(
        <div className="item">
            <div className="ui tiny image">
                <img alt="avatar" src={avatar}/>
            </div>
            <div className="content">
                <div className="header">Nick: {props.user.nick}</div>
                <div className="description">
                    <div className="ui raised segments">
                        <div className="ui segment">
                            <p>Email: {props.user.email}</p>
                        </div>
                        <div className="ui segment">
                            <p>IP Address: {props.user.ip}</p>
                        </div>
                        <div className="ui segment">
                            <p>Date: </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
