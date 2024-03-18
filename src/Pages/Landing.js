import React from "react";
import styled from "styled-components";

/* Library */
import {BannerFullScreenHero} from "../_Library/Page/Sections/Landing/Banner";
import {BasicButton} from "../_Library/Buttons";

/* Website Data */
import {LANDING} from "../_WebsiteData/page-landing";
import {PATHS} from "../_WebsiteData/routes";

const buttonComponent = () => {
    return <BasicButton path={PATHS.MENU}
                        text={"Voir Menu"}
                        vPadding={"0.5rem"}
                        hPadding={"2.5rem"}
                        marginTop={"3rem"}
                        isOutlined
    ></BasicButton>
}
const Landing = () => {

    return (
        <LandingContainer>
            <BannerFullScreenHero
                isVideo={LANDING.IS_VIDEO}
                data={LANDING}
                buttonComponent={buttonComponent()}
            />
        </LandingContainer>
    )
};

const LandingContainer = styled.main`
`;


export default Landing;
