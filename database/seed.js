const faker = require('faker');
const moment = require('moment')
const Promise = require('bluebird');
const path = require('path')
const fs = require('fs');
const jsonToCsv = require('json2csv').parse;
const db = require('./index.js');
const pathFile = path.join(__dirname, 'data.csv');

const fakeDataGenerator = () => {
  let counter = 1
  const startTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  console.log('this is the startTime ', startTime);
  for (let m = 0; m < 100; m++) {
    const percentage = `${m}%`;
    console.log('loading: ', percentage);
    let data = [];
    for (let i = 0; i < 100; i += 1) {
      const dataObj = {};
      dataObj.home_id = counter;
      dataObj.home_name = `home${counter}`;
      dataObj.home_price = faker.random.number({ min: 200000, max: 1500000 });
      dataObj.property_tax = faker.random.number({ min: 1000, max: 5000 });
      dataObj.home_insurance = faker.random.number({ min: 400, max: 1000 });
      dataObj.hoa_dues = faker.random.number({ min: 100, max: 500 });
      counter ++
      data.push(dataObj);
    }
    const csv = jsonToCsv(data, {header: false });
    fs.appendFileSync(pathFile, '\n'+ csv)
  }
  const endTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  console.log('this is the endTime ', endTime)
};

fakeDataGenerator();


// const dataGenerator = Promise.resolve(fakeDataGenerator());

// dataGenerator.then((data) => {
//   data.forEach((house) => {
//     const queryString = 'INSERT INTO mortgage (home_id, home_name, home_price, property_tax, home_insurance, hoa_dues) VALUES (?, ?, ?, ?, ?, ?)';
//     const values = [house.home_id, house.home_name, house.home_price, house.property_tax, house.home_insurance, house.hoa_dues];

//     db.query(queryString, values, (err, res)=> {
//       if (err) {
//         console.log(err)
//       } else {

//       }
//     });
//   });
// }).catch((error) => {
//   console.log(error);
// })
