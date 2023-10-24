import { PiPencilSimpleBold } from "react-icons/pi";

import { useNavigate } from "react-router-dom";

import { Container, Buttons, IconButton, Content } from "./styles";

import { Quantity } from "../Quantity";
import { Button } from "../Button";

import hearth from "../../assets/icons/hearth.svg";

export function CardData({ image, name, description, price, isbiggerfont, buttons, dishId, ...rest }) {

  const navigate = useNavigate();

  function handleToEdit (dishId) {
    navigate(`/update/${dishId}`)
  }

  return(
    <Container>
      <IconButton>
        {buttons ? <img src={hearth} alt="" /> : <PiPencilSimpleBold onClick={() => handleToEdit(dishId)}/>}
      </IconButton>

      <Content {...rest}>
        <img src={image} alt="" />
        <h3>{name} &gt;</h3>
        <p>{description}</p>
        <span>R$ {price}</span>
        {buttons && 
          <Buttons>
            <Quantity number="01" />
            <Button title="incluir" isbiggerfont />
          </Buttons>
        }
      </Content>
      
    </Container>
  )
}