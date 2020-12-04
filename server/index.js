const express = require('express');
const app = express();

app.get("/", (req,res) => {
    console.log('someone entered!');
    res.send('oi');
});

app.listen(3001, () => console.log('running'));