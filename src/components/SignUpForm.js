import React, { Component } from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom';

class SignupForm extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        showSubmitError: false,
        errorMsg: '',
        redirectToLogin: false,
    };

    onChangeUsername = event => {
        this.setState({ username: event.target.value });
    };

    onChangeEmail = event => {
        this.setState({ email: event.target.value });
    };

    onChangePassword = event => {
        this.setState({ password: event.target.value });
    };

    submitForm = event => {
        event.preventDefault();
        const { username, email, password } = this.state;
        // Here, you can store the signup details in local storage
        localStorage.setItem('signupDetails', JSON.stringify({ username, email, password }));
        this.setState({ redirectToLogin: true });
    };

    renderUsernameField = () => {
        const { username } = this.state;
        return (
            <>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={this.onChangeUsername}
                    placeholder="Enter your username"
                />
            </>
        );
    };

    renderEmailField = () => {
        const { email } = this.state;
        return (
            <>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={this.onChangeEmail}
                    placeholder="Enter your email"
                />
            </>
        );
    };

    renderPasswordField = () => {
        const { password } = this.state;
        return (
            <>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={this.onChangePassword}
                    placeholder="Enter your password"
                />
            </>
        );
    };

    render() {
        const { redirectToLogin } = this.state;
        if (redirectToLogin) {
            return <Redirect to="/login" />;
        }

        return (
            <div className="signup-form-container">
                <h1>Sign Up</h1>
                <form onSubmit={this.submitForm}>
                    <div className="input-container">{this.renderUsernameField()}</div>
                    <div className="input-container">{this.renderEmailField()}</div>
                    <div className="input-container">{this.renderPasswordField()}</div>
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        );
    }
}

export default withRouter(SignupForm);
