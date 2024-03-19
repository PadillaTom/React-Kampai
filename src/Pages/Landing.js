import React from "react";
import styled from "styled-components";

/* Library */
import {HeroFullScreen} from "../_Library/Page/Sections/Landing/Hero";
import {ContentBox} from "../_Library/Page/Sections/Landing/ContentBoxes";
import {BasicButton} from "../_Library/Buttons";
import {Separator} from "../_Library/Page/Sections/Separator";
import {FlexContainer} from "../_Library/Containers";
import {TextBlockThin} from "../_Library/Text";

/* Website Data */
import {LANDING} from "../_WebsiteData/page-landing";
import {PATHS} from "../_WebsiteData/routes";
import {
    CONTENT_BOX_ABOUT,
    CONTENT_BOX_CARTE,
    TEXT_HISTOIRE_FAMILLE,
    TEXT_HISTOIRE_GOUT
} from "../_WebsiteData/constants";

const buttonComponent = () => {
    return <BasicButton path={PATHS.MENU}
                        text={"Voir Menu"}
                        vPadding={"0.5rem"}
                        hPadding={"2.5rem"}
                        marginTop={"3rem"}
                        isOutlined
    ></BasicButton>
}

const contentBoxes = () => {
    return [
        <ContentBox
            text={CONTENT_BOX_ABOUT.TEXT}
            ctaUrl={CONTENT_BOX_ABOUT.CTA_URL}
            imageUrl={CONTENT_BOX_ABOUT.IMG_URL}
        />,
        <ContentBox
            text={CONTENT_BOX_CARTE.TEXT}
            ctaUrl={CONTENT_BOX_CARTE.CTA_URL}
            imageUrl={CONTENT_BOX_CARTE.IMG_URL}
        />,
    ]
}
const Landing = () => {

    return (
        <LandingContainer>
            <HeroFullScreen
                isVideo={LANDING.IS_VIDEO}
                data={LANDING}
                buttonComponent={buttonComponent()}
            />
            <div className="max-width-container">
                <Separator height={"7rem"}/>

                <TextBlockThin
                    text={TEXT_HISTOIRE_FAMILLE}
                    size={"1.3rem"}
                    spacing={"1px"}
                    color={"var(--ColorWhite)"}
                    lineHeight={"1.75"}
                    maxWidth={"85%"}
                ></TextBlockThin>

                <Separator height={"6rem"}/>

                <FlexContainer
                    components={contentBoxes()}
                    gap={"1.9rem"}
                    gapFullScreen={"2rem"}
                    containerWidth={"92%"}
                    mobileHeight={"40rem"}
                    fullScreenHeight={"35rem"}
                />

                <Separator height={"6rem"}/>

                <TextBlockThin
                    text={TEXT_HISTOIRE_GOUT}
                    size={"1.3rem"}
                    spacing={"1px"}
                    color={"var(--ColorWhite)"}
                    lineHeight={"1.75"}
                    maxWidth={"85%"}
                ></TextBlockThin>

                <Separator height={"5rem"}/>
            </div>
        </LandingContainer>
    )
};

const LandingContainer = styled.main`
  background: var(--ColorBlack-1);

  .max-width-container {
    max-width: 2250px;
    margin: 0 auto;
  }
`;


export default Landing;
