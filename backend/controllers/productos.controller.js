const Producto = require('../models/Productos')

exports.crearProductos = async (req, res) => {
console.log(req.body);
    const myfilter = { nombre: req.body.nombre }

    try {
        const productosData = await Producto.findOne(myfilter)
        console.log(productosData)
        if (productosData == null) {
            let Producto1
            Producto1 = new Producto(req.body)
            await Producto1.save()
            res.send(Producto1)
        } else {
            res.status(400).send(`pilas mi hermano, eso ya existe ${req.body.nombre}`)
        }

    } catch (error) {
        console.log(error)
        res.status(502).send('Ups ocurrio una vaina, pilas ahi!!😒')
    }
}


exports.obtenerProductos = async (req, res) => {

    try {
        const productosData = await Producto.find()
        res.json(productosData)
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups ocurrio una vaina, pilas ahi!!😒')
    }
}

exports.obtenerProductosActivos = async (req, res) => {

    try {
        const productosData = await Producto.find({ "status": "Activo" })
        res.json(productosData)
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups ocurrio una vaina, pilas ahi!!😒')
    }
}

exports.obtenerProducto = async (req, res) => {
    try {
        let regxmon = /^[0-9a-f]{24}$/
        if (regxmon.test(req.params.id)) {
            const productoData = await Producto.findById(req.params.id)
            if (!productoData) {
                res.status(404).send('De eso no hay, pilas ahi!!😒')
            } else {
                res.json(productoData)
            }
        } else {
            res.status(418).send('ese id esta como raro, pilas ahi!!😒')
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups ocurrio una vaina, pilas ahi!!😒')
    }
}


exports.eliminarProducto = async (req, res) => {
    try {
        let regxmon = /^[0-9a-f]{24}$/
        if (regxmon.test(req.params.id)) {
            const productoData = await Producto.findById(req.params.id)
            if (!productoData) {
                res.status(404).send('De eso no hay, pilas ahi!!😒')
            } else {
                await Producto.findOneAndRemove({ _id: req.params.id })
                res.send("Producto Eliminado")
            }
        } else {
            res.status(418).send('ese id esta como raro, pilas ahi!!😒')
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups ocurrio una vaina, pilas ahi!!😒')
    }
}


exports.actualizarProducto = async (req, res) => {
    try {
        let regxmon = /^[0-9a-f]{24}$/
        console.log(req.params)
        if (regxmon.test(req.params.id)) {
            const productoData = await Producto.findById(req.params.id)
            if (!productoData) {
                res.status(404).send('De eso no hay, pilas ahi!!😒')
            } else {
                let productoData = await Producto.findByIdAndUpdate({ _id: req.params.id }, req.body)
                res.json(productoData)

            }
        } else {
            res.status(418).send('ese id esta como raro, pilas ahi!!😒')
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups ocurrio una vaina, pilas ahi!!😒')
    }
}
