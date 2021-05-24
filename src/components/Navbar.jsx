import React from "react"
import styled from "styled-components"
import mLogo from "../assets/icons/m.svg"
import { StyledButton } from "../styles/sharedStyles"

const Wrapper = styled.nav`
  position: absolute;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
  margin: 2em auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;

  .logo {
    width: 70px;

    svg {
      width: 100%;
      height: auto;
    }
  }

  div {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      align-items: center;
    }
    a {
      padding: 0 1em;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.light1};

      transition: all 0.2s ease;

      span {
        color: ${({ theme }) => theme.colors.main1};
      }
      &:hover {
        color: ${({ theme }) => theme.colors.main1};
      }
    }

    button {
      margin-left: 2em;
      background-color: ${({ theme }) => theme.colors.light1};
      color: ${({ theme }) => theme.colors.main1};
      border: none;
    }
  }

  @media (max-width: 768px) {
    div ul {
      display: none;
    }
  }
`

function ease(t, b, c, d) {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t + b
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}

const Navbar = () => {
  function linkClick(e, duration = 1000) {
    e.preventDefault()

    let targetElm = document.querySelector(`#${e.target.dataset.link}`)
    let startPosition = window.pageYOffset
    let targetPosition = targetElm.getBoundingClientRect().top // distance from target to window top
    let startTime = null

    function scrollAnimation(currentTime) {
      if (startTime === null) startTime = currentTime

      let timeElapsed = currentTime - startTime
      let scrollAmount = ease(
        timeElapsed,
        startPosition,
        targetPosition,
        duration
      )

      window.scrollTo(0, scrollAmount)

      if (timeElapsed < duration) requestAnimationFrame(scrollAnimation)
    }

    if (Math.abs(targetPosition) > 30) requestAnimationFrame(scrollAnimation)
  }

  return (
    <Wrapper>
      <a href="/#" className="logo">
        <img src={mLogo} alt="mohamed" />
      </a>
      <div>
        <ul>
          <li>
            <a
              href="#about"
              data-link="about"
              onClick={e => linkClick(e, 1000)}
            >
              <span>01.</span> About Me
            </a>
          </li>

          <li>
            <a
              href="#projects"
              data-link="projects"
              onClick={e => linkClick(e, 1000)}
            >
              <span>02.</span> Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              data-link="skills"
              onClick={e => linkClick(e, 1000)}
            >
              <span>03.</span> Skills
            </a>
          </li>
        </ul>
        <StyledButton
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/12CyLCmR8qO1g3pTxp9DJZI7FtSS7MEQg?usp=sharing"
            )
          }
        >
          Resume
        </StyledButton>
      </div>
    </Wrapper>
  )
}

export default Navbar
