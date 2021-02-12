import React from 'react'
import styled from 'styled-components'
import { Col } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'

const Box = styled(Col)`
    a {
        color: inherit;
    }

    .count-box {
        padding: 30px 30px 25px 30px;
        width: 100%;
        position: relative;
        text-align: center;
        background: rgba(255, 255, 255, 0.08);
    }

    .count-box i {
        position: absolute;
        top: -25px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 12px;
        background: rgba(255, 255, 255, 0.1);
        padding: 12px;
        color: #18d26e;
        border-radius: 50px;
    }

    .count-box span {
        font-size: 36px;
        display: block;
        font-weight: 600;
        color: #fff;
    }

    .count-box p {
        padding: 0;
        margin: 0;
        font-family: "Raleway", sans-serif;
        font-size: 14px;
    }
`

export const NumberBox = (props) => {
    const Icon = props.icon
    return (
    <Box lg={3} md={6} className="mt-5 mt-lg-0">
        <Link to={props.link}>
            <div className="count-box">
                <IconContext.Provider value={{ size: "24px" }}>
                    <i><Icon height="24px" width="24px"/></i>
                </IconContext.Provider>
                <small>{props.small}</small>
                <span datatoggle="counter-up"><CountUp end={props.number}/></span>
                <p>{props.text}</p>
            </div>
        </Link>
    </Box>
    )
}