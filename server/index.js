const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '6Yd87XG672F0Vvil2jsE',
  database: 'cruddatabase',
});

app.post('/login', (req, res) => {
  const name = req.body.username;
  const password = req.body.password;

  const sqlQuery = 'SELECT * FROM login_table WHERE username=? and password=?';
  db.query(sqlQuery, [name, password], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length === 0) {
        console.log('incorrect user');

        res.send(result);
      } else {
        res.send({
          token: 'test123',
        });
      }
    }
  });

  // res.send({
  //   token: 'test123',
  // });
});

app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const order = req.body.order;
  const updatetSqlOrder = `UPDATE customer_order SET name=?, phone=?, email=?, order_items=? WHERE id=${id}`;
  db.query(updatetSqlOrder, [name, phone, email, order], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put('/process-order/:id', (req, res) => {
  const processSqlOrder =
    'UPDATE customer_order SET process_order=1 WHERE id =?';
  const id = req.params.id;
  db.query(processSqlOrder, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put('/complete-order/:id', (req, res) => {
  const processSqlOrder =
    'UPDATE customer_order SET complete_order=1 WHERE id =?';
  const id = req.params.id;
  db.query(processSqlOrder, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/update-order/:id', (req, res) => {
  const getSqlProcessOrder =
    'SELECT * FROM customer_order WHERE id=? AND process_order=0 AND complete_order=0';
  const id = req.params.id;
  db.query(getSqlProcessOrder, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/process-orders', (req, res) => {
  const sqlGet =
    'Select * FROM customer_order WHERE process_order=1 AND complete_order=0';
  db.query(sqlGet, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/complete-orders', (req, res) => {
  const sqlGet =
    'Select * FROM customer_order WHERE process_order=1 AND complete_order=1';
  db.query(sqlGet, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/orders', (req, res) => {
  const sqlGet =
    'Select * FROM customer_order WHERE process_order=0 AND complete_order=0';
  db.query(sqlGet, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post('/create', (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const order = req.body.order;

  const sqlInsert =
    'INSERT INTO customer_order (name,phone,email,order_items) VALUES (?,?,?,?)';
  db.query(sqlInsert, [name, phone, email, order], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send('Values inserted');
    }
  });
});

app.listen(3002, () => {
  console.log('Your server is running on port 3002');
});
