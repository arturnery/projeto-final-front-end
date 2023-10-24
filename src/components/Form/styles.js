import { styled } from "styled-components";

export const Container = styled.form`
  grid-area: form;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin: 1rem 3.2rem 5.3rem;

  > h1 {
    font-weight: 500;
  }

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    margin: 4rem 12.4rem 5.3rem;

  }
`;