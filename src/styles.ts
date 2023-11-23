import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.background};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  /* .water {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 1s transform;
    z-index: 0;
  }

  .water::before {
    content: "";
    width: 200%;
    height: 200%;
    background-color: ${({ theme }) => theme.theme};
    position: absolute;
    top: -150%;
    left: -50%;
    border-radius: 40%;
    animation: anim 12s linear infinite;
  }

  .water::after {
    content: "";
    width: 204%;
    height: 204%;
    background-color: #ececec80;
    position: absolute;
    top: -150%;
    left: -52%;
    border-radius: 40%;
    animation: anim 12s linear infinite;
    animation-delay: 0.5s;
  }

  @keyframes anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } */
`;
