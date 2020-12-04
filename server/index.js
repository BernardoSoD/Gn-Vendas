const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'GnVendas'
});

app.get("/", (req,res) => {
    console.log('someone entered!');
    res.send('oi');
});

app.listen(3001, () => console.log('running'));