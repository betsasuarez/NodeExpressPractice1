const express = require('express');

const app = express();

app.use((req, res, next)=>{
    
    let body = '';
    req.on ('end',()=>{
        const userName = body.split ('=')[1];

        if (userName){
            req.body ={name: userName}
        }
});

req.on ('data',(chunk)=>{

    body += chunk;

    });
});
   
app.use((req, res, next) => {
    res.send(`<form method="POST">' 
    '<input type = "text" name="user-name" />' 
    '<button>Create User</button>' 
    '</form>`)
});


app.listen(5001);