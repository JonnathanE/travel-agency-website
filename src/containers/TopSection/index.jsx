import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { NavBar } from '../../components/NavBar';

const TopSectionContainer = styled.div`
    ${tw`
        w-full
        h-screen
        flex-col
        relative
    `}
`;

export const TopSection = () => {
    return (
        <TopSectionContainer>
            <NavBar />
        </TopSectionContainer>
    )
}
