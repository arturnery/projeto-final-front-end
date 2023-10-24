import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "trasparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
  font-family: ${({ theme }) => theme.FONTS.ROBOTO};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  font-size: 1.6rem;

  border-radius: .8rem;
  padding: .8rem 1.6rem;

  > button {
    border: none;
    background: none;
    height: fit-content;

    svg {
      display: flex;
      color: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    }
  }

  > input {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    width: ${(props) => props.inputWidth}rem;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;