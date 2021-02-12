import React from 'react'
import styled from 'styled-components'

const P = styled.p`
    margin: 0;
    margin: -15px 0 15px 0;
    font-size: 36px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    color: #fff;

`

export const SectionSubtitle = (props) => (
    <P>
            {props.children}
    </P>
)