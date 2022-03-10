import React from "react"
import { SectionPanel } from "../components/SectionPanel"
import { SectionTitle } from "../components/SectionTitle"
import { Section } from "../components/Section"
import { Row, Col } from "react-bootstrap"
import styled from "styled-components"

const Styles = styled.div`
  background-color: #dc3545;
  padding: 30px;
  font-size: 1.2rem;
`

export const RequestCTF = () => (
  <React.Fragment>
    <SectionPanel>
      <Section>
        <SectionTitle>Request a CTF</SectionTitle>
        <Row className="justify-content-md-center">
          <Col md={5}>
            <Styles>
              The <strong>JustHacking</strong> team is currently preparing 
              for other <b><u>Capture the Flag</u></b> events and is unable to take more requests at this time. Check back soon and we should have some more availability!
            </Styles>
          </Col>
        </Row>
      </Section>
    </SectionPanel>
  </React.Fragment>
)
