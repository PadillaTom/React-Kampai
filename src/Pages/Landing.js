import React from "react";
import styled from "styled-components";

/* Library */
import {HeroFullScreen} from "../_Library/Page/Sections/Landing/Hero";
import {ContentBox} from "../_Library/Page/Sections/Landing/ContentBoxes";
import {BasicButton} from "../_Library/Buttons";
import {Separator} from "../_Library/Page/Sections/Separator";

/* Website Data */
import {LANDING} from "../_WebsiteData/page-landing";
import {PATHS} from "../_WebsiteData/routes";
import {CONTENT_BOX_ABOUT} from "../_WebsiteData/constants";

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
            <HeroFullScreen
                isVideo={LANDING.IS_VIDEO}
                data={LANDING}
                buttonComponent={buttonComponent()}
            />
            {/* TODO: Insert Text: Une Histoire de Famille */}
            <Separator height={"2rem"}/>
            <ContentBox
                text={CONTENT_BOX_ABOUT.TEXT}
                ctaUrl={CONTENT_BOX_ABOUT.CTA_URL}
                imageUrl={CONTENT_BOX_ABOUT.IMG_URL}
            />
            <Separator height={"2rem"}/>
        </LandingContainer>
    )
};

const LandingContainer = styled.main`
  background: var(--ColorBlack);
`;


export default Landing;
