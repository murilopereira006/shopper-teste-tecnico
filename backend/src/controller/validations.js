const xlsx = require('xlsx');

const parseString = (inputString) => {
  const cleanedString = inputString.replace(/\r/g, '');

  const lines = cleanedString.split('\n');
  const keys = lines[0].split(',');
  const objects = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const obj = {};
    for (let j = 0; j < keys.length; j++) {
      obj[keys[j]] = values[j];
    }

    objects.push(obj);
  }
  return objects;
}

const readCSV = async (csvData) => {
  return parseString(csvData);
};

const readXLSX = (xlsxData) => {
  const workbook = xlsx.read(xlsxData, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });
  const keys = data[0];
  const objects = [];

  for (let i = 1; i < data.length; i++) {
    const values = data[i];
    const obj = {};
    for (let j = 0; j < keys.length; j++) {
      if (keys[j] === 'code') {
        obj[keys[j]] = String(values[j]);
      } else {
        obj[keys[j]] = values[j];
      }
    }
    objects.push(obj);
  }

  return objects;
};

module.exports = { readCSV, readXLSX };
