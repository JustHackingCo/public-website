import React from 'react'
import styled from 'styled-components'
import { Col } from 'react-bootstrap'
import { IconContext } from 'react-icons'

const Box = styled(Col)`
    a {
        color: inherit;
    }

    .icon-box {
        display: flex;
        align-items: center;
        padding: 20px;
        background: rgba(255, 255, 255, 0.08);
        transition: ease-in-out 0.3s;
    }

    .icon-box:hover {
        background: rgba(255, 255, 255, 0.12);
    }

    .icon-box i {
        font-size: 32px;
        padding-right: 10px;
        line-height: 1;
    }

    .icon-box h3 {
        font-weight: 700;
        margin: 0;
        padding: 0;
        line-height: 1;
        font-size: 16px;
        color: #fff;
    }
`

export const CategoryBox = (props) => {
    const Icon = props.icon
    return (
    <Box lg={3} md={4} className="mt-4">
            <div className="icon-box">
                <IconContext.Provider value={{ color:props.color, size: "32px" }}>
                    <i><Icon height="24px" width="24px"/></i>
                </IconContext.Provider>
                <h3>{props.text}</h3>
            </div>
    </Box>
    )
}