import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/getUser';

const Navigation = ({ isAuthenticated, logout }) => {
    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src="./img/argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {
                    isAuthenticated ? (
                        <button onClick={logout} className="main-nav-item">
                            <i className="fa fa-sign-out-alt"></i>
                            Logout
                        </button>
                    ) : (
                        <NavLink to="/Login" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink>
                    )
                }
            </div>
        </nav>
    );
};
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);