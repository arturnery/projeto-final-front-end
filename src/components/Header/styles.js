import { styled } from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 11.4rem;

  display: flex;
  justify-content: ${({ isopened }) => (isopened ? "" : "space-between")};
  align-items: center;
  ${({ isopened }) => (isopened ? "gap: 1.6rem;" : "")}  

  padding: 5.6rem 2.8rem 2.4rem;

  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  font-weight: bold;
  font-size: 2.1rem;

  background: ${({ theme }) => theme.COLORS.DARK_700};

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-family: ${({ theme }) => theme.FONTS.ROBOT};
    font-size: 2.1rem;
    font-weight: 400;
  }

  > div:nth-child(3) {
    display: none;
  }

  > a svg {
    display: none;
  }
  
  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {

    padding-inline: 12.3rem;
    gap: 3.2rem;

    > div:nth-child(2) {
      width: 28rem;
    }

    > div:nth-child(3) {
      display: flex;
    }

    > button:nth-child(2) {
      width: 27.4rem;
    }

    > a svg {
      font-size: 2.8rem;
      display: inline;
    }
  }
`;

export const Menu = styled.button`
  border: none;
  background: none;
  
  svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: ${({ isopened }) => (isopened ? "1.8rem" : "3.0rem")};

    ${({ isopened }) => (isopened ? "height: 1.8rem;" : "")}
  }

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    display: none;
  }
`;

export const Requests = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.0rem;
  }

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    display: none;
  }
`;

export const ButtonBox = styled.div`
  display: none;
  width: 34.6rem;
  
  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    display: block;
  }
`;
