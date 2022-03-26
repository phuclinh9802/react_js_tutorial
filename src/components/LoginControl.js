import React, { Component } from 'react';

import { Icon } from '@mui/material';

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Welcome from './Welcome';
import Blog from './Blog';

class LoginControl extends React.Component {
    // constructor
    constructor(props) {
        super(props);
        // bind the functions
        // NOTE: always assign the function to bind, not only call bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)

        // set default statew for LoginControl
        this.state = {
            isLoggedIn: false,
            accountState: 'not',
            posts: [
                {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
                {id: 2, title: 'Installation', content: 'You can install React from npm.'}
            ]
        }
    }

    handleLogin() {
        this.setState({
            isLoggedIn: true,
            accountState: 'currently'
        })
    }

    handleLogout() {
        this.setState({
            isLoggedIn: false,
            accountState: 'not'
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const accountState = this.state.accountState;
        const posts = this.state.posts;
        // initialize button variable
        let button;

        // initialize 

        // check if isLoggedIn is true or false, then show the components accordingly
        if (isLoggedIn) {
            // button shows logout button when already signed in
            // pass the onClick prop to the child
            button = <LogoutButton click={this.handleLogout} />
        }

        else {
            button = <LoginButton click={this.handleLogin} />
        }

        return (
            <div className='login-control'>
                <Greeting isLoggedIn={isLoggedIn} />
                <AccountNotification accountState={accountState} />
                <Blog posts={posts} isLoggedIn={isLoggedIn} />
                {/* {button} */}
                {isLoggedIn ? 
                    <LogoutButton click={this.handleLogout} /> :
                    <LoginButton click={this.handleLogin} />
            }
            </div>
        )
    }

}


function AccountNotification(props) {
    return <h1>The user is {props.accountState} logged in</h1>
}

function Greeting(props) {
    if (props.isLoggedIn) {
        return <User />    
    }
    else {
        return <Guest />
    }
}

function User(props) {
    return <Welcome name="Phillip" />
}

function Guest(props) {
    return <h1>Please sign in</h1>
}

function LoginButton(props) {
    // use Icon component in MUI with component as the name of the MUI icon
    return <button onClick={props.click}>
                <Icon component={LogoutIcon} />
            </button>
}

function LogoutButton(props) {
    return <button onClick={props.click}>         
                <Icon component={LoginIcon} />
            </button>
}

export default LoginControl;