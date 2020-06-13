import React from 'react';
import { NavLink } from 'react-router-dom';

const signedIn = () => {
    const auth = { 
        firstname:"kwizera",
        lastname:"kabundege",
        email:"christophekwizera1@gmail.com"
     }
    const signOut = () => {
        localStorage.removeItem("token")
    }
    return(
        <div>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/dash">Dashboard</NavLink></li>
                <li><NavLink to="/invite">Invite</NavLink></li>
                <li><NavLink to="/" onClick={signOut}>Log Out</NavLink></li>
                <li><NavLink to="#" className="btn btn-floating green darken-2" >{auth.firstname.charAt(0)}{auth.lastname.charAt(0)}</NavLink></li>
            </ul>
        </div>
    )
}

export default signedIn
