import { styled } from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  height: 7.7rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: ${({ theme }) => theme.FONTS.ROBOTO};

  padding-inline: 2.7rem;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    padding-inline: 12.3rem;
  }
`;

export const DarkLogo = styled.div`
  display: flex;
  gap: .6rem;

  > img {
    width: 2rem;
  }

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    gap: 1rem;

    > img {
      width: 3rem;
    }
  }
`;

export const Text = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.LIGHT_700};

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    font-size: 2.4rem;
  }
`;

export const Copyright = styled.p`
  font-family: ${({ theme }) => theme.FONTS.DM_SANS};
  font-size: 1.2rem;
  text-align: right;

  @media (${({ theme }) => theme.MEDIA.DESKTOP}) {
    font-size: 1.4rem;
  }
`;
