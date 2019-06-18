import React from 'react';
import './styles/AddUserForm.css';

class AddUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.nickRef = React.createRef();
        this.mailRef = React.createRef();
        this.ipRef = React.createRef();
        this.state={
            tryRemove: false
        }
    };

    render() {
        const clear = () => { 
            setTimeout(()=>{
                this.nickRef.current.value = '';
                this.mailRef.current.value = '';
                this.ipRef.current.value = '';
            },200)
        };

        const areYouSure = (e) => {
            e.preventDefault();
            this.setState({tryRemove: true});
            
        };

        const yesOrNo = (x) => {
            if(x.target.getAttribute("data-x")==="no") {
                this.setState({tryRemove: false});
            }
            if(x.target.getAttribute("data-x")==="yes") {
                this.props.removeUsersList();
                this.setState({tryRemove: false});
            }
            // console.log(x.target.getAttribute("data-x"));
        };
        
        const pop = () => {
            if(this.state.tryRemove) {
                return(
                    <div className="pop-bg">
                        <div className="pop">
                            <p>Are you sure?</p>
                            <div className="ui buttons">
                                <button onClick={yesOrNo} data-x="yes" className="ui button">Yes</button>
                                <div className="or"></div>
                                <button onClick={yesOrNo} data-x="no" className="ui positive button">No</button>
                            </div>
                        </div>
                    </div>
                );
            };
        };

        const deleteBtn = () => {
            if(this.props.users.length!==0) {
                return(<button onClick={areYouSure} className="negative ui button">Remove List</button>);
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
                {pop()}
            </div>
        );
    };
};

export default AddUserForm;
