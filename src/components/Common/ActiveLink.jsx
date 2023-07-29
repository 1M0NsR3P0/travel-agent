import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Home/home.css'

const ActiveLink = ({children,to}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "btn-primaryy" : "btn-nav-link"
            }>
            {children}
        </NavLink>
    );
};

export default ActiveLink;