import { styled } from "styled-components";

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
`;

export const HomeMessage = styled.section`
  margin: 1.5rem 1.6rem 0 .6rem;
  display: flex;
  align-items: center;

  position: relative;

  animation: downToTop 1.5s;

  &::after {
    content: "";
    width: 37.6rem;
    height: 10rem;

    margin: 2.3rem 0 0 3rem;

    border-radius: .2rem;
    background: ${({ theme }) => theme.COLORS.GRADIENT_200};

    position: absolute;
    z-index: -1;
  }

  img {
    width: 19.1rem;
  }

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

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    margin: 3.2rem 12.4rem 0 7rem;

    &::after {
      width: 112rem;
      height: 26.5rem;

      margin: 14.5rem 0 0 5rem;
    }

    img {
      width: 63.2rem;
    }
  }
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  transform: translateX(-1rem);
  margin-top: 3.6rem;
  
  h1 {
    font-size: 1.8rem;
    font-weight: 600;
  }

  p {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.68rem;
    width: 30rem;
  }

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    transform: translateX(1rem);
    margin-top: 11rem;
    
    h1 {
      margin-bottom: .8rem;
      font-size: 4rem;
      font-weight: 500;
    }
    p {
      font-size: 1.6rem;
      width: 100%;
    }
  }
`;

export const Sections = styled.div`
  margin-top: 6.2rem;
  margin-left: 2.4rem;

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

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    width: 112.2rem;
    margin-inline: auto;
  }

`;

export const Cards = styled.div`
  display: flex;
  gap: 1.6rem;

  width: 40.4rem;
  overflow-x: auto;

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    width: 112rem;
  }
`;

export const Scroll = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`;