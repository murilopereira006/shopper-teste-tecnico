import { useState } from 'react';
import SideBar from './components/sideBar';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';

function App() {
  const [selectedItem, setSelectedItem] = useState('Home')

  return (
    <>
      <SideBar
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />

      {selectedItem === 'Home' ? <HomePage /> : null}

      {selectedItem === 'Products' ? <ProductsPage /> : null}
    </>
  );
}

export default App;
