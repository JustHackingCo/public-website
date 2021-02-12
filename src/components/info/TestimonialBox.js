import React from 'react'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

const Box = styled.div`
    .testimonial-item {
        box-sizing: content-box;
        min-height: 320px;
    }

    .testimonial-item p {
        font-style: italic;
        margin: 0 15px 0 15px;
        padding: 30px 20px 60px 20px;
        background: rgba(255, 255, 255, 0.1);
        position: relative;
        border-radius: 6px;
        z-index: 1;
    }

    .quote-icon {
        color: rgba(255, 255, 255, 0.25);
        font-size: 26px;
    }

    .quote-icon-left {
        display: inline-block;
        margin-right: 10px;
        position: relative;
        top: -10px;
    }

    .quote-icon-right {
        display: inline-block;
        margin-left: 10px;
        position: relative;
        top: 5px;
    }

    .testimonial-img {
        width: 90px !important;
        /* border-radius: 50%; */
        margin: -40px 0 0 40px;
        position: relative;
        z-index: 2;
        /* border: 6px solid rgba(255, 255, 255, 0.12); */
    }
`

export const TestimonialBox = (props) => {
    return (
        <Box>
            <div className="testimonial-item">
                <p>
                    <IconContext.Provider value={{ size: "22px" }}>
                        <ImQuotesLeft className="quote-icon quote-icon-left"/>
                        {props.text}
                        <ImQuotesRight className="quote-icon quote-icon-right" />
                    </IconContext.Provider>
                </p>
                <img src={props.image} className="testimonial-img" alt="" />
            </div>
        </Box>
    )
}