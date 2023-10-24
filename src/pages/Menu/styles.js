import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;

  overflow-x: hidden;

  grid-template-areas: 
    "header"
    "content"
    "footer"
  ;
`;

export const Content = styled.div`
  grid-area: content;
  margin: 3.6rem 2.8rem 1.3rem;
  
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;

export const List = styled.div`
  width: 45rem;

  margin-inline: auto;

  display: flex;
  gap: 2rem;
  overflow-x: auto;
`;
