const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
                <a href="/" className="home-button">Home</a>
                <a
                    href="/create" className="new-blog"
                >
                    New Blog
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
