const xlsx = require('xlsx');

export async function CSVreader(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target.result;
      const dataArray = data.split('\n').map(row => row.split(','));

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

    reader.readAsText(file);
  });
}


export async function XLSXreader(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = xlsx.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const dataArray = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

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
