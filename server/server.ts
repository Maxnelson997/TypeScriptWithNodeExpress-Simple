import express = require('express');

const app: express.Application = express();

app.get('/', (req, res) => {
    res.send('TypeScript with Node bby.');
});

app.listen(3000, () => {
    console.log('app listening on 3000.');
});