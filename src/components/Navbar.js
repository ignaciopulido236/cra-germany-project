import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light col-lg-6 offset-lg-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Home
                </Link>
                <Link className="navbar-brand" to="/Form">
                    Form
                </Link>
                <Link className="navbar-brand" to="/new">
                    New One
                </Link>
                <Link className="navbar-brand" to="/list">
                    List
                </Link>
            </div>
        </nav>
      
    );
};

export default Navbar;