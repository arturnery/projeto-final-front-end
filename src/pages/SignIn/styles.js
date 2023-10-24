import { styled } from "styled-components";

export const Container = styled.div`
  margin-top: 15.8rem;

  > div:first-child {
    animation: topToDown 1.5s;

    @keyframes topToDown {
      0% {
        opacity: 0;
        transform: translateY(-15px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    margin-block: auto;

    display: flex;
    justify-content: space-around;
    align-items: center;

  }
`;

export const ContentBox = styled.div`
  display: grid;
  row-gap: 3.2rem;

  padding-inline: 5.3rem;
  margin-top: 7.3rem;

  > h2 {
    display: none;

    font-size: 3.2rem;
    font-weight: 500;
  }

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
    width: 67.6rem;
    padding: 6.4rem;

    margin-right: 10.8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1.6rem;

    > h2 {
      display: flex;
      justify-content: center;
    }
  }
`;