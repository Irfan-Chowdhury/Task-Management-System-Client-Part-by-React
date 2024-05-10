import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                
                {/* <!-- Sidebar - Brand --> */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" /> 

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item active">
                    <Link to='/dashboard' className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider"/>

                <li className="nav-item">
                    <Link to="/team-members" className="nav-link">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Team Members</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Projects</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Tasks</span>
                    </a>
                </li>
                <hr className="sidebar-divider" />


            </ul>
        </div>
    );
};

export default Sidebar;