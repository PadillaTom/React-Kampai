import React from "react";
import styled from "styled-components";
import {AiOutlineMenu} from "react-icons/ai";

import {useNavigationContext} from "../../Context/navigation_context";

/* Library */
import {TextLogo} from "../../_Library/Logotypes"
import {RouteMapper} from "../../_Library/Navigation";

/* Website Data */
import {CLIENT_DATA} from "../../_WebsiteData/constants";
import {routes} from "../../_WebsiteData/routes";

const Navbar = () => {
    const {openSidebar} = useNavigationContext();
    return (<NavContainer>
        <div className="nav-center">
            <div className="nav-header">
                <button className="nav-toggle" type="button" onClick={openSidebar}>
                    <AiOutlineMenu></AiOutlineMenu>
                </button>
                <TextLogo text={CLIENT_DATA.NAME}></TextLogo>
            </div>
            <ul className="nav-links">
                <RouteMapper routes={routes}></RouteMapper>
            </ul>
        </div>
    </NavContainer>);
};

const NavContainer = styled.nav`
  z-index: 1000;
  width: 100%;
  height: var(--NavbarHeight);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--ColorBlack);
  color: var(--ColorWhite);
  position: fixed;

  .nav-center {
    width: 87%;
    margin: 0 auto;
    max-width: var(--WidthMax);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--ColorWhite);
    cursor: pointer;

    svg {
      font-size: 1.7rem;
    }
  }

  .nav-links {
    display: none;
  }

  @media screen and (min-width: 768px) {
    height: var(--NavbarHeight980);
    .nav-toggle {
      svg {
        font-size: 1.8rem;
      }
    }
  }

  @media screen and (min-width: 980px) {
    height: 4.5rem;
    box-shadow: var(--ShadowLight);
    position: fixed;
    top: 0;

    .nav-toggle {
      display: none;
    }

    .nav-center {
      width: 92%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-links {
      display: flex;
      justify-content: center;

      li {
        margin-left: 2.5rem;
      }

      a {
        color: var(--ColorWhite);
        font-family: var(--FontThin);
        text-transform: uppercase;
        font-size: 0.85rem;
        font-weight: 300;
        letter-spacing: 2.8px;
        border-bottom: 1px solid transparent;
        transition: var(--MainTransition);
        padding-bottom: 0.35rem;
        opacity: 0.85;

        &:hover {
          border-bottom: 1px solid var(--ColorWhite);
          opacity: 1;
        }
      }
    }
  }

  @media (min-width: 1150px) {
    .nav-center {
      max-width: 1400px;
    }

    .nav-links {
      li {
        margin-left: 3rem;
      }

      a {
        font-size: 0.95rem;
      }
    }
  }
`;

export default Navbar;
