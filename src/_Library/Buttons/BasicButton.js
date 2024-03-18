import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const BasicButton = ({
                         path, text, isOutlined, vPadding, hPadding, marginTop,
                     }) => {
    return (<BasicButtonContainer>
        <Link to={path}>
            <button
                type="button"
                style={{
                    padding: `${vPadding} ${hPadding}`, marginTop: marginTop,
                }}
                className={isOutlined ? "btn-outlined" : "btn-filled"}
            >
                {text}
            </button>
        </Link>
    </BasicButtonContainer>);
};

const BasicButtonContainer = styled.div`
  button {
    outline: none;
    border: none;
    font-size: 1.2rem;
    color: white;
    font-weight: 400;
    font-family: var(--FontThick);
    text-transform: uppercase;
    letter-spacing: 3px;
    cursor: pointer;
    transition: var(--MainTransition);
  }

  .btn-outlined {
    background: transparent;
    border: 1.7px solid var(--ColorWhite);
  }

  .btn-outlined:hover {
    background: var(--ColorWhite);
    color: var(--ColorBlack);
  }
`;

export default BasicButton;
