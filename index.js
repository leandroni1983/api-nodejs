let express=require('express');
let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit:"50mb",extended: true}));


app.use(require('./cursosRoutes'))

app.listen(3000, function(){
    console.log('app corriendo en puerto 3000')
})