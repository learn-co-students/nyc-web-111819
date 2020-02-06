import React from 'react';

function Navbar(props){
    return (
        <div id="navbar">
            <h1>Royal 👑 Flush</h1>
            <button className="auth-btn">Login / Logout</button>
            <div className="profile-btn"><span alt="profile">👤</span></div>

        </div>
    )
}

export default Navbar;