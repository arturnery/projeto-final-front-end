import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto;

  grid-template-areas: 
    "header"
    "content"
  ;
`;

export const Content = styled.div`
  grid-area: content;

  padding: 1.6rem 5.6rem 3.3rem;

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    padding: 2.4rem 12.1rem 7rem;
  }
`;

export const Main = styled.div`
  text-align: center;

  > img {
    width: 26rem;
    margin-block: 1.6rem;
    border-radius: 99rem;
  }

  h1 {
    font-size: 2.7rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    display: flex;
    align-items: center;
    gap: 5rem;

    text-align: left;

    margin-top: 4.2rem;

    > img {
      width: 39rem;
    }

    h1 {
      font-size: 4rem;
    }
  }
`;

export const Desktop = styled.div `
  > p {
    font-size: 1.6rem;
    margin-block: 2.4rem;
  }

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    > p {
      font-size: 2.4rem;
    } 
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;

  margin-top: 4.8rem;

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    align-items: center;
    gap: 3.5rem;

    width: 31.8rem;
  }
`;

export const Tags = styled.div`
  padding-inline: 2.4rem;

  display: flex;
  gap: 2.4rem;
  flex-wrap: wrap;

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    padding-inline: 0;
  }
`;

export const Scroll = styled.div`
  overflow-y: auto;

  animation: downToTop 1.5s;

  @keyframes downToTop {
    0% {
      opacity: 0;
      transform: translateY(15px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;