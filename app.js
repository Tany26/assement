const express = require('express');
const cors = require('cors');

const app = express();
const db = require('./db/config/db');
db();
const corsOption ={
    origin:'*'
}

app.use(cors(corsOption));

app.use(express.json());
app.use('/',require('./routes/add'));
app.use('/',require('./routes/check'));

app.use('/',require('./routes/update'));

app.use('/',require('./routes/delete'));
app.listen(4444,()=>{
    console.log("Server Started on http://localhost:4444/");
})