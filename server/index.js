'use strict';

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const Gerencianet = require('gn-api-sdk-node');

const app = express();

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'gnvendas'
});

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

/****************************Homepage***************************/
app.get('/', (req, res) => {
    const sqlQuery = "SELECT * FROM produtos";
    db.query(sqlQuery, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

/***************************Cadastrar um produto***********************************/
app.post('/register', (req, res) => {
    const name = req.body.name;
    const price = req.body.price;

    if (name.length === 0 || price.length === 0 || price.search(/[0-9]/) === -1 || name.length > 45 || parseFloat(price) < 0 || price.search(/[^0-9.]/gi) !== -1){
        res.send("Erro na formatação dos dados");
    } else {
        const sqlQuery = "INSERT INTO produtos (nome, valor) VALUES (?,?)";
        db.query(sqlQuery, [name, price], (err, result) =>{
            if (err) throw err;
            res.send("Produto cadastrado com sucesso!");
        });
    }
});

/*****************************Comprar um produto***********************************/
app.post('/gnapi', (req,res) => {
    const username = req.body.Username;
    const cpf = req.body.CPF;
    const phone = req.body.Phone;
    const productName = req.body.ProductName; 
    const price = parseFloat(req.body.Price)*100;

    //validar oq to passando pra api da gerencianet

    let options = {
        client_id: 'Client_Id_4e4327e045ceb277ed5f62db8c46c399c309e0bf',
        client_secret: 'Client_Secret_bb1ad596c70e1c17089cd27ec860816670412681',
        sandbox: true
    };

    let depoisDeAmanha = new Date(Date.now() + 1000*60*60*48).toISOString().slice(0,10);

    let body = {
        payment: {
          banking_billet: {
            expire_at: depoisDeAmanha,
            customer: {
              name: username,
              cpf: cpf,
              phone_number: phone,
            }
          }
        },
      
        items: [{
          name: productName,
          value: price,
          amount: 1
        }] //OBS: o valor total da cobrança deve ser maior ou igual a 5
    };

    let gerencianet = new Gerencianet(options);
    //todos os campos de formulario devem ser validados no frontend e no backend
    //alterar o readme e explicar a instalação e execução do projeto
    gerencianet
        .oneStep([], body)
        .then(
            response => {
                const json = response.data;
                const sqlQuery = "INSERT INTO compras (linkpdf, idboleto) VALUES (?,?)";
                db.query(sqlQuery, [json.pdf.charge, json.charge_id], (err, result) => {
                    if (err) throw err;
                    res.send([json.charge_id,json.pdf.charge]);
                });
            }
        )
        .catch(console.log)
        .done();
});

app.listen(3001, () => console.log('running'));