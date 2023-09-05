import React, { useRef, useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { User } from "../interfaces/user";
import "../styles/Navbar.scss";
import { Cart } from "./Cart";

const Navbar = ({ currentUser }: { currentUser: User | null | undefined }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth > 416)
      e.currentTarget.style.borderBottom = "solid 4px orange";
  };

  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth > 416)
      e.currentTarget.style.borderBottom = "solid 4px transparent";
  };
  const linksRef = useRef<HTMLDivElement>(null);

  const paths = ["Collections", "Men", "Women", "About", "Contact"];

  const handleMenu = (_e: React.MouseEvent<HTMLDivElement>) => {
    setIsMenuOpen(!isMenuOpen);

    if (isMenuOpen) {
      linksRef.current!.style.transform = "scaleX(1)";
      setTimeout(() => {
        linksRef.current!.style.boxShadow = "0 0 15px 100vw #0c0c0cc2";
      }, 25);
    } else {
      linksRef.current!.style.transform = "scaleX(0)";
      linksRef.current!.style.boxShadow = "none";
    }
  };

  return (
    <div id="navbar-container">
      <div id="navbar">
        <div id="left">
          {window.innerWidth <= 416 ? (
            <div id="icon-container" onClick={handleMenu}>
              {isMenuOpen ? <IoIosMenu id="icon" /> : <IoIosClose id="icon" />}
            </div>
          ) : null}
          <Link id="title" to="/">
            sneakers
          </Link>
          <div id="links" ref={linksRef}>
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
          </div>
        </div>
        <div id="user-section">
          <Cart />
          <div
            id="user"
            style={{
              backgroundImage: `url(${currentUser!.image})`,
              border: `solid 2px orange`,
            }}
          ></div>
        </div>
      </div>
      <div />
      {window.innerWidth > 416 ? <div id="separator"></div> : null}
    </div>
  );
};

export default Navbar;
