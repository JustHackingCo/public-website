import React from "react"
import Typewriter from "typewriter-effect"
import styled from "styled-components"

const Styles = styled.div`
  font-family: monospace;
  font-size: 35px;
  color: #df2229;

  .box {
    padding: 50px 30px;
    background: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
  }

  .Typewriter {
    width: 100%;
  }

  .Typewriter__cursor {
    font-size: 32px;
    vertical-align: top;
  }
`

export const NotFound = () => (
  <React.Fragment>
    <Styles>
      <div className="box">
        <Typewriter
          options={{
            delay: 200,
            cursor: "&#9610;",
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(500)
              .typeString("<strong>404</strong>, page not found.")
              .start()
          }}
        />
      </div>
    </Styles>
  </React.Fragment>
)
