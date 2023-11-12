const jwt = require('jsonwebtoken')
require('dotenv').config({ path: 'config.env' })

exports.verificarToken = (req, res, next) => {

    console.log(req.headers)

    let token = req.headers.authorization

    if (!token) {
        return res.status(400).json({ msg: "Token no recibido" })
    }

    token = token.split(' ')
    jwt.verify(token[1], process.env.UNDERGROUND_SECRET_KEY, (error, decoded) => {
        if (error) {
            return res.status(403).json({ msg: "Token invalido" })
        }

        req.userData = decoded
        next()
    })


}
