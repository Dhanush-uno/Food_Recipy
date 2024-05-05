import React, { Component } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';

class LoginForm extends Component {
    state = {
        username: '',
        password: '',
        showSubmitError: false,
        errorMsg: '',
    };

    onChangeUsername = event => {
        this.setState({ username: event.target.value });
    };

    onChangePassword = event => {
        this.setState({ password: event.target.value });
    };

    onSubmitSuccess = jwtToken => {
        const { history, location } = this.props;

        Cookies.set('jwt_token', jwtToken, {
            expires: 30,
        });

        // If there's a 'from' pathname in the location state, redirect to it,
        // otherwise, redirect to the homepage
        const { from } = location.state || { from: { pathname: '/' } };
        history.replace(from);
    };

    onSubmitFailure = errorMsg => {
        this.setState({ showSubmitError: true, errorMsg });
    };

    submitForm = async event => {
        event.preventDefault();
        const { username, password } = this.state;
        const userDetails = { username, password };
        const url = 'https://apis.ccbp.in/login';
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
        };
        const response = await fetch(url, options);
        const data = await response.json();
        if (response.ok === true) {
            this.onSubmitSuccess(data.jwt_token);
        } else {
            this.onSubmitFailure(data.error_msg);
        }
    };

    renderPasswordField = () => {
        const { password } = this.state;

        return (
            <>
                <label className="input-label" htmlFor="password">
                    PASSWORD
                </label>
                <input
                    type="password"
                    id="password"
                    className="password-input-field"
                    value={password}
                    onChange={this.onChangePassword}
                    placeholder="Password"
                />
            </>
        );
    };

    renderUsernameField = () => {
        const { username } = this.state;

        return (
            <>
                <label className="input-label" htmlFor="username">
                    USERNAME
                </label>
                <input
                    type="text"
                    id="username"
                    className="username-input-field"
                    value={username}
                    onChange={this.onChangeUsername}
                    placeholder="Username"
                />
            </>
        );
    };

    render() {
        const { showSubmitError, errorMsg } = this.state;
        const jwtToken = Cookies.get('jwt_token');

        // Redirect to homepage if user is already logged in
        if (jwtToken !== undefined) {
            return <Redirect to="/" />;
        }

        return (
            <div className="login-form-container">
                <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                    className="login-website-logo-mobile-img"
                    alt="website logo"
                />
                <img
                    src="https://assets.website-files.com/63d259e16c0b78fc948717a8/63fa39918bb3697045065d0e_Main%20Chopping%20Board%20Green%20Drop.webp"
                    className="login-img"
                    alt="website login"
                />
                <form className="form-container" onSubmit={this.submitForm}>
                    <h1 className="logo">F<span>oo</span>diesHub</h1>
                    <div className="input-container">{this.renderUsernameField()}</div>
                    <div className="input-container">{this.renderPasswordField()}</div>
                    <button type="submit" className="login-button btn">
                        Login
                    </button>
                    {showSubmitError && <p className="error-message">*{errorMsg}</p>}
                </form>
                <p>Don't have an account? <Link to="/signup">Register now</Link></p>
            </div>
        );
    }
}

export default withRouter(LoginForm);
