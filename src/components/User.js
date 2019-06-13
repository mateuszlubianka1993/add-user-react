import React from 'react';

const User = (props) => {
    
    return(
        <div className="item">
            <div className="ui tiny image">
                <img alt="avatar" src={props.user.avatar}/>
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
                            <p>Date: {props.user.createtime}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
