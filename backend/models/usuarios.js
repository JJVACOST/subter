const mongoose = require('mongoose')

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required:true
    }
    ,
    telefono: {
        type: Number,
        required:true
    },
    correo: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    rol: {
        type: String,
        required:true
    },
    fecha_ins: {
        type: Date,
        default: Date.now()
    }   
},{
    timestamps:true,
    versionKey:false
} 

)


module.exports = mongoose.model('usuario', UsuarioSchema)
 