import { NavLink, Outlet } from "react-router-dom";
import GoHome from "./GoHome";
import styles from './navbar.css'

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className="links">
        <ul>
          <li><NavLink to="/" activeClassName="active">LandingPage</NavLink></li>
          <li><NavLink to="user/:username" activeClassName="active">User</NavLink></li>
          <li><NavLink to="about" activeClassName="active">About</NavLink></li>
        </ul>
      <GoHome></GoHome> 
      </div>
       
    <section>
      <Outlet />
    </section>
    </div>
  )
}