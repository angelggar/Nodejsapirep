import express from "express"
const server = express()

server.get("/", (peticion, respuesta) =>{
    console.log("Ejecutando get");
    console.log(peticion.ip);
    respuesta.send("Hola")
})

server.post("/", (peticion, respuesta) =>{
    console.log("Ejecutando post");
    respuesta.send("Hola post")
})

server.listen(3600, ()=>{
    console.log("http://localhost:3600");
})

