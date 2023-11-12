const mongoose = require('mongoose')

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required:true
    }
    ,
    descripcion: {
        type: String,
        required:true
    }
    ,
    precio: {
        type: Number,
        required:true
    },
    urlImg: {
        type: String,
        required:true
    },
    categoria: {
        type: String,
        required:true
    },
    status: {
        type: String,
        required:true
    },
    fecha_ins: {
        type: Date,
        default: Date.now()
    }   
},
{
    timestamps:true,
    versionKey:false
} 

)


module.exports = mongoose.model('Producto', ProductoSchema)
 