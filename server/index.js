const routerApi = require('./router');
const bodyParser = require('body-parser'); // post 数据是需要
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const session = require('express-session');

// request body large
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
  secret: '8023',
  resave: false,
  saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/api', routerApi);

// var https = require('https')
//   ,fs = require("fs");
//
// var options = {
//   key: fs.readFileSync('../key.pem'),
//   cert: fs.readFileSync('../cer.pem')
// };

// https.createServer(options, app).listen(443, function () {
//   console.log('Https server listening on port ' + 443);
// });
//
// 监听端口
app.listen(3000);
console.log('success listen at port:3000......');
