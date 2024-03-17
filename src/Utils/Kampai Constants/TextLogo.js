import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TextLogo = () => {
	return (
		<LogoContainer>
			<Link to="/">
				<h1>KAMPAI</h1>
			</Link>
		</LogoContainer>
	);
};

const LogoContainer = styled.nav`
	h1 {
		font-size: 2.3rem;
		letter-spacing: 2.7px;
		font-family: var(--FontTextLogo);
		font-weight: 100;
		color: var(--ColorWhite)
	}

	@media (min-width: 720px) {
		h1 {
			font-size: 2.4rem;
		}
	}
	@media (min-width: 980px) {
		h1 {
			font-size: 2rem;
		}
	}
`;

export default TextLogo;
