import { styled } from "styled-components";

export const Container = styled.div`
  width: 21rem;
  height: 29.2rem;
  padding: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border-radius: 0.8rem;

  cursor: pointer;

  position: relative;

  transition: 0.3s;

  &:hover{
    background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    width: 30.4rem;
    height: 46.2rem;
  }
`;

export const IconButton = styled.a`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;

  > svg {
    font-size: 2.4rem;

    &:hover {
      color: ${({ theme }) => theme.COLORS.LIGHT_300}
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  width: 100%;
  height: 100%;

  text-align: center;

  > img {
    width: 8.8rem;
    height: 8.8rem;
    border-radius: 99rem;
  }

  > h3 {
    width: 16.2rem;
    font-size: 1.4rem;
    font-weight: 500;
  }

  > p {
    display: none;
  }

  > span {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};

    color: ${({ theme }) => theme.COLORS.CAKE_GREEN};
  }

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    gap: 1.5rem; 

    > img {
      width: 17.6rem;
      height: 17.6rem;
    }

    > h3 {
      width: 25.6rem;
      font-size: 2.4rem;
      font-weight: 700;
    }

    > p {
      display: block;

      font-family: ${({ theme }) => theme.FONTS.ROBOTO};
      font-size: 1.4rem;
      line-height: 2.24rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > span {
      font-size: 3.2rem;
    }
  }
`;

export const Buttons = styled.div`
  width: 18.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    flex-direction: row;
  }
`;
