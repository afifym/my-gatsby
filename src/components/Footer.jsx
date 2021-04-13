import React from "react"
import { Container } from "../styles/sharedStyles"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.colors.light1};
  span {
    color: red;
    font-size: 1.2rem;
  }

  a {
    padding-top: 0.5em;
    color: ${({ theme }) => theme.colors.main1};
  }
`

const StyledContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.dark1};
  padding: 2em 0;
`

const Footer = () => (
  <StyledContainer>
    <Wrapper>
      <p>
        made with <span>♥</span> by
        <a href="mailto: mohamed.afify323@gmail.com"> Mohamed Afify</a>
      </p>
    </Wrapper>
  </StyledContainer>
)

export default Footer
