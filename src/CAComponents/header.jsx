import Nav from "./nav.jsx";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


export function Header(){
    return (
        <header>
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo of website"/>
                </Link>
            </div>
            <Nav/>
        </header>
    );
}

export default Header;

