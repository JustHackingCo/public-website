import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    padding: 0 0 20px 20px;
    margin-top: -2px;
    border-left: 2px solid rgba(255, 255, 255, 0.2);
    position: relative;

    &::before{
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50px;
        left: -9px;
        top: 0;
        background: #18d26e;
        border: 2px solid #18d26e;
    }

    h4 {
        line-height: 18px;
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        font-family: "Poppins", sans-serif;
        color: #18d26e;
        margin-bottom: 10px;
    }

     h5 {
        font-size: 16px;
        background: rgba(255, 255, 255, 0.15);
        padding: 5px 15px;
        display: inline-block;
        font-weight: 600;
        margin-bottom: 10px;
    }
`

export const EventCard = (props) => {
    return (
    <Card>
        <h4>{props.name}</h4>
        <h5>{props.date}</h5>
        {props.children}
    </Card>
    )
}