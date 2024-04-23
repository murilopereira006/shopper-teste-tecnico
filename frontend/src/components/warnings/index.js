
import { Tooltip } from 'react-tooltip'
import { Container, Row, Text } from './styles'

export default function Warnings({ array }) {
  if (!array) {
    return (
      <h1>Loading</h1>
    )
  } else {
    return (
      <Container>
        {array.map((item, index) => (
          <>
            {(parseFloat(item.cost_price) > parseFloat(item.sales_price)) && <Tooltip id="tip" />}
            <Row key={index} disclaimer={(parseFloat(item.cost_price) < parseFloat(item.sales_price))} data-tooltip-id="tip" data-tooltip-content="Preço de compra não pode ser menor que preço de venda." >
              <Text><span>code: </span>{item.code}</Text>
              <Text><span>name: </span>{item.name}</Text>
              <Text><span>cost price: </span>{item.cost_price}</Text>
              <Text><span>sales price: </span>{item.sales_price}</Text>
            </Row>
          </>
        ))}
      </Container>
    )
  }
}
