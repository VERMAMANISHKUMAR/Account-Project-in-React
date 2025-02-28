import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsLayoutSidebarInset } from 'react-icons/bs';
import './NavbarStyles.css';

const Navbar = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar" style={{ width: '100%' }}>
        <button className="menu-toggle" onClick={toggleSidebar}>
          <BsLayoutSidebarInset size={24} />
        </button>

        {/* <div className="nav-menu">
          <Link to="/project" className="nav-link">
            Project
          </Link>
          <Link to="/saved" className="nav-link">
            Saved
          </Link>
          <Link to="/shared" className="nav-link">
            Shared
          </Link>
          <Link to="/achievement" className="nav-link">
            Achievement
          </Link>
        </div> */}

        <img src="https://picsum.photos/40" alt="Profile" className="profile-image" />

        <div className="mobile-icon" onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/project" className="mobile-link" onClick={toggle}>
          Project
        </Link>
        <Link to="/saved" className="mobile-link" onClick={toggle}>
          Saved
        </Link>
        <Link to="/shared" className="mobile-link" onClick={toggle}>
          Shared
        </Link>
        <Link to="/achievement" className="mobile-link" onClick={toggle}>
          Achievement
        </Link>

        <Link to="/dashboard" className="mobile-link" onClick={toggle}>
          Dashboard
        </Link>
        <Link to="/portfolio" className="mobile-link" onClick={toggle}>
          Portfolio
        </Link>
        <Link to="/inputs" className="mobile-link" onClick={toggle}>
          Create Account
        </Link>
        <Link to="/profile" className="mobile-link" onClick={toggle}>
          Profile
        </Link>
      </div>
    </>
  );
};

export default Navbar;

// ---------------------------------------
