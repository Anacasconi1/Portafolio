import { Link } from "react-router-dom";
import '../styles/navbar.css'

export const NavBar = () => {
    return (
        <nav className="navbar-general-container">
            <ul className="navbar-container">
                <li>
                    <Link className="navbar-btns" to={"/"}>
                        SOBRE MI
                    </Link>
                </li>
                <li>
                    <Link className="navbar-btns" to={"/resume"}>
                        RESUMEN/CV
                    </Link>
                </li>
                <li>
                    <Link className="navbar-btns" to={"/proyects"}>
                        PROYECTOS
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
