import React from "react"
import { SectionPanel } from "../components/SectionPanel"
import { Section } from "../components/Section"
import { SectionTitle } from "../components/SectionTitle"
import { SectionSubtitle } from "../components/SectionSubtitle"
import { GameTypeCard } from "../components/services/GameTypeCard"
import { Row } from "react-bootstrap"
import {
  BiTable,
  BiVerticalCenter,
  BiTerminal,
  BiCrown,
  BiUser,
  BiFlag,
} from "react-icons/bi"

export const Services = () => (
  <React.Fragment>
    <SectionPanel>
      <Section>
        <SectionTitle>Services</SectionTitle>
        <SectionSubtitle>
          Get the right CTF for you and your team
        </SectionSubtitle>
        <Row className="mt-n4">
          <GameTypeCard
            title="Attack & Defense"
            icon={BiTable}
            color="#ffbe0b"
            hovercolor="#ffdd80"
            link="#attackanddefense"
          >
            Want a red vs. blue competition? Attack and Defense is the way to
            go!
          </GameTypeCard>
          <GameTypeCard
            title="Jeopardy"
            icon={BiVerticalCenter}
            color="#df2229"
            hovercolor="#dc3545"
            link="#jeopardy"
          >
            Looking for a classic Jeopardy-style CTF? It's our bread and butter.
          </GameTypeCard>
          <GameTypeCard
            title="Boot 2 Root"
            icon={BiTerminal}
            color="#fb5607"
            hovercolor="#fba780"
            link="#boot2root"
          >
            Need a boot2root box to pwn? Look no further.
          </GameTypeCard>
          <GameTypeCard
            title="King Of The Hill"
            icon={BiCrown}
            color="#ff006e"
            hovercolor="#ff80b7"
            link="#kingofthehill"
          >
            Are you a fan of KOTH? We can build that for you.
          </GameTypeCard>
          <GameTypeCard
            title="Live Training"
            icon={BiUser}
            color="#8338ec"
            hovercolor="#b792ec"
            link="#livetraining"
          >
            We can provide custom interactive training sessions to improve your
            skills.
          </GameTypeCard>
          <GameTypeCard
            title="Challenge Development"
            icon={BiFlag}
            color="#3a86ff"
            hovercolor="#9bc1ff"
            link="#challengedev"
          >
            You need some challenges for your own CTF? We will be happy to build
            them for you.
          </GameTypeCard>
        </Row>
      </Section>
    </SectionPanel>
  </React.Fragment>
)
