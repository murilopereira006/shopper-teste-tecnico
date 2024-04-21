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

const readXLSX = () => { }

module.exports = { readCSV, readXLSX };
