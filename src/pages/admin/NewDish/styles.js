import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto;

  grid-template-areas: 
    "header"
    "form"
  ;

  label {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const SelectImage = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > input {
    display: none;
  }
  
  > label:last-child {
    padding: 1.2rem 3.2rem;
    border-radius: .5rem;
    
    display: flex;
    align-items: center;
    gap: .8rem;
    
    font-weight: 500;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    cursor: pointer;
    > svg {
      font-size: 2.4rem;
    }
  }

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    width: 60rem;

    > label:last-child {
      /* white-space: nowrap; */
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const IngredientsList = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;

  padding: .8rem;
  border-radius: .8rem;

  background: ${({ theme }) => theme.COLORS.DARK_800};

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    width: 83.7rem;
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

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.6rem;
`;

export const ButtonsBox = styled.div`
  display: flex;
  gap: 3.2rem;

  > .dark {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    width: 19rem;

    margin-left: auto;
  }
`;

export const LineOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    flex-direction: row;

    > div:nth-child(3) {
      width: 105.4rem;
    }
  }
`;

export const LineTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    flex-direction: row;
    gap: 3.2rem;
  }
`;