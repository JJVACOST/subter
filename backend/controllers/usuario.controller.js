const Usuario = require('../models/usuarios')

exports.crearUsuarios = async (req, res) => {
    const myfilter = { correo: req.body.correo }
    
    console.log(req)
    
    try {
        const usuariosData = await Usuario.findOne(myfilter)
        console.log(usuariosData)
        if (usuariosData == null) {
            let newUsuario
            newUsuario = new Usuario(req.body)
            await newUsuario.save()
            res.send(newUsuario)
        } else {
            res.status(400).send(`pilas mi hermano, eso ya existe ${req.body.correo}`)
        }

    } catch (error) {
        console.log(error)
        res.status(502).send('Ups ocurrio una vaina, pilas ahi!!😒')
    }
}


exports.obtenerUsuarios = async (req, res) => {

    try {
        const usuariosData = await Usuario.find()
        res.json(usuariosData)
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups ocurrio una vaina, pilas ahi!!😒')
    }
}

exports.obtenerUsuario = async (req, res) => {
    try {
        let regxmon = /^[0-9a-f]{24}$/
        if (regxmon.test(req.params.id)) {
            const usuariosData = await Usuario.findById(req.params.id)
            if (!usuariosData) {
                res.status(404).send('De eso no hay, pilas ahi!!😒')
            } else {
                res.json(usuariosData)
            }
        } else {
            res.status(418).send('ese id esta como raro, pilas ahi!!😒')
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups ocurrio una vaina, pilas ahi!!😒')
    }
}
