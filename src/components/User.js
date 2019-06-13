import React from 'react';

const User = (props) => {
    return(
        <div class="item">
            <div class="ui tiny image">
                {/* <img src="/images/avatar/large/stevie.jpg"> */}
            </div>
            <div class="content">
                <div class="header">Nick: {props.user.nick}</div>
                <div class="description">
                    <div class="ui raised segments">
                        <div class="ui segment">
                            <p>Email: {props.user.email}</p>
                        </div>
                        <div class="ui segment">
                            <p>IP Address: {props.user.ip}</p>
                        </div>
                        <div class="ui segment">
                            <p>Date: </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
