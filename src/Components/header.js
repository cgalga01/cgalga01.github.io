import '../Styles/Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      {/* This header is displayed on every page with a nav bar */}
      <div className="nav-items">
        <Link to="/">
          Home
        </Link>
        <Link to="/">
        <div className="dropdown">
          {/* Dropdown menu item with links to fantasy football pages */}
          Fantasy
          <div className="dropdown-content">
            <Link to="/PPR_ALL">All PPR Rankings</Link>
            <Link to="/QB_Rankings">QB Rankings</Link>
            <Link to="/RB_Rankings">RB Rankings</Link>
            <Link to='/WR_Rankings'>WR Rankings</Link>
            <Link to='/TE_Rankings'>TE Rankings</Link> 
          </div>
        </div>
        </Link>


        {/* This link is for my projects */}
        <Link to='/Projects'>
          Projects
        </Link>

        <a href='https://public.tableau.com/app/profile/christopher.galgano/vizzes' target= "_blank">
          Tableau
        </a>

        {/* This link is for my about page */}
        <Link to='/About'>
          About
        </Link>
      </div>
    </header>
  );
}

export default Header;
