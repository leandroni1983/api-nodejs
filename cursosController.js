let data = require('./cursosModel');


function GetAllCursos(req,res){
    res.json(data);
}

//exporto 
module.exports = {
    GetAllCursos
}