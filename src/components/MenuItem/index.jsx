import { Container } from "./styles";

export function MenuItem({ title, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{title}</h2>
    </Container>
  )
}