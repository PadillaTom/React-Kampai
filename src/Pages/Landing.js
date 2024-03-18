import React from "react";
import styled from "styled-components";

/* Library */
import {HeroFullScreen} from "../_Library/Page/Sections/Landing/Hero";
import {BasicButton} from "../_Library/Buttons";

/* Website Data */
import {LANDING} from "../_WebsiteData/page-landing";
import {PATHS} from "../_WebsiteData/routes";
import {ContentBox} from "../_Library/Page/Sections/Landing/ContentBoxes";

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
            <ContentBox
                text={"asd"}
                imageUrl={"asd"}
                ctaText={"Découvrez le restaurant"}
                ctaUrl={PATHS.ABOUT}
            />
        </LandingContainer>
    )
};

const LandingContainer = styled.main`
`;


export default Landing;
