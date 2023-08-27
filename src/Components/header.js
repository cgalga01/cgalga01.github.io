// Code for top menu bar
import '../Styles/Header.css';
import {Link} from "react-router-dom"
 

function Header() {
    return(
        <header class="header">
          {/* This header is displayed on every page with a nav bar */}
          <nav class="nav-items">
            <Link to="/">
              <button>Home</button>
            </Link>

          <div class ="dropdown"> {/* Dropdown menu item with links to fantasy football pages */}
            <button class = "dropdown">Fantasy</button>
            <div class="dropdown-content">
              <Link to="/PPR_ALL">All PPR Rankings</Link>
              <a href="/QB_Rankings">QB Rankings</a>
              <a href="/RB_Rankings">RB Ranking</a>
              <a href='/WR_Rankings'>WR Rankings</a>
              <a href='/TE_Rankings'>TE Rankings</a>
            </div>
          </div>
          
          {/* This button is for my projects */}
          <a href='/Projects'> 
          <button>Projects</button>
          </a>
          {/* This button to my about page */}
          <Link to='/About'>
            <button>About</button>
            </Link>
          </nav>




        </header>
    )
}


export default Header;
