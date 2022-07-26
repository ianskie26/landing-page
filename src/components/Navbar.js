import React from "react"

export default function Navbar() {
    return (
        <nav className="navbar--wrapper">
            <div className="left-navbar">
                <h1 className="logo">LOGO</h1>
            </div>
            <div className="links">
            <a href="/">Home</a>
            <a href="/">Articles</a>
            <a href="/">Pricing</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            </div>
            <div className="right-navbar">
                <button className="login">Log In</button>
                <button className="trial">Start Free Trial</button>
            </div>
        </nav>
    )
}