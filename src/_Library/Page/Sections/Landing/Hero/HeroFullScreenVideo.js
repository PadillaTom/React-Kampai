import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../../../../../Components/Utils/useWindowDimensions";

function HeroFullScreen({data, isVideo, buttonComponent}) {
    const {width} = useWindowDimensions();
    const isFullScreen = width >= 980;
    return (
        <HeroFullScreenContainer>
            {/* Background */}
            <div className="background-container">
                <div className="overlay"></div>
                {isVideo ? (
                    <video
                        src={
                            isFullScreen
                                ? data.VIDEOS.VIDEO_FULL_SCREEN
                                : data.VIDEOS.VIDEO_MOBILE
                        }
                        autoPlay
                        loop
                        muted
                        playsInline
                        id={"video"}
                    />
                ) : (
                    <img
                        src={
                            isFullScreen
                                ? data.IMAGES.IMAGE_FULL_SCREEN
                                : data.IMAGES.IMAGE_MOBILE
                        }
                        alt={"Website Landing Page"}
                        className={"banner-img"}
                    />
                )}
            </div>

            {/* Data */}
            <div className="data-container">
                <h2 className="main-text">{data.HEADER}</h2>
                <h2 className="sub-text">{data.HEADER_2}</h2>
                {buttonComponent}
            </div>
        </HeroFullScreenContainer>
    );
}

const HeroFullScreenContainer = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: var(--NavbarHeight);
  background: var(--ColorBlack);

  .background-container {
    position: relative;
    width: 100%;
    height: 92vh;

    .overlay {
      position: absolute;
      top: -0.1rem;
      left: 0;
      background-color: var(--ColorBlack);
      opacity: 0.6;
      width: 100%;
      height: 101%;
      z-index: 999;
    }

    #video {
      position: absolute;
      object-fit: cover;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .banner-img {
      position: absolute;
      object-fit: cover;
      top: var(--NavbarHeight);
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .data-container {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    color: var(--ColorWhite);
    font-size: 1rem;
    font-weight: 100;
    letter-spacing: 2px;
    font-family: var(--FontTextLogo);
    text-align: center;

    h2 {
      font-weight: 200;
      white-space: nowrap;
      margin-bottom: 1rem;
    }
  }

  @media screen and (min-width: 980px) {
    height: 90vh;

    .overlay {
      top: var(--NavbarHeight980);
      height: 90vh;
    }

    #video {
      top: var(--NavbarHeight980);
      height: 90vh;
    }

    .banner-img {
      top: var(--NavbarHeight980);
      height: 90vh;
    }
  }
`;
export default HeroFullScreen;
