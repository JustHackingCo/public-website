import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import styled from 'styled-components'
import { TestimonialBox } from './TestimonialBox'
import hacktivitycon from '../../assets/ctfs/hacktivitycon.png'
import virseccon from '../../assets/ctfs/virseccon.png'
import bsidesbos from '../../assets/ctfs/bsidesbos.png'
import nahamcon from '../../assets/ctfs/nahamcon.png'

const responsive = { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 3 } }

const testimonials = [
    {
        image: hacktivitycon,
        text: "Huge thanks to all involved for creating this amazing CTF. Stuff like this makes me love cybersecurity even more!"
    },
    {
        image: virseccon,
        text: "I enjoyed this CTF a lot. I don't normally interact with communities on Discord, but I did enjoy interacting with people and working through some of the challenges together over DM. Thanks all involved with providing us another awesome CTF!"
    },
    {
        image: bsidesbos,
        text: "Thank you for putting this CTF together. Although it was extremely challenging I had fun with the community. Thank you for your hard work. I think it safe to say that everyone was pushed beyond their limits today. You all rock!!"
    },
    {
        image: hacktivitycon,
        text: "It was a ton of fun and seriously thanks for doing it, our team had a total blast!"
    },
    {
        image: nahamcon,
        text: "I've never done a CTF quite like this one, but I will definitely be participating in more in the future. Keep up the great work!"
    },
]

class TestimonialCarousel extends Component {
    Testimonials = testimonials.map((testimonial, index) => (
        <TestimonialBox key={index} image={testimonial.image} text={testimonial.text} />
    ))
    render() {
        return (
            <Styled>
                <OwlCarousel items={3} margin={8} autoplay={true} dots loop
                    responsive={responsive}>
                    {this.Testimonials}
                </OwlCarousel>
            </Styled>
        )
    }
}

const Styled = styled.div`

    .owl-dots {
        margin-top: 5px;
        text-align: center;
    }
    
    .owl-dot {
        display: inline-block;
        margin: 0 5px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3) !important;
    }
    
    .owl-dot.active {
        background-color: #18d26e !important;
    }
`

export default TestimonialCarousel  