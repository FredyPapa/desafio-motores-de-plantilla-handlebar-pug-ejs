const {response, request} = require("express");
//
let Contenedor = require("./contenedor");
let contenedor = new Contenedor("./file/productos.txt");


const productosGet = async(req=request,res=response,next)=>{
    //Handlebars
    //res.render("../listado", {data:await contenedor.getAll()});
    //Pug
    //res.render("listado", {data:await contenedor.getAll()});
    //EJS
    res.render("listado", {data:await contenedor.getAll()});
}

const productosPost = async(req=request,res=response,next)=>{
    const producto = {
        title: req.body.title,
        price: req.body.price,
        thumbnail: req.body.thumbnail
    };
    //Handlebars
    //res.render("../index", await contenedor.save(producto));
    //Pug
    //res.render("index", await contenedor.save(producto));
    //EJS
    res.render("index", await contenedor.save(producto));
}

module.exports = {
    productosGet,
    productosPost
}