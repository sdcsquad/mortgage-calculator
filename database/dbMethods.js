const db = require('./index.js');

const retrieve = (id, callback) => {
  const sql = `SELECT * FROM mortgage WHERE id=${id}`;
  db.query(sql, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const add = (id, callback) => {
  const sql = 'INSERT INTO mortgage (home_price, property_tax, home_insurance, hoa_dues) VALUES(?, ?, ?, ?)';
  const data = [el.home_price, el.property_tax, el.home_insurance, el.hoa_dues]
  db.query(sql, data , (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const update = (id, callback) => {
  const sql = 'UPDATE mortgage SET home_price = ?, property_tax = ?, home_insurance = ?, home_insurance = ?, hoa_dues = ? WHERE id = ?';
  const data = [el.home_price, el.property_tax, el.home_insurance, el.hoa_dues, el.id]
  db.query(sql, data , (err, results, fields) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};


const deleteItem = (id, callback) => {
  const sql = 'DELETE FROM mortgage WHERE id = `${id}';
  db.query(sql, (err, results, fields) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = { retrieve, add, update, deleteItem };

