import React from 'react';
import SignedInLinks from './afterAuth';
import SignedOutLinks from './beforeAuth';
import { NavLink,Link } from 'react-router-dom'

const navbar= () => {

    const auth = { 
        firstname:"kwizera",
        lastname:"kabundege",
        email:"christophekwizera1@gmail.com"
     }

    const links = localStorage.getItem("token") ? <SignedInLinks /> :<SignedOutLinks/>

    const sideNav  = localStorage.getItem("token") ? (
        <ul id="mobile-demo" className="sidenav">
            <li>
                <div className="user-view">
                    <div className="background">
                        <i className="large material-icons">account_circle</i>
                    </div>
                    <Link to="/profile" className="btn btn-floating green darken-2">{auth.firstname.charAt(0)}{auth.lastname.charAt(0)}</Link>
                    <Link to="/profile" className="white-text name">{auth.firstname+' '+auth.lastname}</Link>
                    <Link to="/profile" className="white-text email">{auth.email}</Link>
                </div>
            </li>
            <li><NavLink to="/dash">Dashboard</NavLink></li>
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/" >Log Out</NavLink></li>
        </ul>
    ) : (
        <ul id="mobile-demo" className="sidenav">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
            <li><NavLink to="/login">Log In</NavLink></li>
        </ul>
    )
    return (
        <nav className="nav-warpper grey darken-4">
            <div className="container">
                <Link to='/' className='brand-logo'>
                    <i style={{position:"relative",top:"3px"}} className="material-icons">cloud</i>
                KFTV</Link>
                <Link to="#" data-target="mobile-demo" className="sidenav-trigger right">
                    <i className="material-icons">menu</i>
                </Link>
                {links}
            </div>
            {sideNav}
        </nav>
    )
}

export default  navbar
