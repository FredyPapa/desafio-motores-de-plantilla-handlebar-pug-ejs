//Importaciones de terceros
let express = require("express");
//let hbs = require("express-handlebars");
let cors = require("cors");
let path = require("path");

//Clase servidor
class server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.productosPath = "/productos";
        //Middlewares
        this.middlewares();
        //Rutas de mi aplicación
        this.routes();
        /*
        //Handlebars
        this.app.engine("handlebars",hbs.engine());
        this.app.set("views","views/hbs");
        this.app.set("view engine", "handlebars");
        //
        this.app.get("/",(req,res,next)=>{
            res.render("../index", {});
        });
        */
        /*
        //Pug
        this.app.set("views", path.join(__dirname,"../views","pug"));
        this.app.set("view engine","pug");
        //
        this.app.get("/",(req,res,next)=>{
           res.render("index", {});
        });
        */
        //EJS
        this.app.set("views", path.join(__dirname,"../views","ejs"));
        this.app.set("view engine","ejs");
        this.app.get("/",(req,res,next)=>{
            res.render("index", {});
        });
    }

    middlewares(){
        //CORS
        this.app.use(cors("*"));
        //Lectura y parseo del body
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        //Directorio público
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.productosPath,require("../routes/productos"));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en http://localhost:${this.port}`);
        });
    }
}

//Exportamos la clase
module.exports = server;