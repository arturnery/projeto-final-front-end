import { Container, InputBox } from "./styles"

export function Input({ icon: Icon, id, isNumber, labelContent, isdark, lesspace, border, iconSpace, onSearch, ...rest }) {
  return (
    <Container lesspace={lesspace}>
      {labelContent && <label htmlFor={id} >{labelContent}</label>}
      <InputBox isNumber={isNumber} isdark={isdark} border={border} onChange={e => onSearch(e.target.value)} className={iconSpace && "icon-space"} >
        {Icon && <Icon />}
        {isNumber && "R$"}<input id={id} {...rest} />
      </InputBox>
    </Container>
  )
} 