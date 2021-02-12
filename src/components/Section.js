import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

const Styles = styled.div`
    .container{
        background: rgba(0, 0, 0, 0.9);
        padding: 30px;    
    }
`

export const Section = (props) => (
    <Styles>
        <Container>
            {props.children}
        </Container>
    </Styles>
)