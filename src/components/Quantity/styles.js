import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  width: 11.2rem;
  height: 3.6rem;
`;

export const Button = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;

  > svg {
    font-size: 2.7rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const QuantityNumber = styled.p`
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  font-size: ${({ isDetails }) => ( isDetails ? "2.2rem" : "1.6rem")} ;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    font-size: 2.2rem;
  }

`;