var express = require('express');

app = express();
app.set('port',3000);
app.set('views',__dirname+'/tpl');
app.use(express.static(__dirname+'/public'));
app.set('view engine','')