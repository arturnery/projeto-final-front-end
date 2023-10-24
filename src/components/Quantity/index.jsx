import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

import { Container, Button, QuantityNumber } from './styles'

export function Quantity({ number, isDetails }) {
  return (
    <Container>
      <Button>
        < AiOutlineMinus />
      </Button>
      <QuantityNumber isDetails={isDetails}>{number}</QuantityNumber>
      <Button>
        < AiOutlinePlus />
      </Button>
    </Container>
  )
}
