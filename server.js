const express = require("express")
const cors = require("cors")
const path = require("path")

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
