const faker = require('faker');
const Promise = require('bluebird');
const fs = require('fs');
const db = require('./index.js');

const fakeDataGenerator = () => {
  const data = [];
  for (let i = 1; i < 10; i += 1) {
    const dataObj = {};
    dataObj.home_id = i;
    dataObj.home_name = `home${i}`;
    dataObj.home_price = faker.random.number({ min: 200000, max: 1500000 });
    dataObj.property_tax = faker.random.number({ min: 1000, max: 5000 });
    dataObj.home_insurance = faker.random.number({ min: 400, max: 1000 });
    dataObj.hoa_dues = faker.random.number({ min: 100, max: 500 });
    data.push(dataObj);
  }
  let csvContent = "id, name, price, tax, insurance, dues"+"\r\n";
  data.forEach((item) => {
    let information = Object.values(item);
    let row = information.join(",");
    csvContent += row + "\r\n";
  });

  fs.writeFile('data.csv', csvContent, (err) => {
    if (err) throw err;
    console.log('File has been saved!');
  });
  return data;
};

const dataGenerator = Promise.resolve(fakeDataGenerator());

dataGenerator.then((data) => {
  data.forEach((house) => {
    const queryString = 'INSERT INTO mortgage (home_id, home_name, home_price, property_tax, home_insurance, hoa_dues) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [house.home_id, house.home_name, house.home_price, house.property_tax, house.home_insurance, house.hoa_dues];

    db.query(queryString, values, (err, res)=> {
      if (err) {
        console.log(err)
      } else {
        console.log('success');
      }
    });
  });
}).catch((error) => {
  console.log(error);
})
