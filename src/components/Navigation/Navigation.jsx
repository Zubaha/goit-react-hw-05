import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
