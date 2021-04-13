import React from "react"
import styled, { css } from "styled-components"

const Wrapper = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  width: 700px;
  height: 350px;

  margin: 1em;
  padding: 2em 2em;

  text-align: left;
  border-radius: 25px;
  transition: all 0.1s linear;

  position: relative;
  z-index: 1;

  overflow: hidden;

  &:hover {
    box-shadow: 0px 0px 24px -4px rgba(0, 0, 0, 0.43);

    transform: scale(1.02);
  }

  article {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    position: relative;
    z-index: 3;

    color: #343949;

    .text-wrapper {
      margin: 1em 0;
    }
    img {
      width: 70px;
    }
    h2 {
      font-size: 2rem;
      margin: 0.2em 0;
    }

    p {
      font-size: 1rem;
      width: 60%;
      font-weight: 500;
      opacity: 0.8;
    }
  }

  button {
    position: relative;
    z-index: 3;
    padding: 0.8em 1.6em;
    width: 150px;
    border: 1px solid ${({ theme }) => theme.colors.dark1};
    color: ${({ theme }) => theme.colors.dark1};
    border-radius: 25px;

    font-weight: 500;

    transition: all 0.1s linear;
    opacity: 0.8;
    &:hover {
      background-color: ${({ theme }) => theme.colors.dark1};
      color: ${({ theme }) => theme.colors.light1};
    }
  }

  &.dark {
    article {
      color: ${({ theme }) => theme.colors.light1};
    }

    button {
      border-color: ${({ theme }) => theme.colors.light1};
      color: ${({ theme }) => theme.colors.light1};
      font-weight: 600;
      &:hover {
        background-color: ${({ theme }) => theme.colors.light1};
        color: ${({ theme }) => theme.colors.dark1};
      }
    }
  }

  .bg {
    pointer-events: none;
    position: absolute;
    width: 50%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    top: 20px;
    right: -10px;
    z-index: 2;
  }

  ${({ cls }) => {
    if (cls === "kanban") {
      return css`
        background-color: #eef3f9;

        .bg {
          background-size: 320px;
          right: -40px;
        }
      `
    } else if (cls === "merch") {
      return css`
        background-color: rgb(229, 229, 229);

        .bg {
          background-size: 320px;
          top: 10px;
          right: -35px;
        }
      `
    } else if (cls === "starling") {
      return css`
        background-color: #445357;

        .bg {
          background-size: 350px;
          top: 10px;
          right: -20px;
        }
      `
    } else if (cls === "rota") {
      return css`
        background-color: #2f333e;

        .bg {
          background-size: 320px;

          top: 15px;
        }
      `
    } else if (cls === "word") {
      return css`
        background-color: #303439;

        .bg {
          background-size: 300px;
          right: -40px;
          top: 30px;
        }
      `
    } else if (cls === "intellic") {
      return css`
        background-color: white;

        .bg {
          background-size: 250px;
          right: -70px;
          top: 35px;
        }
      `
    }
  }}

  @media (max-width: 763px) {
    height: auto;

    article {
      p {
        width: 100%;
      }

      h2 {
        font-size: 1.7rem;
        margin: 0.2em 0;
      }
    }

    .bg {
      opacity: 0.5;
    }
  }
`

const ProjectItem = ({ data }) => {
  const handleWebsite = e => {
    e.stopPropagation()
    window.open(data.url)
  }

  return (
    <>
      {data.name && (
        <Wrapper
          cls={data.cls}
          itemTheme={data.theme}
          className={`${data.theme === "light" ? "light" : "dark"}`}
          onClick={handleWebsite}
        >
          <div
            className="bg"
            style={{
              backgroundImage: `url(${data.image})`,
            }}
          ></div>
          <article className="">
            <div>
              <img src={data.icon} alt={data.name} />
            </div>
            <div className="text-wrapper">
              <h2>{data.name}</h2>
              <p>{data.description}</p>
            </div>
            <button onClick={handleWebsite}>View Website</button>
          </article>
        </Wrapper>
      )}
    </>
  )
}

export default ProjectItem
