import React from 'react';
import styled from "styled-components";
import useWindowDimensions from "../../Components/Utils/useWindowDimensions";

function FlexContainer({components, gap, maxRows = 3, containerWidth, gapFullScreen}) {
    const {width} = useWindowDimensions();

    if (width < 980) {
        maxRows = 1
    } else {
        containerWidth = "97%";
        gap = gapFullScreen;
        (components.length < 3) && (maxRows = components.length);
    }

    return (
        <FlexContainerContainer
            style={{
                width: containerWidth,
                display: "grid",
                placeItems: "center",
                gridGap: gap,
                gridTemplateColumns: `repeat(${maxRows}, 1fr)`
            }}
        >
            {components.map((i, index) =>
                <div className={"single-comp"} key={index}>
                    {i}
                </div>
            )}
        </FlexContainerContainer>
    );
}

const FlexContainerContainer = styled.section`
  margin: 0 auto;

  .single-comp {
    width: 100%;
    height: 100%;

    * {
      width: 100%;
    }
  }
`

export default FlexContainer;