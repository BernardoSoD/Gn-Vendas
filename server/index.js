const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'GnVendas'
});

app.use(express.json());
app.use(cors());

//tenta isso aki dps: app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));


//db.query('INSERT INTO...', (err, result) => {
//  if (err) throw err;
//  qlqr coisa aki
//})

app.get("/", (req,res) => {
    res.send('oi');
});

app.listen(3001, () => console.log('running'));