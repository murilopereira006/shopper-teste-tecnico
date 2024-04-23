import { useEffect, useState } from 'react';
import { getProducts } from '../../api/products'

export default function ProductsPage() {
  const [arrayOfProducts, setArrayOfProducts] = useState(null)

  useEffect(() => {
    return async () => {
      let test = await getProducts()
      setArrayOfProducts(test)
    };
  }, [])


  if (!arrayOfProducts) return <h4>Carregando ...</h4>
  return (
    arrayOfProducts.map((product, index) => {
      return <h4 key={index}>{product.name}</h4>
    })
  )
}
