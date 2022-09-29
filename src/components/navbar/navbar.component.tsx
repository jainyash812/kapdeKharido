import { Link, Outlet } from "react-router-dom";
import "./navbar.styles.scss";
const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-container">
          <div className="navbar-logo">
            <h1>Kapde Kharido</h1>
            <h4>Trust it Feel it</h4>
          </div>
        </Link>
        <div className="navbar-links-container">
          <Link className="navbar-link" to="/shop">
            Shop
          </Link>
          <Link className="navbar-link" to="/login">
            Login
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
