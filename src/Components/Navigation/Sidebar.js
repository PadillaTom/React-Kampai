import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

import { links } from "../../Utils/website-data";

import { useNavigationContext } from "../../Context/navigation_context";

import {TextLogo} from "../../Utils/Kampai Constants";

const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useNavigationContext();
	return (
		<SidebarContainer>
			<aside
				className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
			>
				<div className="sidebar-header">
					<button className="nav-toggle" type="button" onClick={closeSidebar}>
						<FaTimes></FaTimes>
					</button>
					<TextLogo></TextLogo>
				</div>
				<ul className="links">
					{links.map((singleLink) => {
						const { id, name, url } = singleLink;
						return (
							<li key={id} onClick={closeSidebar}>
								<Link to={url}>{name}</Link>
							</li>
						);
					})}
				</ul>
			</aside>
		</SidebarContainer>
	);
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
		z-index: 999;
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
