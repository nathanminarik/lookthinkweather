'use strict';

const express = require('express');
const app = express();
const parser = require('body-parser');

app.set('port', process.env.PORT || 3000);
//app.set('view engine', 'ejs');

// This serves the static files
app.use(express.static('public'));

app.use(parser.json());

// Links the root path to the chatCat router
//app.use('/', chatCat.router);

// This sets the views path in the express framework. It can be any named anything. 
//app.set('views', './newviews')  

app.listen(app.get('port'), () => {
    console.log('ChatCAT Running on Port: ' + app.get('port'));
});