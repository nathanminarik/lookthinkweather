'use strict';

const express = require('express');
const app = express();
const parser = require('body-parser');

app.set('port', process.env.PORT || 3000);

// This serves the static files
app.use(express.static('public'));

app.use(parser.json());

app.listen(app.get('port'), () => {
    console.log('ChatCAT Running on Port: ' + app.get('port'));
});