import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../../../../../Components/Utils/useWindowDimensions";

function BannerFullScreenHero({data, isVideo, buttonComponent}) {
    const {width} = useWindowDimensions();
    const isFullScreen = width >= 980;
    return (
        <BannerFullScreenHeroContainer>
            {/* Background */}
            <div className="overlay"></div>
            {isVideo ? (
                <video
                    src={
                        isFullScreen
                            ? data.VIDEOS.VIDEO_FULL_SCREEN
                            : data.VIDEOS.VIDEO_MOBILE
                    }
                    autoPlay
                    loop={true}
                    muted
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

            {/* Data */}
            <div className="data-container">
                <h2 className="main-text">{data.HEADER}</h2>
                <h2 className="sub-text">{data.HEADER_2}</h2>
                {buttonComponent}
            </div>
        </BannerFullScreenHeroContainer>
    );
}

const BannerFullScreenHeroContainer = styled.main`
  position: relative;
  width: 100%;
  height: 95vh;
  background: var(--ColorBlack);

  .overlay {
    position: absolute;
    background-color: var(--ColorBlack);
    opacity: 0.6;
    width: 100%;
    height: 95vh;
    top: var(--NavbarHeight);
    left: 0;
    z-index: 999;
  }

  #video {
    position: absolute;
    object-fit: cover;
    top: var(--NavbarHeight);
    left: 0;
    width: 100%;
    height: 95vh;
  }

  .banner-img {
    position: absolute;
    object-fit: cover;
    top: var(--NavbarHeight);
    left: 0;
    width: 100%;
    height: 95vh;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

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
export default BannerFullScreenHero;
