import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Container, IndividualUpdate } from "./styles";

const fileTypes = ["CSV", "XLSX"];

export default function HomePage() {
  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <Container>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
      <IndividualUpdate>
        <label>
          <input type="text" name="name" />
        </label>
        <label>
          <input type="text" name="code" />
        </label>
        <label>
          <input type="text" name="cost_price" />
        </label>
        <label>
          <input type="text" name="sales_price" />
        </label>
      </IndividualUpdate>
    </Container>
  );
}
