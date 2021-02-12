import React from 'react'
import styled from 'styled-components'

const H2 = styled.h2`
    font-size: 14px;
    font-weight: 500;
    padding: 0;
    line-height: 1px;
    margin: 0 0 20px 0;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #aaaaaa;
    font-family: "Poppins", sans-serif;

    &::after {
        content: "";
        width: 120px;
        height: 1px;
        display: inline-block;
        background: #4ceb95;
        margin: 4px 10px;
    }
`

export const SectionTitle = (props) => (
    <H2>
            {props.children}
    </H2>
)