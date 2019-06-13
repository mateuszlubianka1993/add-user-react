import React from 'react';

class AddUserForm extends React.Component {
    render() {
        return(
            <div className="add-user-form-container">
                <form className="add-user-form ui form">
                    <div className="field">
                        <label>Nickname</label>
                        <input onChange={this.props.onInputNickChange} type="text" name="nick" placeholder="Nickname" required />
                    </div>
                    <div className="field">
                        <label>E-mail</label>
                        <input onChange={this.props.onInputEmailChange} type="email" placeholder="your@email.com" required/>
                    </div>
                    <div className="field">
                        <label>IP Address</label>
                        <input onChange={this.props.onInputIpChange} type="text" name="ip-address" placeholder="xxx.xxx.xxx.xx" pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}" required/>
                    </div>
                    <button className="positive ui button" type="submit">Add User</button>
                </form>
                <div className="delete-list-container">
                    <button className="negative ui button">Remove List</button>
                </div>
            </div>
        );
    };
};

export default AddUserForm;
