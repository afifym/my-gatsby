import React from "react"
import styled from "styled-components"
import { Container, StyledHeading } from "../styles/sharedStyles"

const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  padding: 5em 0;

  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  article {
    box-shadow: 10px 40px 50px rgb(209, 209, 209);

    height: 100%;
    display: flex;
    flex-wrap: wrap;
    border-radius: 25px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.light1};

    position: relative;

    span {
      position: absolute;
      top: 0;
      left: 0;
      height: 60px;
      width: 100%;
      z-index: 1;
      background: linear-gradient(134.14deg, #4a90e2 13.7%, #4adede 87.44%);
    }
  }

  @media (max-width: 1300px) {
    width: 60%;
    article {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 763px) {
    width: 90%;
    article {
      flex-direction: column;
      align-items: center;
    }
  }
`

const SkillItem = styled.div`
  /* background-color: ${({ theme }) => theme.colors.light1}; */
  width: 400px;
  height: 100%;
  padding: 1em 0.5em;
  flex: 1;
  text-align: center;

  h2 {
    /* background-color: ${({ theme }) => theme.colors.main1}; */
    color: ${({ theme }) => theme.colors.light1};
    white-space: nowrap;
    position: relative;
    z-index: 2;
    margin-bottom: 2em;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    margin-bottom: 2em;

    &.middle {
      border-right: 1px solid rgba(30, 39, 51, 0.2);
      border-left: 1px solid rgba(30, 39, 51, 0.2);
    }

    li {
      cursor: pointer;
      padding: 0.5em 1em;
      border-radius: 25px;
      font-size: 1.1rem;
      margin: 0.3em;
      color: ${({ theme }) => theme.colors.dark1};
      border: 1px solid ${({ theme }) => theme.colors.dark1};

      transition: all 0.1s ease;
      &:hover {
        opacity: 0.8;
        color: ${({ theme }) => theme.colors.main1};
        border: 1px solid ${({ theme }) => theme.colors.main1};
      }
    }
  }

  @media (max-width: 1300px) {
    width: 100%;
    &.sel {
      padding: 0;

      h2 {
        width: 100%;
        height: 60px;
        line-height: 60px;
        background: linear-gradient(134.14deg, #4a90e2 13.7%, #4adede 87.44%);
      }
    }
  }
`

const Skills = () => (
  <Container className="main" id="skills">
    <StyledHeading>skills</StyledHeading>

    <Wrapper>
      <article>
        <span></span>
        <SkillItem>
          <h2>Software Engineering</h2>

          <ul>
            <li>Git/GitHub</li>
            <li>Problem Solving</li>
            <li>OOP</li>
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Ubuntu</li>
            <li>Databases</li>
            <li>Design Patterns</li>
            <li>Unit Testing</li>
          </ul>
        </SkillItem>
        <SkillItem className="sel">
          <h2>Frontend Development</h2>

          <ul className="middle">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap 4</li>
            <li>Responsive Design</li>

            <li>Sass</li>
            <li>JavaScript (ES6)</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Context</li>
            <li>Hooks</li>
            <li>React Router</li>
            <li>Redux</li>
            <li>Material-UI</li>
            <li>Chakra-UI</li>
            <li>Styled Components</li>
            <li>TypeScript</li>

            <li>Figma</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
          </ul>
        </SkillItem>
        <SkillItem className="sel">
          <h2>Backend Development</h2>

          <ul>
            <li>Python Flask</li>
            <li>Postgres SQL</li>
            <li>SQLAlchemy</li>
            <li>REST APIs</li>
            <li>Auth0</li>
            <li>Firebase</li>
            <li>Authentication</li>
            <li>Authorization</li>
          </ul>
        </SkillItem>
      </article>
    </Wrapper>
  </Container>
)

export default Skills
