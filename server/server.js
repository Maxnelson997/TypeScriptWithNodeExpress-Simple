"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send('TypeScript with Node bby.');
});
app.listen(3000, function () {
    console.log('app listening on 3000.');
});
