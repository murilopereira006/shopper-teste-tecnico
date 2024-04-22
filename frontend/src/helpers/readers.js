const xlsx = require('xlsx');

export const CSVreader = (file) => { };

export async function XLSXreader(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = xlsx.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0]; // Supondo que queremos ler apenas a primeira planilha
      const worksheet = workbook.Sheets[sheetName];
      const dataArray = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

      // Convertendo array de arrays em array de objetos (cada linha é um objeto)
      const headers = dataArray[0];
      const objectsArray = dataArray.slice(1).map(row => {
        const obj = {};
        headers.forEach((header, index) => {
          obj[header] = row[index];
        });
        return obj;
      });

      resolve(objectsArray);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsArrayBuffer(file);
  });
}
