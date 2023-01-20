import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-light col-lg-12 position-fixed"
      style={{height:"10px"}}   
    >
      <div className="container-fluid justify-content-center" >
        <Link className="navbar-brand" to="/" >
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
