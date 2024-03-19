import React from 'react';
import styled from "styled-components";
import useWindowDimensions from "../../Components/Utils/useWindowDimensions";

function FlexContainer({
                           components,
                           gap,
                           maxRows = 3,
                           containerWidth,
                           gapFullScreen,
                           mobileHeight,
                           fullScreenHeight
                       }) {

    const {width} = useWindowDimensions();
    let height = mobileHeight;

    if (width < 980) {
        maxRows = 1
    } else {
        containerWidth = "96%";
        gap = gapFullScreen;
        height = fullScreenHeight;
        (components.length < 3) && (maxRows = components.length);
    }

    return (
        <FlexContainerContainer
            style={{
                width: containerWidth
            }}
        >
            <div className="grid-container" style={{
                display: "grid",
                placeItems: "center",
                gridGap: gap,
                gridTemplateColumns: `repeat(${maxRows}, 1fr)`
            }}>

                {components.map((i, index) =>
                    <div className={"single-comp"} key={index} style={{
                        height: height
                    }}>
                        {i}
                    </div>
                )}
            </div>
        </FlexContainerContainer>
    );
}

const FlexContainerContainer = styled.section`
  margin: 0 auto;
  position: relative;

  .grid-container {
    width: 100%;

    .single-comp {
      width: 100%;
      height: 100%;
    }
  }


`

export default FlexContainer;