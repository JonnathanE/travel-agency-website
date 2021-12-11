import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';

const LogoContainer = styled.div`
    ${tw`
        font-family['ZCOOL KuaiLe', cursive]
        font-black
        text-2xl
        text-white
    `}
`;

export const Logo = () => {
    return (
        <LogoContainer>JEDE</LogoContainer>
    )
}
