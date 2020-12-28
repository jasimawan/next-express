import React from 'react';
import { UserProvider as UserProvider } from '../contexts/UserContext';

class _UserProvider extends React.Component {
    state = {
        user: null
    };
    logOut = () => {
        localStorage.removeItem('user');
        this.setState({ ...this.state, user: null });
    };
    logIn = (user) => {
        this.setState({ ...this.state, user });
    };
    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.setState({ ...this.state, user });
            console.log(user);
        }
    }
    render() {
        return (
            <UserProvider
                value={{
                    ...this.state,
                    logOut: this.logOut,
                    logIn: this.logIn
                }}
            >
                {this.props.children}
            </UserProvider>
        );
    }
}
export default _UserProvider;
