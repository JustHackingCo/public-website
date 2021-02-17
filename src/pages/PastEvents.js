import React from 'react'
import styled from 'styled-components'
import { SectionPanel } from '../components/SectionPanel'
import { Section } from '../components/Section'
import { SectionTitle } from '../components/SectionTitle'
import { SectionSubtitle } from '../components/SectionSubtitle'
import { EventCard } from '../components/pastEvents/EventCard'
import { Row, Col } from 'react-bootstrap'
import hacktivitycon from '../assets/ctfs/hacktivitycon.png'
import virseccon from '../assets/ctfs/virseccon.png'
import bsidesbos from '../assets/ctfs/bsidesbos.png'
import nahamcon from '../assets/ctfs/nahamcon.png'
import grimmcon from '../assets/ctfs/grimmcon.jpg'
import hackerone from '../assets/ctfs/hackerone.png'

export const PastEvents = () => (
    <React.Fragment>
        <Styles>
            <SectionPanel>
                <Section>
                    <SectionTitle>Past events</SectionTitle>
                    <SectionSubtitle>Previous CTF competitions</SectionSubtitle>
                    <Row>
                        <Col lg={6}>
                            <h3 className="resume-title">Jeopardy CTFs</h3>
                            
                            <EventCard name="VirSecCon CTF" date="April 3-4, 2020" link="events/virseccon">
                                <p>Delivered alongside the <a href="https://virseccon.com" target="_blank" rel="noreferrer">VirSecCon</a> conference hosted by The Cyber Mentor and NahamSec.</p>
                                <ul>
                                    <li>60+ Challenges</li>
                                    <li>3,500+ Players</li>
                                </ul>
                                <a href="https://virseccon.com" target="_blank" rel="noreferrer"><img src={virseccon} alt="VirSecCon Logo"/></a>
                            </EventCard>

                            <EventCard name="NahamCon 2020 CTF" date="June 12-13, 2020" link="events/nahamcon2020">
                                <p>Delivered alongside the <a href="https://nahamcon.splashthat.com/" target="_blank" rel="noreferrer">NahamCon 2020</a> conference hosted by NahamSec, The Cyber Mentor, STOK and John Hammond.</p>
                                <ul>
                                    <li>75+ Challenges</li>
                                    <li>5,000+ Players</li>
                                </ul>
                                <a href="https://nahamcon.splashthat.com/" target="_blank" rel="noreferrer"><img src={nahamcon} alt="NahamCon Logo"/></a>
                            </EventCard>

                            <EventCard name="Veterans in Security CTF" date="November 10, 2020" link="events/vetsec">
                                <p>Delivered alongside the <a href="https://www.hackerone.com/events/veterans-security-community-day" target="_blank" rel="noreferrer">Veterans in Security</a> community event hosted by HackerOne.</p>
                                <ul>
                                    <li>30+ Challenges</li>
                                    <li>100+ Players</li>
                                </ul>
                                <a href="https://www.hackerone.com/events/veterans-security-community-day" target="_blank" rel="noreferrer"><img src={hackerone} alt="HackerOne Logo"/></a>
                            </EventCard>

                        </Col>
                        <Col lg={6}>

                            <h3 className="resume-title d-none d-lg-block">&nbsp;</h3>

                            <EventCard name="HacktivityCon CTF" date="July 29-31, 2020" link="events/hacktivitycon">
                                <p>Delivered alongside the <a href="https://www.hackerone.com/hacktivitycon" target="_blank" rel="noreferrer">HacktivityCon</a> conference hosted by NahamSec and HackerOne.</p>
                                <ul>
                                    <li>90+ Challenges</li>
                                    <li>5,000+ Players</li>
                                </ul>
                                <a href="https://www.hackerone.com/hacktivitycon" target="_blank" rel="noreferrer"><img src={hacktivitycon} alt="HacktivityCon Logo"/></a>
                            </EventCard>

                            <EventCard name="BsidesBOS CTF" date="September 26th, 2020" link="events/bsidesbos">
                                <p>Delivered alongside the Security <a href="https://www.bsidesbos.org/" target="_blank" rel="noreferrer">BsidesBOS</a> conference.</p>
                                <ul>
                                    <li>50+ Challenges</li>
                                    <li>2,000+ Players</li>
                                </ul>
                                <a href="https://www.bsidesbos.org/" target="_blank" rel="noreferrer"><img src={bsidesbos} alt="BsidesBOS Logo"/></a>
                            </EventCard>

                            <EventCard name="GRIMMCon 0x3 CTF" date="December 30, 2020" link="events/grimmcon">
                                <p>Delivered alongside the <a href="https://www.grimm-co.com/grimmcon-0x3/" target="_blank" rel="noreferrer">GRIMMCon 0x3</a> conference hosted by GRIMM.</p>
                                <ul>
                                    <li>30+ Challenges</li>
                                    <li>1,000+ Players</li>
                                </ul>
                                <a href="https://www.grimm-co.com/grimmcon-0x3/" target="_blank" rel="noreferrer"><img src={grimmcon} alt="NahamCon Logo"/></a>
                            </EventCard>
                            
                        </Col>

                    </Row>
                </Section>
            </SectionPanel>
        </Styles>
    </React.Fragment>
)

const Styles = styled.div`
    .resume-title {
        font-size: 26px;
        font-weight: 700;
        margin-top: 20px;
        margin-bottom: 20px;
        color: #fff;
    }
    ul {
        padding-left: 20px;
    }
    ul li {
        padding-bottom: 10px;
    }
    img {
        width: 90px;
        margin: -100px 0 0 40px;
        position: relative;
        bottom: 0px;
        z-index: 2;
        padding-top: 20px;
        float: right;
    }
`