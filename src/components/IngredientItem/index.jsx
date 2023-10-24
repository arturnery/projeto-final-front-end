import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles";

export function IngredientItem({ isNew, value, onClick, inputWidth, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} inputWidth={inputWidth} readOnly={!isNew} {...rest} />
      
      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}