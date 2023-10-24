import { styled } from "styled-components";

export const Container = styled.span`
  font-size: 1.4rem;
  font-weight: 500;

  text-align: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};

  padding: .4rem .8rem;

  border-radius: .5rem;

`;