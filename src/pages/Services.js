import React from 'react'
import { SectionPanel } from '../components/SectionPanel'
import { Section } from '../components/Section'
import { SectionTitle } from '../components/SectionTitle'
import { SectionSubtitle } from '../components/SectionSubtitle'
import { GameTypeCard } from '../components/services/GameTypeCard'
import { Row } from 'react-bootstrap'
import { BiTable, BiVerticalCenter, BiTerminal, BiCrown, BiUser, BiFlag } from 'react-icons/bi'

export const Services = () => (
    <React.Fragment>
        <SectionPanel>
            <Section>
                <SectionTitle>Services</SectionTitle>
                <SectionSubtitle>Get the right CTF for you and your team</SectionSubtitle>
                <Row className="mt-n4">
                    <GameTypeCard title="Attach & Defense" icon={BiTable} color="#ffbe0b" hovercolor="#ffdd80" link="#attackanddefense">
                        Want a red vs. blue competition? Attack and Defense is the way to go!
                    </GameTypeCard>
                    <GameTypeCard title="Jeopardy" icon={BiVerticalCenter} color="#18d26e" hovercolor="#35e888" link="#jeopardy">
                        Looking for a classic Jeopardy-style CTF? It's our bread and butter.
                    </GameTypeCard>
                    <GameTypeCard title="Boot 2 Root" icon={BiTerminal} color="#fb5607" hovercolor="#fba780" link="#boot2root">
                        Need a boot2root box to pwn? Look no further.
                    </GameTypeCard>
                    <GameTypeCard title="King Of The Hill" icon={BiCrown} color="#ff006e" hovercolor="#ff80b7" link="#kingofthehill">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    </GameTypeCard>
                    <GameTypeCard title="Live Training" icon={BiUser} color="#8338ec" hovercolor="#b792ec" link="#livetraining">
                        Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur
                    </GameTypeCard>
                    <GameTypeCard title="Challenge Development" icon={BiFlag} color="#3a86ff" hovercolor="#9bc1ff" link="#challengedev">
                        Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur
                    </GameTypeCard>
                </Row>
            </Section>
        </SectionPanel>
    </React.Fragment>
)