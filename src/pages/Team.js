import React from 'react'
import styled from 'styled-components'
import { Row, Col, Image } from 'react-bootstrap'
import { SectionPanel } from '../components/SectionPanel'
import { Section } from '../components/Section'
import { SectionTitle } from '../components/SectionTitle'
import { SectionSubtitle } from '../components/SectionSubtitle'
import { CategoryBox } from '../components/info/CategoryBox'
import {FaNetworkWired } from 'react-icons/fa'
import { RiLock2Line, RiGlobalLine, RiBugLine, RiEyeOffLine, 
  RiArchiveLine, RiFireLine, RiOpenSourceLine, RiSmartphoneLine,
  RiArrowGoBackFill, RiHardDriveLine, RiTeamLine } from 'react-icons/ri'
import blacknote from '../assets/pfps/blacknote.png'
import fumenoid from '../assets/pfps/fume.webp'
import john from '../assets/pfps/john.png'

export const Team = () => (
    <React.Fragment>
        <SectionPanel>
            <Section>
                <Introduction>
                    {/* <SectionTitle>About Us.</SectionTitle> */}
                    <SectionSubtitle>Meet The Team</SectionSubtitle>

                    <Row>
                        <Col lg={3}>
                            <Image src={john} alt="john's pfp" fluid />
                        </Col>
                        <Col lg={8} className="pt-4 pt-lg-0">
                            <h3>John Hammond</h3>
                            <p>
                            John Hammond is a cybersecurity researcher, red teamer, and Capture the Flag enthusiast. As part of the Threat Operations team at Huntress, John spends his days analyzing malware and making hackers earn their access. Previously, as a Department of Defense Cyber Training Academy instructor, he taught the Cyber Threat Emulation course, educating both civilian and military members on offensive Python, PowerShell, other scripting languages and the adversarial mindset. He has developed training material and information security challenges for events such as PicoCTF and competitions at DEFCON US. John speaks at security conferences such as BsidesNoVA, to students at colleges such as the US Naval Academy, and other online events including the SANS Holiday Hack Challenge/KringleCon. He is an online YouTube personality showcasing programming tutorials, CTF video walkthroughs and other cyber security content. John currently holds the following certifications: Security+, CEH, LFS, eJPT, eCPPT, PCAP, OSWP, OSCP, OSCE, OSWE, OSEP, and OSED (OSCE(3)).
                            </p>
                        </Col>
                    </Row>
                    <Section>
                <JeopardyCategories>
                    <SectionTitle>John Develops</SectionTitle>
                    <Row>
                    <CategoryBox icon={RiLock2Line} color="#ffbb2c" link="#test" text="Cryptography"></CategoryBox>
                        <CategoryBox icon={RiGlobalLine} color="#5578ff" link="#test" text="Web Security"></CategoryBox>
                        <CategoryBox icon={RiBugLine} color="#e80368" link="#test" text="Binary Exploitation"></CategoryBox>
                        <CategoryBox icon={RiEyeOffLine} color="#e361ff" link="#test" text="Steganography"></CategoryBox>
                        <CategoryBox icon={RiArchiveLine} color="#47aeff" link="#test" text="Miscellaneous"></CategoryBox>
                        <CategoryBox icon={RiFireLine} color="#ffa76e" link="#test" text="Fundamental"></CategoryBox>
                        <CategoryBox icon={RiOpenSourceLine} color="#11dbcf" link="#test" text="Open Source Intelligence"></CategoryBox>
                        <CategoryBox icon={RiSmartphoneLine} color="#4233ff" link="#test" text="Mobile Applications"></CategoryBox>
                    </Row>
                </JeopardyCategories>
            </Section>


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
                    <SectionTitle>Fumenoid Develops</SectionTitle>
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