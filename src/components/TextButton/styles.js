import { styled } from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  justify-content: center;

  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;
  font-weight: 500;
`;