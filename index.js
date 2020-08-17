const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello ! start Express');
});

app.listen(3000,() => {
    console.log('Start Server');
});

