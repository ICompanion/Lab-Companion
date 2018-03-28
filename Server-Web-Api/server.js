const express = require('express');
const app = express();

const var = "teub";

app.get('/api/', function(req, res){
   res.send({express: 'kioukiou'});
});

app.listen(8080, function(){
  console.log('Connected on api...');
});
