import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
// import { connect } from 'react-redux';

const Nav = (props) => (
    <div className="nav">
        <Link to="/home">
            <h2 id="nav-title" className="nav-title">Find your favorite games!</h2>
        </Link>
        <div className="nav-right">
            <Link className="nav-link" to="/home">
                Search
            </Link>
            <Link className="nav-link" to="/checkout">
                Checkout
            </Link>
        </div>
    </div>
);

export default Nav;