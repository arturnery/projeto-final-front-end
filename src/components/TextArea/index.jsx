import { Container } from "./styles";

export function TextArea({ content, ...rest }){
  return (
    <Container {...rest}>
      {content}
    </Container>
  )
}