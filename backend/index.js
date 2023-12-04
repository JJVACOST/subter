const express = require('express')
const conectarDB = require('./config/db')
const cors = require('cors')


const app = express()
conectarDB()
app.use(cors())
app.use(express.json())
app.use('/imagenes', express.static('public'))
// importamos las rutas que se encuentran en el archivo de rutas
app.get('/',(req,res) => res.send('Hello'))
app.use('/api/v1', require('./routes/routes'))

app.listen(5000, ()=>{
    console.log("servidor arriba *")
})
