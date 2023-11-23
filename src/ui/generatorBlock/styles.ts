import styled from "styled-components";

export const GeneratorBlockStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 900px;
  height: 650px;
  border-radius: 15px;
  background: ${({ theme }) => theme.block};
  overflow: hidden;
  display: flex;
  align-items: center;
  backdrop-filter: blur(1000px);

  & > .theme-toggle {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10;
  }

  @media (max-width: 767px) {
    width: 90%;
    height: 90%;
  }
`;

export const NewPasswordWrapper = styled.div<{
  strengthColor: string;
  passwordLength: number;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  overflow: hidden;
  /* background: ${({ strengthColor }) => strengthColor}; */
  position: relative;
  transition: 1s background;
`;

export const PasswordStyled = styled.div<{
  $strengthColor: string;
  passwordLength: number;
  duration: number;
}>`
  font-weight: bold;
  position: relative;
  padding: 10px;
  cursor: copy;
  border-radius: 10px;
  color: ${({ $strengthColor, theme }) => theme[$strengthColor]};
  transition: 0.2s transform, ${({ duration }) => duration / 1000}s font-size,
    1s color;
  /* filter: brightness(0.5); */
  white-space: nowrap;
  font-size: ${({ passwordLength }) => `${2.5 - passwordLength / 42}rem`};

  &:active {
    transform: translateY(10px);
  }

  &.animating {
    animation: disappear ${({ duration }) => duration / 1000}s forwards;

    @keyframes disappear {
      0% {
        opacity: 1;
        transform: translateY(0px);
      }
      100% {
        opacity: 0;
        transform: translateY(-50px);
      }
    }
  }
`;

export const NewPasswordContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Blocks = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NewPasswordAnimationLayer = styled(PasswordStyled)`
  position: absolute;
  animation: none;
  background: ${({ theme }) => theme.block};

  &.animating {
    animation: appear ${({ duration }) => duration / 1000}s forwards;

    @keyframes appear {
      0% {
        opacity: 0;
        transform: translateY(30px) scale(0.7);
      }
      100% {
        opacity: 1;
        transform: translateY(-22px) scale(1);
      }
    }
  }
`;

export const ToggleIcon = styled.div`
  width: 20px;
  height: 20px;
  font-weight: bold;
  color: grey;
`;
