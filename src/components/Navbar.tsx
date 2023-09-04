import React from "react";
import { Link } from "react-router-dom";
import { User } from "../interfaces/user";
import "../styles/Navbar.scss";
import { Cart } from "./Cart";

const Navbar = ({ currentUser }: { currentUser: User | null | undefined }) => {
  const handleHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderBottom = "solid 4px orange";
  };

  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.borderBottom = "solid 4px transparent";
  };

  const paths = ["collections", "men", "women", "about", "contact"];

  return (
    <div id="navbar-container">
      <div id="navbar">
        <Link id="title" to="/">
          sneakers
        </Link>
        {paths.map((path) => (
          <React.Fragment key={path}>
            <Link
              to={"/"}
              id={path == "contact" ? "contact" : ""}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              {path}
            </Link>
            {path == "contact" ? <div id="filler"></div> : null}
          </React.Fragment>
        ))}
        <Cart />
        <div
          id="user"
          style={{
            backgroundImage: `url(${currentUser!.image})`,
            border: `solid 2px orange`,
          }}
        ></div>
      </div>
      <div />
      <div id="separator"></div>
    </div>
  );
};

export default Navbar;
