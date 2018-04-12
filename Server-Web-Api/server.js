const express = require('express');
const RouterManager = require('./routes');
const morgan = require('morgan');
const config = require('./config');
const CookieParser = require('cookie-parser');

const app = express();

app.use(morgan('dev'));
app.set('secret', config.secret);
app.use(CookieParser());

RouterManager.attach(app);

app.listen(8080, function(){
  console.log('Connected on api...');
});
