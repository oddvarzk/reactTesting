import { Link } from "react-router-dom";

export function Nav(){
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Page</Link>
                </li>
                <li>
                    <Link to="/cart">Shopping Cart</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;