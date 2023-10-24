import { AiOutlineLeft } from "react-icons/ai"
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

export function BackButton({ issmall, ...rest }) {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <Container issmall={issmall} onClick={handleGoBack} {...rest}>
      <AiOutlineLeft />
      <p>
        voltar
      </p>
    </Container>
  )
}