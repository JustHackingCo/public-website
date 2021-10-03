import React from 'react'
import styled from 'styled-components'
import { Row, Col, Image } from 'react-bootstrap'
import { SectionPanel } from '../components/SectionPanel'
import { Section } from '../components/Section'
import { SectionTitle } from '../components/SectionTitle'
import { SectionSubtitle } from '../components/SectionSubtitle'
import { CategoryBox } from '../components/info/CategoryBox'
import {FaNetworkWired } from 'react-icons/fa'
import { RiLock2Line, RiGlobalLine, RiEyeOffLine, RiArchiveLine, RiFireLine, RiTeamLine } from 'react-icons/ri'
import blacknote from '../assets/pfps/blacknote.png'
import fumenoid from '../assets/pfps/fume.webp'

export const Team = () => (
    <React.Fragment>
        <SectionPanel>
            <Section>
                <Introduction>
                    <SectionTitle>About Us.</SectionTitle>
                    <SectionSubtitle>Meet The Team</SectionSubtitle>
                    <Row>
                        <Col lg={3}>
                            <Image src={blacknote} alt="blacknote's pfp" fluid />
                        </Col>
                        <Col lg={8} className="pt-4 pt-lg-0">
                            <h3>Blacknote</h3>
                            <p>
                              Blacknote
                            </p>
                        </Col>
                    </Row>
                    <Section>
                <JeopardyCategories>
                    <SectionTitle>Blacknote Develops</SectionTitle>
                    <Row>
                        <CategoryBox icon={RiLock2Line} color="#ffbb2c" link="#test" text="Cryptography"></CategoryBox>
                        <CategoryBox icon={RiGlobalLine} color="#5578ff" link="#test" text="Web Security"></CategoryBox>
                        <CategoryBox icon={RiEyeOffLine} color="#e361ff" link="#test" text="Steganography"></CategoryBox>
                        <CategoryBox icon={RiArchiveLine} color="#47aeff" link="#test" text="Miscellaneous"></CategoryBox>
                        <CategoryBox icon={RiFireLine} color="#ffa76e" link="#test" text="Fundamental"></CategoryBox>
                        <CategoryBox icon={FaNetworkWired} color="#ff5828" link="#test" text="Networking"></CategoryBox>
                        <CategoryBox icon={RiTeamLine} color="#dc3545" link="#test" text="Red Team Operations"></CategoryBox>
                    </Row>

                </JeopardyCategories>
            </Section>
                    <Row>
                        <Col lg={3}>
                            <Image src={fumenoid} alt="fumenoid's pfp" fluid />
                        </Col>
                        <Col lg={8} className="pt-4 pt-lg-0">
                            <h3>Fumenoid</h3>
                            <p>
                                Fumenoid 
                            </p>
                        </Col>
                    </Row>
                    <Section>
                <JeopardyCategories>
                    <SectionTitle>Blacknote Develops</SectionTitle>
                    <Row>
                        <CategoryBox icon={RiLock2Line} color="#ffbb2c" link="#test" text="Cryptography"></CategoryBox>
                        <CategoryBox icon={RiGlobalLine} color="#5578ff" link="#test" text="Web Security"></CategoryBox>
                        <CategoryBox icon={RiEyeOffLine} color="#e361ff" link="#test" text="Steganography"></CategoryBox>
                        <CategoryBox icon={RiArchiveLine} color="#47aeff" link="#test" text="Miscellaneous"></CategoryBox>
                        <CategoryBox icon={RiFireLine} color="#ffa76e" link="#test" text="Fundamental"></CategoryBox>
                        <CategoryBox icon={FaNetworkWired} color="#ff5828" link="#test" text="Networking"></CategoryBox>
                        <CategoryBox icon={RiTeamLine} color="#dc3545" link="#test" text="Red Team Operations"></CategoryBox>
                    </Row>

                </JeopardyCategories>
            </Section>
                </Introduction>
            </Section>
            
            <Section>
            
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