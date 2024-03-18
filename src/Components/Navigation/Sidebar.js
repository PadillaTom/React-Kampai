import React from "react";
import styled from "styled-components";
import {FaTimes} from "react-icons/fa";

import {useNavigationContext} from "../../Context/navigation_context";

/* Library */
import {TextLogo} from "../../_Library/Logotypes"
import {RouteMapper} from "../../_Library/Navigation";

/* Website Data */
import {CLIENT_DATA} from "../../_WebsiteData/constants";
import {routes} from "../../_WebsiteData/routes";

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useNavigationContext();
    return (<SidebarContainer>
        <aside
            className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
        >
            <div className="sidebar-header">
                <button className="nav-toggle" type="button" onClick={closeSidebar}>
                    <FaTimes></FaTimes>
                </button>
                <TextLogo text={CLIENT_DATA.NAME} onClick={closeSidebar}></TextLogo>
            </div>
            <ul className="links">
                <RouteMapper routes={routes} onClick={closeSidebar}></RouteMapper>
            </ul>
        </aside>
    </SidebarContainer>);
};

const SidebarContainer = styled.div`
  text-align: center;

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 87%;
    margin: 0 auto;
    height: 4.8rem;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--ColorWhite);
    cursor: pointer;

    svg {
      font-size: 1.9rem;
    }
  }

  .links {
    padding-top: 1.6rem;
  }

  .links a {
    display: block;
    text-align: left;
    font-family: var(--FontThin);
    color: var(--ColorWhite);
    font-size: 1.07rem;
    font-weight: 200;
    text-transform: capitalize;
    letter-spacing: 2.8px;
    padding: 1.2rem 2.5rem;
    transition: var(--TransitionFast);
  }

  .links a:hover {
    padding-left: 3.3rem;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--ColorBlack);
    transition: var(--MainTransition);
    transform: translate(-100%);
    z-index: -1;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 9999;
  }

  @media (min-width: 720px) {
    .sidebar-header {
      height: 6.7rem;
    }
  }
  @media (min-width: 980px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
