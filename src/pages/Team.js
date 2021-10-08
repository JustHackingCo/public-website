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
  RiArrowGoBackFill, RiHardDriveLine, RiTeamLine, RiServerLine } from 'react-icons/ri'
import blacknote from '../assets/pfps/blacknote.png'
import fumenoid from '../assets/pfps/fume.webp'
import john from '../assets/pfps/john.png'
import caleb from '../assets/pfps/caleb.png'
import trev from '../assets/pfps/trev.png'
import congon4tor from "../assets/pfps/congon4tor.png"
import nightwolf from "../assets/pfps/nightwolf.jpg"
import matt from "../assets/pfps/matt.jpeg"

export const Team = () => (
    <React.Fragment>
        <SectionPanel>
            <Section>
                <Introduction>
                    <SectionTitle>About Us.</SectionTitle>
                    <SectionSubtitle>Meet The Team</SectionSubtitle>

                        <Section>
                            <Row>
                                <Col lg={4}>
                                <Image src={john} alt="john's pfp" fluid />
                                </Col>
                                <Col lg={8} className="pt-4 pt-lg-0">
                                <h3 id="john">John Hammond</h3>
                                <p>
                                John Hammond is a cybersecurity researcher, red teamer, and Capture the Flag enthusiast. As part of the Threat Operations team at Huntress, John spends his days analyzing malware and making hackers earn their access. Previously, as a Department of Defense Cyber Training Academy instructor, he taught the Cyber Threat Emulation course, educating both civilian and military members on offensive Python, PowerShell, other scripting languages and the adversarial mindset. He has developed training material and information security challenges for events such as PicoCTF and competitions at DEFCON US. John speaks at security conferences such as BsidesNoVA, to students at colleges such as the US Naval Academy, and other online events including the SANS Holiday Hack Challenge/KringleCon. He is an online YouTube personality showcasing programming tutorials, CTF video walkthroughs and other cyber security content. John currently holds the following certifications: Security+, CEH, LFS, eJPT, eCPPT, PCAP, OSWP, OSCP, OSCE, OSWE, OSEP, and OSED (OSCE(3)).
                                </p>
                                </Col>
                            </Row>
                            <JeopardyCategories>
                            <SectionTitle>John Develops</SectionTitle>
                            <Row>
                            <CategoryBox icon={RiTeamLine} color="#dc3545" link="#test" text="Red Team Operations"></CategoryBox>
                            <CategoryBox icon={RiGlobalLine} color="#5578ff" link="#test" text="Web Security"></CategoryBox>
                            <CategoryBox icon={RiArrowGoBackFill} color="#29cc61" link="#test" text="Reverse Engineering"></CategoryBox>
                            <CategoryBox icon={RiHardDriveLine} color="#b20969" link="#test" text="Host Forensics"></CategoryBox>
                            <CategoryBox icon={RiArchiveLine} color="#47aeff" link="#test" text="Miscellaneous"></CategoryBox>
                            <CategoryBox icon={RiFireLine} color="#ffa76e" link="#test" text="Fundamental"></CategoryBox>
                            <CategoryBox icon={FaNetworkWired} color="#ff5828" link="#test" text="Networking"></CategoryBox>
                            <CategoryBox icon={RiLock2Line} color="#ffbb2c" link="#test" text="Cryptography"></CategoryBox>
                            </Row>
                            </JeopardyCategories>
                        </Section>

                        <Section>
                            <Row>
                                <Col lg={4}>
                                <Image src={caleb} alt="caleb's pfp" fluid />
                                </Col>
                                <Col lg={8} className="pt-4 pt-lg-0">
                                <h3 id="caleb">Caleb Stewart</h3>
                                <p>
                                Caleb Stewart is cybersecurity researcher at Huntress Labs and active open source contributor. At his day job, he performs low-level research and development to improve and expand the Huntress platform as well as malware analysis and reverse engineering for the Threat Operations department. In the past, Caleb was United States Coast Guard officer where he conducted offensive and defensive operations with CGCYBER and USCYBER commands. In his free time, he is the system architect and developer for infrastructure and orchestration of CTF4Hire events, occasional challenge developer and author of <a href="https://github.com/calebstewart/pwncat">pwncat</a>. Caleb currently holds the following certifications: eCPPT, OSWP, OSCP, OSWE, OSEP, OSCE, eCXD, GXPN and CISSP.
                                </p>
                                </Col>
                            </Row>
                            <JeopardyCategories>
                            <SectionTitle>Caleb Develops</SectionTitle>
                            <Row>
                            <CategoryBox icon={RiServerLine} color="#4233ff" link="#test" text="Infrastructure"></CategoryBox>
                            <CategoryBox icon={RiBugLine} color="#e80368" link="#test" text="Binary Exploitation"></CategoryBox>
                            <CategoryBox icon={RiFireLine} color="#ffa76e" link="#test" text="Fundamental"></CategoryBox>
                            </Row>
                            </JeopardyCategories>
                        </Section>

                        <Section>
                            <Row>
                                <Col lg={4}>
                                <Image src={trev} alt="trevor's pfp" fluid />
                                </Col>
                                <Col lg={8} className="pt-4 pt-lg-0">
                                <h3 id="trevor">Trevor Bryant</h3>
                                <p>
                                Trevor Bryant is an information security advisor specializing in Configuration Management, the Risk Management Framework (RMF), and all things under FISMA. Trevor has designed and championed agency CI/CD pipelines, as well as modernized and secured automated provisioning frameworks of critical mission/business systems. He translates Federal policy into technical implementations while also contributing language to those policies. Being involved in both the DevOps and infosec communities, he emphasizes the importance that security practices are usable through cost-effective risk-based actions.
                                </p>
                                </Col>
                            </Row>
                            <JeopardyCategories>
                            <SectionTitle>Trevor Develops</SectionTitle>
                            <Row>
                            <CategoryBox icon={RiEyeOffLine} color="#e361ff" link="#test" text="Steganography"></CategoryBox>
                            <CategoryBox icon={RiArchiveLine} color="#47aeff" link="#test" text="Miscellaneous"></CategoryBox>
                            <CategoryBox icon={FaNetworkWired} color="#ff5828" link="#test" text="Networking"></CategoryBox>
                            <CategoryBox icon={RiFireLine} color="#ffa76e" link="#test" text="Fundamental"></CategoryBox>
                            </Row>
                            </JeopardyCategories>
                        </Section>

                        <Section>
                            <Row>
                                <Col lg={4}>
                                <Image src={congon4tor} alt="congon4tor's pfp" fluid />
                                </Col>
                                <Col lg={8} className="pt-4 pt-lg-0">
                                <h3 id="congon4tor">Ignacio Dominguez</h3>
                                <p>
                                Ignacio Dominguez (Congon4tor) is a cybersecurity engineer and Capture The Flag enthusiast. During his career in different UK tech companies he has developed expertise in cloud security, application security and secure software development and delivery practices. He has developed CTF challenges for multiple security conferences such as Nahamcon, HacktivityCon, Grimmcon or BSides. His challenges aim to replicate real world scenarios mostly related to web security.
                                </p>
                                </Col>
                            </Row>
                            <JeopardyCategories>
                            <SectionTitle>Ignacio Develops</SectionTitle>
                            <Row>
                            <CategoryBox icon={RiGlobalLine} color="#5578ff" link="#test" text="Web Security"></CategoryBox>
                            <CategoryBox icon={RiSmartphoneLine} color="#4233ff" link="#test" text="Mobile Applications"></CategoryBox>
                            <CategoryBox icon={RiHardDriveLine} color="#b20969" link="#test" text="Host Forensics"></CategoryBox>
                            <CategoryBox icon={RiFireLine} color="#ffa76e" link="#test" text="Fundamental"></CategoryBox>
                            <CategoryBox icon={RiArchiveLine} color="#47aeff" link="#test" text="Miscellaneous"></CategoryBox>
                            <CategoryBox icon={RiLock2Line} color="#ffbb2c" link="#test" text="Cryptography"></CategoryBox>
                            <CategoryBox icon={RiBugLine} color="#e80368" link="#test" text="Binary Exploitation"></CategoryBox>
                            </Row>
                            </JeopardyCategories>
                        </Section>

                        <Section>
                            <Row>
                                <Col lg={4}>
                                <Image src={matt} alt="matt's pfp" fluid />
                                </Col>
                                <Col lg={8} className="pt-4 pt-lg-0">
                                <h3 id="matt">Matt</h3>
                                <p>
                                Matt (M_alpha) is a Computer Engineering student at Clemson University and a cybersecurity enthusiast. Apart from doing school work, Matt is also the President of Clemson's cybersecurity club CU Cyber. Matt enjoys doing low-level computer research and security such as: Binary application security, reverse engineering, malware analysis and systems development. Along with low-level security, he is also interested in red teaming and red team operations. Matt currently spends his free time doing software development, CTFs, challenge development and cybersecurity training.
                                </p>
                                </Col>
                            </Row>
                            <JeopardyCategories>
                            <SectionTitle>Matt Develops</SectionTitle>
                            <Row>
                            <CategoryBox icon={RiBugLine} color="#e80368" link="#test" text="Binary Exploitation"></CategoryBox>
                            <CategoryBox icon={RiArchiveLine} color="#47aeff" link="#test" text="Miscellaneous"></CategoryBox>
                            <CategoryBox icon={RiFireLine} color="#ffa76e" link="#test" text="Fundamental"></CategoryBox>
                            <CategoryBox icon={RiSmartphoneLine} color="#4233ff" link="#test" text="Mobile Applications"></CategoryBox>
                            <CategoryBox icon={RiArrowGoBackFill} color="#29cc61" link="#test" text="Reverse Engineering"></CategoryBox>
                            <CategoryBox icon={RiTeamLine} color="#dc3545" link="#test" text="Red Team Operations"></CategoryBox>
                            </Row>
                            </JeopardyCategories>
                        </Section>

                        <Section>
                            <Row>
                                <Col lg={4}>
                                <Image src={blacknote} alt="blacknote's pfp" fluid />
                                </Col>
                                <Col lg={8} className="pt-4 pt-lg-0">
                                <h3 id="blacknote">Blacknote</h3>
                                <p>
                                Ravin, also known as Blacknote in the community, is a cybersecurity researcher and web security enthusiast. He loves playing CTFs, especially Attack & Defence, and enjoys sharing the knowledge he has picked up with others. Blacknote currently holds CEH, OSCP and OSWE certifications in his pocket.
                                </p>
                                </Col>
                            </Row>
                            <JeopardyCategories>
                            <SectionTitle>Blacknote Develops</SectionTitle>
                            <Row>
                            <CategoryBox icon={RiGlobalLine} color="#5578ff" link="#test" text="Web Security"></CategoryBox>
                            <CategoryBox icon={RiTeamLine} color="#dc3545" link="#test" text="Red Team Operations"></CategoryBox>
                            <CategoryBox icon={FaNetworkWired} color="#ff5828" link="#test" text="Networking"></CategoryBox>
                            <CategoryBox icon={RiEyeOffLine} color="#e361ff" link="#test" text="Steganography"></CategoryBox>
                            <CategoryBox icon={RiArchiveLine} color="#47aeff" link="#test" text="Miscellaneous"></CategoryBox>
                            <CategoryBox icon={RiFireLine} color="#ffa76e" link="#test" text="Fundamental"></CategoryBox>
                            <CategoryBox icon={RiOpenSourceLine} color="#11dbcf" link="#test" text="Open Source Intelligence"></CategoryBox>
                            <CategoryBox icon={RiSmartphoneLine} color="#4233ff" link="#test" text="Mobile Applications"></CategoryBox>
                            </Row>
                            </JeopardyCategories>
                        </Section>

                        <Section>
                            <Row>
                                <Col lg={4}>
                                <Image src={nightwolf} alt="nightwolf's pfp" fluid />
                                </Col>
                                <Col lg={8} className="pt-4 pt-lg-0">
                                <h3 id="nightwolf">NightWolf</h3>
                                <p>
                                NightWolf is a cyber security hobbyist who has been playing CTFs and hanging around infosec Discord servers since 2018. In addition to being a member he volunteers on several  servers. Between playing CTFs and writing writeups, he spends spare time studying and writing challenges of his own.
                                </p>
                                </Col>
                            </Row>
                            <JeopardyCategories>
                            <SectionTitle>NightWolf Develops</SectionTitle>
                            <Row>
                            <CategoryBox icon={RiGlobalLine} color="#5578ff" link="#test" text="Web Security"></CategoryBox>
                            <CategoryBox icon={RiTeamLine} color="#dc3545" link="#test" text="Red Team Operations"></CategoryBox>
                            <CategoryBox icon={FaNetworkWired} color="#ff5828" link="#test" text="Networking"></CategoryBox>
                            <CategoryBox icon={RiHardDriveLine} color="#b20969" link="#test" text="Host Forensics"></CategoryBox>
                            <CategoryBox icon={RiArchiveLine} color="#47aeff" link="#test" text="Miscellaneous"></CategoryBox>
                            <CategoryBox icon={RiFireLine} color="#ffa76e" link="#test" text="Fundamental"></CategoryBox>
                            <CategoryBox icon={RiArrowGoBackFill} color="#29cc61" link="#test" text="Reverse Engineering"></CategoryBox>
                            <CategoryBox icon={RiBugLine} color="#e80368" link="#test" text="Binary Exploitation"></CategoryBox>
                            </Row>
                            </JeopardyCategories>
                        </Section>

                        <Section>
                            <Row>
                                <Col lg={4}>
                                <Image src={fumenoid} alt="fumenoid's pfp" fluid />
                                </Col>
                                <Col lg={8} className="pt-4 pt-lg-0">
                                <h3 id="fumenoid">Fumenoid</h3>
                                <p>
                                Harshit (aka. Fumenoid) is a Pentration tester and Cybersecurity Enthusiast. He is currently a student and is pursuing his bachelor's in Computer Science Engineering with Specialization in Cybersecurity and Forensics. As a Cyber Security Intern in BDO India, Fumenoid spends his days doing Network and Web Penetration testing. He is also a Community Moderator in Offensive Security Discord and an Administrator in John Hammond's Discord, where he helps the discord community members and moderates the servers. Fumenoid currently holds the following certifications: OSCP.
                                </p>
                                </Col>
                            </Row>
                            <JeopardyCategories>
                            <SectionTitle>Fumenoid Develops</SectionTitle>
                            <Row>
                            <CategoryBox icon={RiGlobalLine} color="#5578ff" link="#test" text="Web Security"></CategoryBox>
                            <CategoryBox icon={RiTeamLine} color="#dc3545" link="#test" text="Red Team Operations"></CategoryBox>
                            <CategoryBox icon={FaNetworkWired} color="#ff5828" link="#test" text="Networking"></CategoryBox>
                            <CategoryBox icon={RiHardDriveLine} color="#b20969" link="#test" text="Host Forensics"></CategoryBox>
                            <CategoryBox icon={RiArchiveLine} color="#47aeff" link="#test" text="Miscellaneous"></CategoryBox>
                            <CategoryBox icon={RiFireLine} color="#ffa76e" link="#test" text="Fundamental"></CategoryBox>
                            <CategoryBox icon={RiOpenSourceLine} color="#11dbcf" link="#test" text="Open Source Intelligence"></CategoryBox>
                            <CategoryBox icon={RiEyeOffLine} color="#e361ff" link="#test" text="Steganography"></CategoryBox>
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

const JeopardyCategories = styled.div`
    margin: 20px 0 0 0;
`
