import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="row bg-primary navbar-dark align-items-center">
            <div className="col-8">
                <NavLink to={'/'} className="navbar-brand ">Quotes Central</NavLink>
            </div>
            <div className="col-4">
                <ul className="navbar-nav d-flex flex-row gap-3 flex-nowrap">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            Quotes
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/add" className="nav-link">
                           Submit new Quotes
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;