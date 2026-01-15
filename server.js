const express = require("express")
const cors = require("cors")
const path = require("path")
const fs = require ("fs")
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))


app.get("/", (req, res) => {
  res.send("servidor prenddddddddido")
})

app.post("/api/admin", (req, res) => {
  const { user, password } = req.body
  console.log("datos recibidos en el servidor:", user, password)

  if (user === "admin" && password === "password") {
    res.json({ sesion: true, mensaje: "iniciaste sesion" })
  } else {
    res.status(401).json({ sesion: false, mensaje: "incorrecto" })
  }
})


 
const PORT = 8888

app.listen(PORT, () => {
  console.log("servidor prendddddido en el puerto 8888")
})


/*
app.post("/api/crear-rifa", (req, res=> {
    const { nombre, precio , descripcion, tipo, inicio, final, cantidadBoletos, estado, id, premio} = req.body
    console.log("ejecucion")
if(!nombre || !precio || !descripcion|| !tipo || !inicio|| !final|| !cantidadBoletos|| !estado || !id|| !premio ){
    return res.status(404).json ({mensaje:"todos los campos son obligatorios"})
}
try {

  let rifas = []



} catch (error) {
    
}

    
}))
*/

