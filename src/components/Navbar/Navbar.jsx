import logo from "../../images/airbnb-logo.png"
import "./Navbar.css"

export default function Navbar () {
    return (
        <nav className="navbar">
            <img src={logo} className="navbar--logo"></img>
        </nav>
    )
}