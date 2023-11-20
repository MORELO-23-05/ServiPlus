import React from "react";
import { Link } from "react-router-dom";

const NavbarUser = () =>  {
    return(
<nav className="main-header navbar navbar-expand navbar-white navbar-light">

    <ul className="navbar-nav">
    <li className="nav-item">
        <Link to={"#"} className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars" /></Link>
        
    </li>
    <li className="nav-item">
        <Link to={"#"} className="nav-link" data-widget="fullscreen"  role="button">
        <i className="fas fa-expand-arrows-alt" />
        </Link>
    </li>
    </ul>
    <ul className="navbar-nav ml-auto">
    <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search " />
                            </button>
                        </div>
                    </div>
                </div>
    </ul>
</nav>
    );
}

export default NavbarUser;