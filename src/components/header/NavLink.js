import React from "react";
import { NavLink as RouterNavLink, Link } from "react-router-dom";

function NavLink({ to, children }) {
  return (
    <li>
      <RouterNavLink
        to={to}
        tag={Link}
        activeStyle={{ fontWeight: "bold" }}
        className="header-text"
      >
        {children}
      </RouterNavLink>
    </li>
  );
}

export default NavLink;
