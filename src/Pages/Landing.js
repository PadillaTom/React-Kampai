import React from "react";
import styled from "styled-components";

/* Library */
import BannerFullScreenHero from "../_Library/Page/Sections/Landing/Banner/BannerFullScreenVideo";

/* Website Data */
import {LANDING} from "../_WebsiteData/page-landing";

const Landing = () => {
    return (
        <LandingContainer>
            <BannerFullScreenHero isVideo={LANDING.IS_VIDEO} data={LANDING}/>
        </LandingContainer>
    )
};

const LandingContainer = styled.main`
`;


export default Landing;
