import React from 'react';
import styled from "styled-components";
import useWindowDimensions from "../../../../../Components/Utils/useWindowDimensions";

function BannerFullScreenHero({data, isVideo}) {
    const {width} = useWindowDimensions();
    const isFullScreen = (width > 980);
    return (
        <BannerFullScreenHeroContainer>

            {/* Background */}
            <div className="overlay"></div>
            {
                isVideo ?
                    <video src={isFullScreen ?
                        data.VIDEOS.VIDEO_FULL_SCREEN :
                        data.VIDEOS.VIDEO_MOBILE}
                           autoPlay
                           loop={true}
                           muted
                           id={"video"}
                    />
                    :
                    <img src={isFullScreen ?
                        data.IMAGES.IMAGE_FULL_SCREEN :
                        data.IMAGES.IMAGE_MOBILE}
                         alt={"Website Landing Page"}
                         className={"banner-img"}
                    />
            }

            {/* Data */}
            <div className="data-container">
                <h2 className="main-text">
                    {data.HEADER}
                </h2>
                <h2 className="sub-text">
                    {data.HEADER_2}
                </h2>
            </div>

        </BannerFullScreenHeroContainer>
    );
}

const BannerFullScreenHeroContainer = styled.main`
  width: 100%;
  height: 99vh;
  background: var(--ColorBlack);
  position: relative;

  .overlay {
    position: absolute;
    background-color: var(--ColorBlack);
    opacity: 0.7;
    width: 100%;
    height: 99vh;
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
    height: 85vh;
  }

  .banner-img {
    position: absolute;
    object-fit: cover;
    top: var(--NavbarHeight);
    left: 0;
    width: 100%;
    height: 99vh;
  }

  .data-container {
    position: absolute;
    top: 50%;
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
    height: 6rem;

    h2 {
      font-weight: 200;
      white-space: nowrap;
    }
  }


  @media screen and (min-width: 980px) {
    height: 75vh;

    .overlay {
      top: var(--NavbarHeight980);
      height: 70vh;
    }

    #video {
      top: var(--NavbarHeight980);
      height: 70vh;
    }

    .banner-img {
      top: var(--NavbarHeight980);
      height: 70vh;
    }

  }

`;
export default BannerFullScreenHero;