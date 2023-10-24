import { styled } from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  padding-block: 1.2rem;
  border-radius: .3rem;

  width: 100%;

  border: none;
  background: ${({ theme, isclear }) => isclear ? theme.COLORS.TOMATO_400 : theme.COLORS.TOMATO_100};
 
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > svg {
    font-size: 2rem;
  }

  > p {
    font-size: ${({ isbiggerfont }) => (isbiggerfont ? "1.4rem" : ".94rem")};
    font-weight: 500;
  }

  &:hover {
    color: ${({ theme }) => theme.COLORS.TOMATO_100};
    background: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  &.dark {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    padding: 1.2rem 3.2rem;

    > svg {
      ${({ noIcon }) => noIcon ? "display: none;": ""} 
      font-size: 3.2rem;
    }

    > p {
      font-size: 1.4rem;
    }

  }
`;