import styled from "styled-components"

export const StyledButton = styled.button`
  padding: 0.8em 3em;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.main1};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.main1};
  border-radius: 20px;
  transition: all 0.4s;
  font-weight: 600;

  &:hover {
    background: ${({ theme }) => theme.colors.main1};
    color: ${({ theme }) => theme.colors.light1};
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
`

export const Container = styled.section`
  padding: 5em 0;
  margin: 0 auto;
`

export const StyledHeading = styled.h2`
  margin: 0 auto;
  width: fit-content;
  font-size: 35px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.dark1};
  padding: 0.5em 1em;

  background-image: linear-gradient(134.14deg, #4a90e2 13.7%, #4adede 87.44%);
  background-repeat: no-repeat;
  background-size: 100% 20%;
  background-position: 0 45px;
  /* -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */

  /* &:after {
    content: "";
    display: block;
    width: 100px;
    border-bottom: 4px solid ${({ theme }) => theme.colors.dark1};
  } */
`
