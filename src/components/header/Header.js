import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import NavLinkComponent from "./NavLink";
import routes from "../../shared/routes";

class Header extends Component {
  render() {
    const link = settings.isSplash ? "/splash" : "home";
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <span className="header-text"> &lt;</span>
              <span className="logo-name header-text">
                {greeting.logo_name}
              </span>
              <span className="header-text">/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <button className="navicon"></button>
            </label>
            <ul className="menu header-menu">
              {routes.map((route) => (
                <NavLinkComponent key={route.path} to={route.path}>
                  {route.name}
                </NavLinkComponent>
              ))}
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
