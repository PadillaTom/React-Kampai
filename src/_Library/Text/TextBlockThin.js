import React from 'react';
import styled from "styled-components";

function TextBlockThin({text, size, spacing, color, lineHeight, maxWidth}) {

    return (
        <TextBlockContainer
            style={{
                fontSize: size,
                color: color,
                letterSpacing: spacing,
                lineHeight: lineHeight,
                width: maxWidth,
                maxWidth: "1050px"
            }}
        >
            {text}
        </TextBlockContainer>
    );
}

const TextBlockContainer = styled.h2`
  margin: 0 auto;
  text-align: center;

  font-family: var(--FontThin);
  font-weight: 200;

  @media screen and (min-width: 980px) {
    font-size: 1.5rem !important;
    line-height: 1.85 !important;
  }
`

export default TextBlockThin;