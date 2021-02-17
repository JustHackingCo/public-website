import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    padding: 20px 20px 20px 20px;
    margin: 0px 0px 20px 20px;
    margin-top: -2px;
    border-left: 2px solid rgba(255, 255, 255, 0.2);
    position: relative;
    background: rgba(255, 255, 255, 0.08);



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
    &:hover{
        opacity: 1;
        
        border-left: 2px solid #18d26e;
        
        background: rgba(255, 255, 255, 0.12);
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
    a {
        color:white;
    }

    p a {
        color: #18d26e;
    }

    p a:hover {
        color: #35e888;
        text-decoration: none;
    }
`

export const EventCard = (props) => {
    return (
    <Card>
        <a href={props.link}>
        <h4>{props.name}</h4>
        <h5>{props.date}</h5>
        {props.children}
        </a>
    </Card>
    )
}