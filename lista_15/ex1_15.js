const sqlite = require('sqlite3')

const db = new sqlite.Database('lou.db', err =>{
    if(erro){
        console.log(erro);

    }else{
        console.log("Conectando com sucesso no banco de dados!")
    }
})