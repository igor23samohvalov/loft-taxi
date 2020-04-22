import React, {Component, createContext, useContext} from 'react'

export const AuthContext = createContext({});

export class AuthProvider extends Component {
    state = {
        isLoggedIn: false,
        username: null,
        password: null
    }

    login = (user, pass) => {
        this.setState({
            isLoggedIn: true,
            username: user,
            password: pass
        });
    }

    logout = () => {
        this.setState({
            isLoggedIn: false,
            username: null,
            password: null
        });
    }

    render() {
        return <AuthContext.Provider
            value={{
                isLoggedIn: this.state.isLoggedIn,
                login: this.login,
                logout: this.logout
            }}
        >
            {this.props.children}
        </AuthContext.Provider>
    }
}