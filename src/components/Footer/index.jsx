import { Container, DarkLogo, Copyright, Text } from "./styles";
import grayDiamond from "../../assets/icons/graydiamond.svg";

export function Footer() {
  return (
    <Container>
      <DarkLogo>
        <img src={grayDiamond} alt="" />
        <Text>
          food explorer
        </Text>
      </DarkLogo>

      <Copyright>
        &copy; 2023 - Todos os direitos reservados.
      </Copyright>
    </Container>
  )
}