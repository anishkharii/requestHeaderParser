const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({optionsSuccessStatus:200}))
app.use('/public',express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/index.html');
});

app.get('/api/whaomi',(req,res)=>{
    res.json({
        "ipaddress":req.ip,
        "language":req.headers['accept-language'],
        "software":req.headers['user-agent']
    });
})

app.listen(3000,()=>{
    console.log('Connected');
})