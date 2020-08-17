const express = require('express')
const app = express();
const port = 3000;
const dbConfig = require('./config/database')
const db = require('./models');

// database + sequelize 
const connection = dbConfig.init();
dbConfig.connect(connection);
db.sequelize.sync();

// 미들웨어 

app.get('/',(req,res)=>{
  res.send('Hello ! start Express');
});


//sync()가 실행되면 index.js 내에서 작성된 Sequelize 작업이 실제 DB와 동기화되면서 실행.

app.listen(port, () => {
  console.log('Start Server');
});

