import React from 'react';
import styled from "styled-components";

function Separator({height}) {
    return (
        <SeparatorContainer style={{
            height: height
        }}></SeparatorContainer>
    );
}

const SeparatorContainer = styled.aside`
  background: transparent;
`;

export default Separator;