import React from 'react';
import faker from 'faker';
import Header from './Header';
import AddUserForm from './AddUserForm';
import UsersList from './UsersList';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            thatNick: '',
            thatEmail: '',
            thatIp: ''
          };
      };

    onInputNickChange = (e) => {
        this.setState({thatNick: e.target.value});
        // console.log(this.state.thatNick);
    };
    onInputEmailChange = (e) => {
        this.setState({thatEmail: e.target.value});
        // console.log(this.state.thatEmail);
    };
    onInputIpChange = (e) => {
        this.setState({thatIp: e.target.value});
        // console.log(this.state.thatIp);
    };

    addNewUser = (e) => {
        e.preventDefault();
        // console.log('it works!');
        const avatar = faker.image.avatar();
        const today = new Date().toLocaleString();
        let user = {
            nick: this.state.thatNick,
            email: this.state.thatEmail,
            ip: this.state.thatIp,
            createtime: today,
            avatar: avatar
        };
        
        this.setState({
            users: [...this.state.users, user],
            thatNick: '',
            thatEmail: '',
            thatIp: '',
          });
        // console.log(this.state.users);
    };

    removeUsersList = () => {
        this.setState({users: []})
    };

    deleteUser = (index) => {
        this.setState(updatedUsers => ({
          users: updatedUsers.users.filter(user => user !== index )
        }));
      };

    render() {
        return(
            <div className="app-container">
                <Header />
                <AddUserForm 
                    onInputNickChange={this.onInputNickChange}
                    onInputEmailChange={this.onInputEmailChange}
                    onInputIpChange={this.onInputIpChange}
                    addNewUser={this.addNewUser}
                    removeUsersList={this.removeUsersList}/>
                <UsersList 
                    users={this.state.users}
                    deleteUser={this.deleteUser}/>
            </div>
        );
    };
};

export default App;
