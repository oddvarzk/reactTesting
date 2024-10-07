import { Link } from "react-router-dom";

export function Nav(){
    return (
        <nav>
            <ul className="flex gap-5 py-5 px-5">
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