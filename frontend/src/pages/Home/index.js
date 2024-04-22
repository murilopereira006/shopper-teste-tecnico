import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { XLSXreader, CSVreader } from '../../helpers/readers'
import { Tooltip } from 'react-tooltip'
import Warnings from "../../components/warnings"
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

  const handleChange = async (file) => {
    setFile(file);
    const dataArray = await XLSXreader(file); // Utilizar a função XLSXreader para obter os dados do arquivo XLSX
    console.log('Olhaaa => ', dataArray); // Exemplo de uso, pode ser adaptado conforme necessário
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
          <Warnings file={file} />
          :
          <IndividualUpdate>
            <h4>Ou digite as alterações que deseja fazer.</h4>

            {/*validar se eh numerico e validar existencia do produto*/}
            <LabelSyles htmlFor="code" >
              code
              <input type="text" id="code" onChange={(event) => updateSingleProduct('code', event.target.value)} />
            </LabelSyles>

            {!product.code && <Tooltip id="my-tooltip" />}
            <LabelSyles htmlFor="name" data-tooltip-id="my-tooltip" data-tooltip-content="Primeiro adicione o código do produto desejado." >
              name
              <input type="text" id="name" disabled={!product.code} onChange={(event) => updateSingleProduct('name', event.target.value)} />
            </LabelSyles>

            {/*validar valor numerico*/}
            <LabelSyles htmlFor="cost_price" data-tooltip-id="my-tooltip" data-tooltip-content="Primeiro adicione o código do produto desejado." >
              cost price
              <input type="text" id="cost_price" disabled={!product.code} onChange={(event) => updateSingleProduct('cost_price', event.target.value)} />
            </LabelSyles>

            {/*validar valor numerico e se eh maior que cost_price*/}
            <LabelSyles htmlFor="sales_price" data-tooltip-id="my-tooltip" data-tooltip-content="Primeiro adicione o código do produto desejado." >
              sales price
              <input type="text" id="sales_price" disabled={!product.code} onChange={(event) => updateSingleProduct('sales_price', event.target.value)} />
            </LabelSyles>
          </IndividualUpdate>
      }
    </Container>
  );
}
