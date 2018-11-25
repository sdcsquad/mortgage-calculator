const client = require('./index.js');

const retrieve = (id, callback) => {
  const sql = `SELECT * FROM datahaus WHERE home_id=${id}`;
  client.query(sql, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const add = (data, callback) => {
  const sql = 'INSERT INTO mortgage (home_price, property_tax, home_insurance, hoa_dues) VALUES(?, ?, ?, ?)';
  const values = [data.home_price, data.property_tax, data.home_insurance, data.hoa_dues];
  db.query(sql, values, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const update = (data, callback) => {
  const sql = 'UPDATE mortgage SET home_price = ?, property_tax = ?, home_insurance = ?, home_insurance = ?, hoa_dues = ? WHERE id = ?';
  const values = [data.home_price, data.property_tax, data.home_insurance, data.hoa_dues, data.id];
  db.query(sql, values, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};


const deleteItem = (id, callback) => {
  const sql = `DELETE FROM mortgage WHERE id = ${id}`;
  db.query(sql, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  retrieve,
  add,
  update,
  deleteItem,
};
