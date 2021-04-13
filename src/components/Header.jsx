import React from "react"
import styled from "styled-components"
import vid from "../assets/wavy-blur.mp4"
import { StyledButton } from "../styles/sharedStyles"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
  color: white;
  overflow: hidden;
  background-color: #0f1315;

  div {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #111;
    width: 100%;
    height: 100%;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  article {
    position: relative;
    z-index: 5;
    margin: 0 1em;

    h3 {
      font-size: 1.3rem;
    }
    h1 {
      font-size: 3rem;
      .title {
        display: block;
        font-size: 2rem;
      }
    }

    button {
      margin-top: 2em;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    article {
      h3 {
        font-size: 1rem;
      }
      h1 {
        font-size: 2.7rem;

        .title {
          display: block;
          font-size: 1.4rem;
        }
      }

      button {
        padding: 1em 2em;
        margin: 0 auto;
        margin-top: 2em;
      }
    }
  }
`
const HeaderStyledButton = styled(StyledButton)`
  border-radius: 25px;
  background: ${({ theme }) => theme.gradients.gradient1};
  color: white;
  font-size: 1rem;
`

const Header = () => {
  return (
    <Wrapper>
      <div>
        <video src={vid} autoPlay loop muted></video>
      </div>
      <article>
        <h3>Hello</h3>
        <h1>
          I'm <span className="name">Mohamed</span>
          <span className="title">A Frontend Developer/Designer</span>
        </h1>
        <HeaderStyledButton
          onClick={() =>
            window.open("https://calendly.com/mohamedafify/30min?month=2021-04")
          }
        >
          Book a Meeting
        </HeaderStyledButton>
      </article>
    </Wrapper>
  )
}

export default Header
