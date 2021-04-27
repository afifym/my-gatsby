import React from "react"
import ProjectItem from "./ProjectItem"
import kanbanImage from "../assets/images/kanban.jpg"
import kanbanIcon from "../assets/icons/kanban.svg"
import rotaImage from "../assets/images/rota.jpg"
import rotaIcon from "../assets/icons/rota.svg"
import starlingImage from "../assets/images/starling.jpg"
import starlingIcon from "../assets/icons/starling.svg"
import merchImage from "../assets/images/merch.jpg"
import merchIcon from "../assets/icons/merch.svg"
import wordImage from "../assets/images/word.jpg"
import wordIcon from "../assets/icons/word.svg"
import intellicImage from "../assets/images/intellic.jpg"
import intellicIcon from "../assets/icons/intellic.svg"
import healovoImage from "../assets/images/healovo.jpg"
import healovoIcon from "../assets/icons/healovo.svg"

import styled from "styled-components"
import { Container, StyledHeading } from "../styles/sharedStyles"

const projectData = [
  {
    name: "Healovo",
    description:
      "A medical booking website built with React and Firebase, Multi-step formik registeration and more..",
    url: "https://healovo.web.app/",
    image: healovoImage,
    icon: healovoIcon,
    theme: "light",
    cls: "heal",
  },
  {
    name: "Merchmania",
    description:
      "An E-commerce website built with React, Redux styled components, and material-ui. Deployed on Firebase",
    url: "https://merchmania-34b24.web.app/",
    image: merchImage,
    icon: merchIcon,
    theme: "light",
    cls: "merch",
  },

  {
    name: "Kanban Project Board",
    description:
      "A Trello-like PWA with drag and drop functionality, built in Javascript with the MVC design pattern for easier maintenance.",
    url: "https://kanban-task-board.netlify.app/",
    image: kanbanImage,
    icon: kanbanIcon,
    theme: "light",
    cls: "kanban",
  },
  {
    name: "Starling Time Manager",
    description:
      "A time management side-project that is projected to becoming a fully-fledged web and mobile application.",
    url: "https://starling-react.netlify.app/",
    image: starlingImage,
    icon: starlingIcon,
    theme: "dark",
    cls: "starling",
  },

  {
    name: "Rota Pizza",
    description:
      "A responsive front-end website for a pizza restaurant, built with HTML, CSS, and Javascript.",
    url: "https://agitated-lichterman-3c2e9b.netlify.app/",
    image: rotaImage,
    icon: rotaIcon,
    theme: "dark",
    cls: "rota",
  },
  {
    name: "Word Search Game",
    description:
      "A PWA word-search game, runs completely offline and built with pure Javascript",
    url: "https://word-search-game-dark.netlify.app/",
    image: wordImage,
    icon: wordIcon,
    theme: "dark",
    cls: "word",
  },
  {
    name: "Intellic",
    description:
      "A fully-responsive frontend website built with Bootstrap, Sass, and jQuery. features an accordion and a dynamic navigation bar.",
    url: "https://intellici.netlify.app/",
    image: intellicImage,
    icon: intellicIcon,
    theme: "light",
    cls: "intellic",
  },
]

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3em 0;
`
const StyledContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.dark1};
`

const ProjectList = () => {
  return (
    <StyledContainer className="main" id="projects">
      <StyledHeading style={{ color: "white" }}>projects</StyledHeading>
      <Wrapper>
        {projectData?.map((item, i) => (
          <ProjectItem key={i} data={item} />
        ))}
      </Wrapper>
    </StyledContainer>
  )
}

export default ProjectList
