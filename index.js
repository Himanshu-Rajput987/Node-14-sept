const express = require('express');
const app = express();
const user = require('./routes/users');
app.use(user);



app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("server is running on 3000");
    }
});