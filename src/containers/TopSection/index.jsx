import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';

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
        <TopSectionContainer></TopSectionContainer>
    )
}
