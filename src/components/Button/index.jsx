import { Container } from './styles'

export function Button({ icon: Icon, title, value, isbiggerfont, isclear, isdark, noIcon, ...rest }) {
  return (
    <Container isbiggerfont={isbiggerfont} isclear={isclear} className={isdark ? "dark" : ""} noIcon={noIcon} {...rest}>
      {Icon && <Icon />}
      <p>
        {title} {value && `∙ R$${value}`}
      </p>
    </Container>
  )
}
