require('dotenv').config({path: 'config.env'})
const jwt = require('jsonwebtoken')
const Usuario = require('../models/usuarios')

exports.genToken = async(req, res) =>{
    const { correo, password } = req.body
    console.log(req.body)
    console.log('este es el correo '+correo)
    console.log('este es el pass '+password)

    const usuario = await  Usuario.findOne({correo:correo})

    console.log('result querie '+usuario)

        if (!usuario) {
            return res.status(401).json({ mensaje: 'El usuario no existe' })
            
        }
        
        if (usuario.password != password){
            return res.status(401).json({ mensaje: 'Contraseña invalida' })
        }

        const payload = {
            id: usuario._id,
            nombre: usuario.nombre
        }

        const token = jwt.sign(payload, process.env.UNDERGROUND_SECRET_KEY, {expiresIn: '10m'})
        return res.status(202).json({token:token})

}

exports.desencriptarToken = (req, res) => {
    const token = req.body.tokenUser;
    jwt.verify(token, process.env.UNDERGROUND_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ mensaje: 'Token inválido' });
        }
        res.status(200).json({ decodedPayload: decoded });
    });
};
