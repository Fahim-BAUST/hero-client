import React from 'react';
import { NavLink } from 'react-router-dom';
import Font from 'react-font';
import useAuth from '../../Hooks/useAuth';

const Header = () => {

    const { user, logout } = useAuth();
    return (
        <div>
            <div className="sticky-top shadow ">
                <Font family="Zen Antique">

                    <nav style={{ backgroundColor: "#E0FFFF" }} className="navbar bg-opacity-10 navbar-expand-lg navbar-light animate_animated animate__fadeInDown ">
                        <div className="container-fluid">
                            <NavLink
                                className="navbar-brand fw-bold"
                                to="/home"
                                style={{ color: "tomato" }}
                            >
                                HERO RIDER
                            </NavLink>
                            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink
                                            className="nav-link "

                                            to="/home"
                                            activeStyle={{
                                                fontWeight: "bolder"
                                            }}
                                        >
                                            <i className="fas fa-home"></i>   Home
                                        </NavLink>

                                    </li>

                                    {user.email && <li className="nav-item">

                                        <NavLink
                                            className="nav-link "
                                            to="/profile"

                                            activeStyle={{
                                                fontWeight: "bolder"

                                            }}
                                        >
                                            <i className="fas fa-camera"></i> Profile
                                        </NavLink>
                                    </li>}
                                    {user.email === "admin@admin.com" && <li className="nav-item">

                                        <NavLink
                                            className="nav-link "
                                            to="/manageUser"

                                            activeStyle={{
                                                fontWeight: "bolder"

                                            }}
                                        >
                                            <i className="fas fa-camera"></i> Manage User
                                        </NavLink>
                                    </li>}


                                </ul>
                                <form className="d-flex align-items-center">

                                    {user?.email && <span className="ms-2 me-2">{user?.displayName}</span>}

                                    {user?.email &&
                                        <button onClick={logout} className="btn btn-outline-danger ms-2" type="submit"><i className="fas fa-sign-in-alt"></i> Logout</button>}
                                </form>
                            </div>
                        </div>
                    </nav>
                </Font>
            </div>

        </div>
    );
};

export default Header;