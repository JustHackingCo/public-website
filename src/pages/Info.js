import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap'
import { SectionPanel } from '../components/SectionPanel'
import { Section } from '../components/Section'
import { SectionTitle } from '../components/SectionTitle'
import { SectionSubtitle } from '../components/SectionSubtitle'
import { NumberBox } from '../components/info/NumberBox'
import { CategoryBox } from '../components/info/CategoryBox'
import TestimonialCarousel from '../components/info/TestimonialCarousel'
import { FaHeadset, FaUsers, FaPuzzlePiece, FaLaptopCode, FaNetworkWired } from 'react-icons/fa'
import { RiLock2Line, RiGlobalLine, RiBugLine, RiEyeOffLine, 
        RiArchiveLine, RiFireLine, RiOpenSourceLine, RiSmartphoneLine,
        RiArrowGoBackFill, RiHardDriveLine, RiTeamLine } from 'react-icons/ri'
import info_intro from '../assets/info_intro.jpg'

export const Info = () => (
    <React.Fragment>
        <SectionPanel>
            <Section>
                <Introduction>
                    <SectionTitle>Information</SectionTitle>
                    <SectionSubtitle>Learn more</SectionSubtitle>
                    <Row>
                        <Col lg={4}>
                            <Image src={info_intro} alt="Intro" fluid />
                        </Col>
                        <Col lg={8} className="pt-4 pt-lg-0">
                            <h3>Capture The Flag</h3>
                            <p>
                                Learn practical, hands-on skills with engaging exercises
                                and cybersecurity training as part of a capture the flag
                                competition. Collaborate with your team members,
                                solve new problems, and grow your personnel!
                            </p>
                            <p>
                                <b>CTF4Hire</b> offers custom Capture the Flag events for
                                any company, conference, or event. Running some internal
                                training for your team? We can provide the infrastructure,
                                challenges, support and maintenance for an enterprise-wide
                                activity. Hosting a virtual conference, open to the whole
                                world? Our platform scales to handle the traffic.
                            </p>
                            <p>
                                <b><Link to="/requestCTF">Request a CTF</Link></b> to see what we can build for you!
                            </p>
                        </Col>
                    </Row>
                </Introduction>
            </Section>
            <Section>
                <Numbers>
                    <Row>
                        <NumberBox icon={FaHeadset} small="about" link="#team" number={10} text="Supporting Personnel"/>
                        <NumberBox icon={FaPuzzlePiece} small="over" link="#challenges" number={350} text="Developed Training Sets"/>
                        <NumberBox icon={FaUsers} small="more than" link="/events" number={15000} text="Previous Players"/>
                        <NumberBox icon={FaLaptopCode} small="created over" link="#infrastructure" number={50000} text="Challenge Deployments"/>
                    </Row> 
                </Numbers>
            </Section>
            <Section>
                <JeopardyCategories>
                    <SectionTitle>Jeopardy categories</SectionTitle>
                    <Row>
                        <CategoryBox icon={RiLock2Line} color="#ffbb2c" link="#test" text="Cryptography"></CategoryBox>
                        <CategoryBox icon={RiGlobalLine} color="#5578ff" link="#test" text="Web Security"></CategoryBox>
                        <CategoryBox icon={RiBugLine} color="#e80368" link="#test" text="Binary Exploitation"></CategoryBox>
                        <CategoryBox icon={RiEyeOffLine} color="#e361ff" link="#test" text="Steganography"></CategoryBox>
                        <CategoryBox icon={RiArchiveLine} color="#47aeff" link="#test" text="Miscellaneous"></CategoryBox>
                        <CategoryBox icon={RiFireLine} color="#ffa76e" link="#test" text="Fundamental"></CategoryBox>
                        <CategoryBox icon={RiOpenSourceLine} color="#11dbcf" link="#test" text="Open Source Intelligence"></CategoryBox>
                        <CategoryBox icon={RiSmartphoneLine} color="#4233ff" link="#test" text="Mobile Applications"></CategoryBox>
                        <CategoryBox icon={RiArrowGoBackFill} color="#29cc61" link="#test" text="Reverse Engineering"></CategoryBox>
                        <CategoryBox icon={RiHardDriveLine} color="#b20969" link="#test" text="Host Forensics"></CategoryBox>
                        <CategoryBox icon={FaNetworkWired} color="#ff5828" link="#test" text="Networking"></CategoryBox>
                        <CategoryBox icon={RiTeamLine} color="#dc3545" link="#test" text="Red Team Operations"></CategoryBox>
                    </Row>
                </JeopardyCategories>
            </Section>
            <Section>
                <Testimonials>
                    <SectionTitle>Testimonials</SectionTitle>
                    <TestimonialCarousel></TestimonialCarousel>
                </Testimonials>
            </Section>
        </SectionPanel>
    </React.Fragment>
)

const Introduction = styled.div`
    h3 {
        font-weight: 700;
        font-size: 26px;
        color: #18d26e;
    }
`

const Numbers = styled.div`

`

const JeopardyCategories = styled.div`

`

const Testimonials = styled.div`

`
