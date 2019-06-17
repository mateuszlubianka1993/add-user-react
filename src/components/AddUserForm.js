import React from 'react';
import './styles/AddUserForm.css';

class AddUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.nickRef = React.createRef();
        this.mailRef = React.createRef();
        this.ipRef = React.createRef();
    };

    render() {
        const clear = () => { 
            setTimeout(()=>{
                this.nickRef.current.value = '';
                this.mailRef.current.value = '';
                this.ipRef.current.value = '';
            },200)
        };

        const deleteBtn = () => {
            if(this.props.users.length!==0) {
                return(<button onClick={this.props.removeUsersList} className="negative ui button">Remove List</button>);
            };
        };

        return(
            <div className="add-user-form-container">
                <form onSubmit={this.props.addNewUser} className="add-user-form ui form">
                    <div className="field">
                        <label>Nickname</label>
                        <input onChange={this.props.onInputNickChange} ref={this.nickRef} type="text" name="nick" placeholder="Nickname" required />
                    </div>
                    <div className="field">
                        <label>E-mail</label>
                        <input onChange={this.props.onInputEmailChange} ref={this.mailRef} type="email" placeholder="your@email.com" required/>
                    </div>
                    <div className="field">
                        <label>IP Address</label>
                        <input onChange={this.props.onInputIpChange} ref={this.ipRef} type="text" name="ip-address" placeholder="xxx.xxx.xxx.xx" pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}" required/>
                    </div>
                    <div className="btn-container">
                        <button onClick={clear} className="positive ui button" type="submit">Add User</button>
                        {deleteBtn()}
                    </div>
                </form>
                
            </div>
        );
    };
};

export default AddUserForm;
