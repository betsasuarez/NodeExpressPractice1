

const fs = require('fs');

const userName = 'Trafalgar';

fs.writeFile('text-data.txt', `Nombre de Usuario: ${userName}`, (err)=>{
    if (err){
        console.log(err);
        return;
    }
    console.log('archivo creado satisfactoriamente');
});