import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Container, IndividualUpdate, LabelSyles } from "./styles";

const fileTypes = ["CSV", "XLSX"];

export default function HomePage() {
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    code: null,
    name: null,
    cost_price: null,
    sales_price: null,
  });

  const handleChange = (file) => {
    setFile(file);
  };

  const updateSingleProduct = (key, value) => {
    setProduct({ ...product, [key]: value });
  };

  return (
    <Container>
      <h2>Arraste sua planilha de produtos ou <br />arquivo CSV para a área destacada! </h2>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
      {
        file ?
          null
          :
          <IndividualUpdate>
            <h4>Ou digite as alterações que deseja fazer.</h4>

            {/*validar se eh numerico e validar existencia do produto*/}
            <LabelSyles htmlFor="code" >
              code
              <input type="text" id="code" onChange={(event) => updateSingleProduct('code', event.target.value)} />
            </LabelSyles>

            <LabelSyles htmlFor="name" >
              name
              <input type="text" id="name" disabled={!product.code} onChange={(event) => updateSingleProduct('code', event.target.value)} />
            </LabelSyles>

            {/*validar valor numerico*/}
            <LabelSyles htmlFor="cost_price" >
              cost price
              <input type="text" id="cost_price" disabled={!product.code} onChange={(event) => updateSingleProduct('code', event.target.value)} />
            </LabelSyles>

            {/*validar valor numerico e se eh maior que cost_price*/}
            <LabelSyles htmlFor="sales_pricecode" >
              sales price
              <input type="text" id="sales_price" disabled={!product.code} onChange={(event) => updateSingleProduct('code', event.target.value)} />
            </LabelSyles>
          </IndividualUpdate>
      }
    </Container>
  );
}
