import { styled } from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;
  padding: 1.4rem;

  border: none;
  border-radius: .8rem;

  font-family: ${({ theme }) => theme.FONTS.ROBOTO};
  font-size: 1.6rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background: ${({ theme }) => theme.COLORS.DARK_800};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;