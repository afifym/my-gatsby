import React from "react"
import styled from "styled-components"
import mePhoto from "../assets/images/me-1000.webp"
import { StyledButton, Container, StyledHeading } from "../styles/sharedStyles"
import { FiLinkedin, FiGithub } from "react-icons/fi"
// FiCodepen

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;

  width: 90%;
  padding: 4em 0;
  margin: 0 auto;
  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.main1};
    width: 40%;
    text-align: right;
  }

  .img-container {
    width: 350px;
  }

  article {
    width: 500px;
    color: ${({ theme }) => theme.colors.dark2};

    p {
      margin: 1em 0;
      font-size: 1.2rem;
      line-height: 1.8;
    }

    div {
      display: flex;
      align-items: center;
      width: 50%;
      justify-content: space-between;

      svg {
        color: ${({ theme }) => theme.colors.main1};
        transition: all 0.2s ease;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .img-container {
      width: 300px;
    }

    article {
      width: 100%;

      p {
        width: 100%;
      }

      div {
        width: 70%;
      }
    }
  }
`

const About = () => {
  const handleLink = (e, link) => {
    e.preventDefault()
    window.open(link)
  }

  return (
    <Container className="main" id="about">
      <StyledHeading>About Me</StyledHeading>
      <Wrapper>
        <div className="img-container">
          <img src={mePhoto} alt="Mohamed Afify" />
        </div>
        <article>
          <p>
            I always think of building web pages as making a Powerpoint
            presentation, they are both mediums used to effectively tell a story
            or deliver a message except that web pages directly interact with
            the audience and their actions and removes the need for a presenter,
            this idea among many others are fascinating to me and I'm in love
            with the concept and obsessed with the details.
          </p>
          <div>
            <StyledButton
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/12CyLCmR8qO1g3pTxp9DJZI7FtSS7MEQg?usp=sharing"
                )
              }
            >
              Resume
            </StyledButton>
            <a
              href="#linkedin"
              onClick={e =>
                handleLink(e, "https://www.linkedin.com/in/afifym/")
              }
            >
              <FiLinkedin size={25} />
            </a>
            <a
              href="#github"
              onClick={e => handleLink(e, "https://github.com/afifym")}
            >
              <FiGithub size={25} />
            </a>
          </div>
        </article>
      </Wrapper>
    </Container>
  )
}

export default About
