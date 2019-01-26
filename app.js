var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));


//fire controller
todoController(app);

//listen 
app.listen(3000);
console.log('listenig to port 3000');

