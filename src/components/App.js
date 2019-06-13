import React from 'react';
import Header from './Header';
import AddUserForm from './AddUserForm';

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

    render() {
        return(
            <div className="app-container">
                <Header />
                <AddUserForm 
                    onInputNickChange={this.onInputNickChange}
                    onInputEmailChange={this.onInputEmailChange}
                    onInputIpChange={this.onInputIpChange}/>
            </div>
        );
    };
};

export default App;
