const path = require('path');
const fs = require('fs');

const pathFile = path.join(__dirname, 'data.csv');

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const fakeDataGenerator = () => {
  fs.writeFileSync(pathFile, 'id, name, price, tax, insurance, dues\n');
  let counter = 1;
  for (let m = 0; m < 10000; m += 1) {
    let data = '';
    for (let i = 1; i <= 1000; i += 1) {
      const id = counter;
      const name = `home${counter}`;
      const price = random(200000, 1500000);
      const tax = random(1000, 5000);
      const insurance = random(400, 1000);
      const dues = random(100, 500);
      counter += 1;
      data += `${id},${name},${price},${tax},${insurance},${dues}\n`;
    }
    fs.appendFileSync(pathFile, data);
  }
};

fakeDataGenerator();
