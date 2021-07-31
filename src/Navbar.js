import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <h1>My Blog</h1>
            </Link>
            <div className="links">
                <Link to="/" className="home-button">
                    Home
                </Link>
                <Link to="/create" className="new-blog">
                    New Blog
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
