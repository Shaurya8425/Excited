import React from "react"

function Header(){
    return(
        <div>
            <nav className="nav">
            <div className="logo-title">
            <img className="img" src="logo192.png" alt="" />
            <h2>ReactFacts</h2>
            </div>
            <h3>React Course - Project 1</h3>
            {/* <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul> */}
            </nav>
        </div>
    )
}
export default Header