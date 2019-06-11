import React from 'react';
import Header from './Header';
import AddUserForm from './AddUserForm';

class App extends React.Component {

    render() {
        return(
            <div className="app-container">
                <Header />
                <AddUserForm />
            </div>
        );
    };
};

export default App;
