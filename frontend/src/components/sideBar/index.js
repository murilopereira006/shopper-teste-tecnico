import { Container, Item, UpperList, BottonList } from './styles'

export default function SideBar({ selectedItem, setSelectedItem }) {
  return (
    <Container>
      <UpperList>
        <Item
          selected={selectedItem === 'Home'}
          onClick={() => setSelectedItem('Home')}
        >
          Home
        </Item>
        <Item
          disable={true}
          selected={selectedItem === 'Dashboard'}
        // onClick={() => setSelectedItem('Dashboard')}
        >
          Dashboard
        </Item>
        <Item
          selected={selectedItem === 'Products'}
          onClick={() => setSelectedItem('Products')}
        >
          Products
        </Item>
      </UpperList>
      <BottonList>
        <Item
          disable={true}
          selected={selectedItem === 'Logout'}
        // onClick={() => setSelectedItem('Logout')}
        >
          Logout
        </Item>
      </BottonList>
    </Container>
  );
}
