import React from 'react';

class AddUserForm extends React.Component {
    render() {
        return(
            <div className="add-user-form-container">
                <form className="add-user-form ui form">
                    <div class="field">
                        <label>Nickname</label>
                        <input type="text" name="nick" placeholder="Nickname" required />
                    </div>
                    <div class="field">
                        <label>E-mail</label>
                        <input type="email" placeholder="your@email.com" required/>
                    </div>
                    <div class="field">
                        <label>IP Address</label>
                        <input type="text" name="ip-address" placeholder="xxx.xxx.xxx.xx" pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}" required/>
                    </div>
                    <button class="positive ui button" type="submit">Add User</button>
                </form>
                <div className="delete-list-container">
                    <button class="negative ui button">Remove List</button>
                </div>
            </div>
        );
    };
};

export default AddUserForm;
