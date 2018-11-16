const path = require('path');
const fs = require('fs');

const pathFile = path.join(__dirname, 'data.csv');

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const fakeDataGenerator = () => {
  fs.writeFileSync(pathFile, '\n');
  for (let m = 0; m < 10000; m += 1) {
    let data = '';
    for (let i = 1; i <= 1000; i += 1) {
      const id = i + (m * 1000);
      const name = `home${id}`;
      const price = random(200000, 1500000);
      const tax = random(1000, 5000);
      const insurance = random(400, 1000);
      const dues = random(100, 500);
      data += `${id}, ${name}, ${price}, ${tax}, ${insurance}, ${dues} \n`;
    }
    fs.appendFileSync(pathFile, data);
  }
};

fakeDataGenerator();
