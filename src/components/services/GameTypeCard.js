import React from 'react'
import styled from 'styled-components'
import { Col } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'

const Card = styled(Col)`
a {
    color: inherit;
}
.icon-box {
    text-align: center;
    background: rgba(204, 204, 204, 0.1);
    padding: 80px 20px;
    transition: all ease-in-out 0.3s;
}
.icon-box:hover {
    background: ${props => props.color};
}
.icon {
    background: ${props => props.color} !important;
    margin: 0 auto;
    width: 64px;
    height: 64px;
    border-radius: 5px;
    transition: all .3s ease-out 0s;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    transform-style: preserve-3d;
}
.icon-box:hover .icon {
    background: white !important;
}
.icon::before {
    position: absolute;
    content: '';
    left: -8px;
    top: -8px;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 5px;
    transition: all .3s ease-out 0s;
    transform: translateZ(-1px);
}
.icon-box:hover .icon::before {
    background: ${props => props.hovercolor} !important;
}
.icon-box:hover .icon svg {
    color: ${props => props.color} !important;
}
h4 {
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 24px;
}
p {
    line-height: 24px;
    font-size: 14px;
    margin-bottom: 0;
}
`

export const GameTypeCard = (props) => {
    const Icon = props.icon

    return (
        <Card lg={4} md={6} className="mt-4" color={props.color} hovercolor={props.hovercolor}>
            <Link to={props.link}>
                <div className="icon-box">
                    <div className="icon">
                        <IconContext.Provider value={{ color: "#fff", size: "28px" }}>
                            <Icon />
                        </IconContext.Provider>
                    </div>
                    <h4>{props.title}</h4>
                    <p>{props.children}</p>
                </div>
            </Link>
        </Card>
    )
}