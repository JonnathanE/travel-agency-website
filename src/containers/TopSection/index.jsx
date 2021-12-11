import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { NavBar } from '../../components/NavBar';
import BackgroundImage from '../../images/indonesia-high-res.jpg'

const TopSectionContainer = styled.div`
    ${tw`
        w-full
        h-screen
        flex-col
        relative
    `}
`;

const LandingSection = styled.div`
    ${tw`
        w-full
        h-screen
        flex
        flex-col
    `}

    background-image: url(${BackgroundImage}),
        linear-gradient(to left, #005b9c, #b1d1b148);
    background-size: cover;
    background-position: bootom 10% left;
    background-blend-mode: overlay;
`;

export const TopSection = () => {
    return (
        <TopSectionContainer>
            <LandingSection>
                <NavBar />
            </LandingSection>
        </TopSectionContainer>
    )
}
